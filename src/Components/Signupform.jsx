import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from 'react-router-dom';
import './Signupform.css';
import { useState } from 'react';

function ContainerFluidExample() {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  return (
    <>

    <Container fluid className='Ccol bg-secondary'>
      <Row>
        <Col className='Logcol bg-light' lg={5}>
        <Form noValidate validated={validated} onSubmit={handleSubmit} >
          <h2>SIGN UP</h2>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-4 mt-4"
      >
        <Form.Control type="email" placeholder="name@example.com" required/>
      </FloatingLabel>
        <FloatingLabel className=' Pf mb-4 mt-4' controlId="floatingUsername" label="Username">
        <Form.Control type="text" placeholder="Username" required />
      </FloatingLabel>

      <FloatingLabel className=' Pf mb-4 mt-4' controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" required/>
      </FloatingLabel>
      <FloatingLabel className=' Pf mb-4 mt-4' controlId="floatingPassword" label="Confirm Password">
        <Form.Control type="password" placeholder=" Confirm Password" required />
      </FloatingLabel>

      <Form.Group className=" ch mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Accept Terms and Conditions" required />
      </Form.Group>
      <div className="log1">
      <Button className=' sigbtn bg-primary mb-3' size='lg' type="submit" >
        Sign Up
      </Button>
      <div className="login">
        <h6>Already On Account</h6>
        <Link to='/Loginform'>
        <h5>Login</h5>
        </Link>
      </div>
      </div>
    </Form>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default ContainerFluidExample;