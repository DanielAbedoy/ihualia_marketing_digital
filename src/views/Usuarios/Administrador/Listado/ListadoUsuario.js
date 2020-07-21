import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Row, Col, Navbar } from 'reactstrap';

import NavBar from '../navbar.js';
import Modelo from '../../../../models/Marketing.js';

class ListadoUsuario extends Component {

  state = {
    usuarios: []
  }

  componentDidMount = () => this.peticion_usuarios();

  peticion_usuarios = () => {
    new Modelo().get_usuarios_cliente(require('store').get('usuario_guardado').id_cliente)
      .then(r => this.setState({ usuarios: r }))
  }

  administrar_cuenta = (e) => {
    new Modelo().getUsuario(e.target.id)
      .then(r => {
        this.props.history.push({
          pathname: '/usuarios/administrar',
          state:r
        })
      })
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <NavBar

                />

              </CardHeader>
              <CardBody>

                <Row>
                  <Col md="12">
                    <div className={"table-responsive table-bordered table-hover"} >
                      <table className="table text-center">
                        <thead>
                          <tr className="thead-dark">
                            <th>Nombre</th>
                            <th>Usuario</th>
                            <th>Correo</th>
                            <th>Estatus</th>
                            <th>Opciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.usuarios.map((usuario, i) => {
                            return (
                              <tr key={i}>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.usuario}</td>
                                <td>{usuario.correo}</td>
                                <td className={usuario.estatus.toLowerCase() == "activo" ? "bg-success" : "bg-danger"} >{usuario.estatus}</td>
                                <td className="">
                                  <i id={usuario.correo} onClick={this.administrar_cuenta} className="fa fa-cog border rounded bg-primary p-1" style={{ cursor: "pointer" }}></i>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </Col>
                </Row>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ListadoUsuario;