import React, { Component } from 'react';
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends Component {
  render() {
    return (
      <Footer id="footer" color="unique-color-dark" className="page-footer font-small pt-0">
        <Container className="mt-5 mb-4 text-center text-md-left">
          <Row className="mt-3">
            <Col md="3" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>SERVICIO AL CLIENTE</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <a href="#!">CONTÁCTENOS</a>
              </p>
              <p>
                <a href="#!">CAMBIOS Y DEVOLUCIONES</a>
              </p>
              <p>
                <a href="#!">POLÍTICAS DE LA TIENDA</a>
              </p>
              <p>
                <a href="#!">POLÍTICAS DE DATOS</a>
              </p>
            </Col>
            <Col md="3" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>MI CUENTA</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <a href="#!">MIS PEDIDOS</a>
              </p>
              <p>
                <a href="#!">MIS DEVOLUCIONES</a>
              </p>
            </Col>
            <Col md="3" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>RECURSOS</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <a href="#">TIENDAS</a>
              </p>
              <p>
                <a href="#">DEVOLUCIONES</a>
              </p>

            </Col>
            <Col md="3" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>NEWSLETTER</strong>
              </h6>
              <br />
               <p>
                  Regístrate para ser el primero en recibir nuestras noticias
               </p>
         
               <form className="form-inline input-group">
                  <input type="text" className="" placeholder="  E-MAIL" />
                  <span id="email" className="input-group-text">
                     <i className="fas fa-angle-right"></i> 
                  </span> 
               </form>
            
            </Col>
          </Row>
          <hr />
        </Container>
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            Todos los derechos reservados 
          </Container>
        </div>
      </Footer>
    );
  }
}

export default FooterPage;