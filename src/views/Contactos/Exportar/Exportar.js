import React, { Component } from 'react';
import {  Row, Col, Card, CardBody, CardHeader } from 'reactstrap'

import Contactos from '../../../models/Contactos.js';
import NavBar from '../NavBar.js';
import Variables from '../../../variables/models.js';

import ComboBox from '../componets/ComboBox.js';

import SetAccionComponent from './Hooks/SetAccion';
import ExportacionComponent from './Hooks/Exportacion';
import ImportacionComponent from './Hooks/Importacion';

class Exportar extends Component {


    constructor(props) {
        super(props);

        this.state = {
            campos: [],
            campos_extra: [],
            vals_principales: [],
            vals_extras: [],
            componente: '',
            exportData: [],

            id_grupo: "",
            accion: "",
        }

        this.grupoId = 0;
        this.cuenta = 0;
        this.modelo = new Contactos();
        this.variables = new Variables();
    }

    componentDidMount = () => {
        this.cuenta = require('store').get('cuenta_en_uso').id
    }

    //Funcion para traer el id del grupo que se selcciono
    setGrupoId = (id) => {
        this.setState({id_grupo:"", accion:""}, () => {
            this.setState({ id_grupo: id });    
        })
        
    }
    setAcion = (value) => {
        this.setState({ accion: value })
    }

    //Render de la clase
    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12">
                        <Card className="">
                            <CardHeader>
                                <NavBar
                                    title="Exportar"
                                />
                            </CardHeader>
                            <CardBody>

                            <Row>
                                    <Col md="12">
                                        <p className="h4 mb-0">Tranferencia de Contactos</p>
                                        <p className="h6 text-muted">Importa nuevos contactos o eportalos para respaldarlos. Solo sigue los pasos</p>
                                    </Col>
                                </Row>
                                <hr />

                                <Row>
                                    <Col md="8" xs="12" className="mx-auto">
                                        <p className="h4"><b>① Selecciona el grupo de contactos</b></p>
                                        <ComboBox
                                            action={this.setGrupoId}
                                        />
                                    </Col>
                                </Row>


                                {/* Accion Component */}
                                {this.state.id_grupo > 0 ?
                                    <>
                                        <hr />
                                        <SetAccionComponent
                                            setAccion={this.setAcion}
                                        />
                                    </>
                                    : <></>
                                }

                                <hr />

                                {this.state.accion === "Exportar" ?
                                    /* Esportar */
                                    <ExportacionComponent
                                        id_grupo={this.state.id_grupo}
                                    />
                                    :

                                    <>{this.state.accion === "Importar" ?
                                        <ImportacionComponent
                                            id_grupo={this.state.id_grupo}
                                        />
                                        /* Importar */
                                        :
                                        <></>
                                    }</>
                                }
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>

        );
    }

}

export default Exportar;





