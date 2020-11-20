import React, {Component} from 'react';
import { Card, CardBody, CardHeader, Col, Row, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

import CardStandar from '../../components/CardStandar';
import NavBar from './components/NavBar.js';
import items from './items';

class Eventos extends Component{

  state = {
    cuenta: false
  }

  componentWillMount = () => {
    if (require('store').get("cuenta_en_uso")) this.setState({ cuenta: true });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card className="">
            <CardHeader className="text-white p-4" style={{backgroundColor:"#21f077bb"}}>
                <p className="h3"><i className="cui-calendar"></i> Eventos |</p>
              </CardHeader>
              <CardBody>
                {this.state.cuenta === false ?
                  <Row className="py-5"><Col xl="6" md="8" xs="12" className="mx-auto d-flex flex-column justify-content-center"><img width="100%" src={require('../../assets/img/fondos/eventos-no-count.png')} alt="eventos-no-count" /></Col></Row>
                  :
                  <>
                    Diseño web
                  </>
                }
                <Row>

                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Eventos;
