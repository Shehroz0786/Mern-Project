import './Footer.css';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pic from "../Images/Logo.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsTelephoneFill} from "react-icons/bs";
import {RiWhatsappFill} from "react-icons/ri";
import {FaFacebookF} from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";


function ContainerFluidExample() {
  return (
    <Container fluid className='bg-light'>
      <Row className='rowf'>
        <Col className='CC' lg={6} md={12} xs={12}>
        <div className="img1">
            <img src={pic} alt="logo" />
        </div>
        <div className="nd">
            <h5 className='text-primary'>Need Help?</h5>
        </div>
        <div className="num">
           <p > <span><BsTelephoneFill className=' me-4 phnicon'/></span>(021) 111 172 782</p>
            <p className='pclass'><span><RiWhatsappFill className=' me-4 ms-5 whticon'/></span>Chat with us</p>
        </div>
        <div className="icn">
          <span><h2><FaFacebookF className=' faicon me-3'/><BsTwitter className=' bsicon me-3'/><BsLinkedin className=' bs1icon me-3'/></h2></span>
        </div>
        </Col>

        <Col className='CC1 ' lg={4} xs={12}>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><h5 className=' h5 text-primary'>Get discounted offers and tips by email</h5></Form.Label>
        <Form.Control type="email" placeholder="Your email adress" /></Form.Group>
        <Button variant="warning" className='btn'><h6>Subscribe</h6></Button>
      </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerFluidExample;