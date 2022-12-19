import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {AiFillPlusCircle} from "react-icons/ai";
import {BsDashCircle} from "react-icons/bs";
import './Searchsection.css'

function Searchsection() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[value,setValue]=useState(0);
  const inc=()=>{
    setValue (value + 1);

  }
  const dec=()=>{
    setValue (value - 1);
  }


  return (
    <>
    <Container fluid className="consearch">
      <Row>
        <Col className="Heading" xs={12}>
            <p>Get your visa For</p>
        </Col>
      </Row>

      <Row className='srow'>
        <Col className='s1col bg-light 'lg={2} xs={12}>
        <p>DESTINATION</p>
        <input type="text" placeholder='United Arab Emirates' />
        <p>Accepting online application </p>
        </Col>
          
        <Col className='s2col  bg-light pt-4'lg={2} xs={12}>
        <p>DEPARTURE</p>
        <input type="date" className='d1'/>
        </Col>

        <Col className='s3col  bg-light pt-4'lg={2} xs={12}>
        <p>RETURN</p>
        <input type="date" className='d2'/>
        </Col>

        <Col className='s4col  bg-light'lg={2} xs={12}>
        <p>TRAVELERS</p>

        <Button className='btntra' onClick={handleShow}>
        Traveler
      </Button>

      <Modal show={show} onHide={handleClose}>
      <Row>
        <Col className='coltra'>
        <h4>Travelers</h4>
        </Col>
        <Col>
        <div className="MM">
        <div className="cnn1" ><BsDashCircle onClick={dec}/></div>
          <div className="cnn2">{value}</div>
          <div className="cnn3" ><AiFillPlusCircle onClick={inc}/></div>
        </div>
        </Col>
      </Row> 
      <Row>
        <Col className='apply'lg={2} lg={11}>
        <Button>Apply</Button>
        </Col>
      </Row>
      </Modal>

        <p>Maximum 6 travelers allowed</p>
        </Col>

        <Col lg={2} xs={12} >
          <div className="sbtn">
            <button>
              Search
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  
</>

  );
}

export default Searchsection;