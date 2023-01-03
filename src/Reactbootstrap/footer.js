import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-green py-5">
    <Container>
      <Row>
        <Col sm={6}>
          <h4 className="text-white">À propos de nous</h4>
          <p className="text-white">
            Nous sommes un restaurant, spécialisé dans 
            la création de salade.
            Nous mettons un point d'honner à vous fournir 
            les meilleurs ingrédients pour 
            pour vous permettre de ccomposer votre salade 
            entièrement bio !
          </p>
        </Col>
        <Col sm={3} className="mt-5 mt-sm-0">
          <h4 className="text-white">Contacts</h4>
          <ul className="list-unstyled">
            <li><a className="text-white" >saladbar@gmail.com</a></li>
            <li><a className="text-white" >+33 0767735796</a></li>
          </ul>
        </Col>
        <Col sm={3} className="mt-5 mt-sm-0">
          <h4 className="text-white">Suivez-nous</h4>
          <li><a href="https://www.instagram.com/saladeverte.restaurante/" target="_blank"><i class="fab fa-instagram fa-lg"></i></a></li>

          <li><a href="https://www.pinterest.com/pin/454371049917845276/" target="_blank"><i class="fab fa-pinterest fa-lg"></i></a></li>

        </Col>
      </Row>
      <hr className="my-4"/>
      <Row className="align-items-center justify-content-between py-4">
        <Col sm={3}>
          <p className="text-white mb-0">Copyright &copy; {new Date().getFullYear()} Mon entreprise</p>
        </Col>
        <Col sm={3}>
          <p className="text-white mb-0">Fait avec <i className="fas fa-heart text-danger"></i> par notre équipe</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
