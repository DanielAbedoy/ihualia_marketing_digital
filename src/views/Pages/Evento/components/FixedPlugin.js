import React, { Component } from 'react';
import { Col, Row, Badge, Button, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

class FixedPugin extends Component {

  constructor(props) {
    super(props);

    this.state = {
      boudary: false,
    }
    window.onscroll = () => this.boudary_out();
  }

  boudary_out = () => {

    try {
      const side = document.getElementById("out");

      if (window.pageYOffset > side.offsetTop + 135) {
        this.setState({ boudary: true })
      } else {
        this.setState({ boudary: false })
      }
    } catch (e) { }
  }

  _onClick = (e) => {
    e.preventDefault();
    this.props.evento();
  }


  render() {
    return (

      <Row className="mt-4">
        <Col md="12">
          <Row className={this.state.boudary ? " fixed-confirm" : ""} >
            <Col md="12" className="">
              <Row className="">


                <Col id="img-logo" md="3" xs="4" className={"ml-2" + (this.state.boudary ? "" : " d-none")}>
                  <img
                    style={{ width: "100%" }}
                    className="pt-2"
                    src={require('../../../../assets/img/brand/logo_ihualia.png')} />
                </Col>


                <Col id="boletos" md="6" xs="10" className={this.state.boudary ? " d-none" : "mx-auto"}>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-share"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" readOnly={true} placeholder=""
                      value={this.props.url_share}
                    />
                  </InputGroup>
                </Col>


                <Col md="4" xs="7" className={this.state.boudary ? "ml-auto align-self-center" : "ml-auto"}>
                  <Button color="success" block onClick={this._onClick}> Confirmar Asistencia</Button>
                </Col>
              </Row>
            </Col>
          </Row>

        </Col>
      </Row>
    );
  }

}

export default FixedPugin;