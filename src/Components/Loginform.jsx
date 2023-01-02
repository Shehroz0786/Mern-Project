import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {FaFacebookF} from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";
import {FcGoogle} from "react-icons/fc";
import { Link } from 'react-router-dom';

import './Loginform.css';

function Login() {
  return (
    <>

    <Container fluid className='Ccol1 bg-secondary'>
      <Row>
        <Col className='Logcol1 bg-light' lg={5}>
        <Form>
          <h2>LOGIN</h2>

        <FloatingLabel
        controlId="floatingInput" label="Email address" className="mb-4 mt-4">
        <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>

        <FloatingLabel
         className=' Pf mb-4 mt-4' controlId="Password" label="Password">
        <Form.Control type="password" placeholder="Password" />
        <p>Forgot Password?</p>
        </FloatingLabel>

     <div className="log">
      <Button className='logbtn' variant="primary" size='lg' type="submit">
        Login
      </Button>
      <div className="icon001">
        <h6>Or Sign Up Using</h6>
        </div>
      <span><h2><FaFacebookF className=' faicon me-3'/><BsTwitter className=' bsicon me-3'/><FcGoogle className=' me-4 ms-2 gooicon'/></h2></span>
      </div>
      <Link to='/Signupform'>
      <div className="sign">
        <h5>Sign Up</h5>
      </div>
      </Link>
    </Form>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Login;