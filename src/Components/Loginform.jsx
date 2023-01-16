import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Loginform.css';
import axios from "axios";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  async function register() {
    if (password===password) {
      const user = {
        email,
        password,
      };
      try {
        const result = await axios.post("/api/user/Login", user).data;
        setemail("");
        setpassword("");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Password not matched..!");
    }
  }

  return (
    <>

     <Container fluid className='Ccol1 bg-secondary'>
       <Row>
        <Col className='Logcol1 bg-light' lg={5}>
          <h2>LOGIN</h2>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />

     <div className="log">
     <Button className='logbtn' variant="primary" size='lg'  onClick={register}>
             Login
      </Button>
      </div>
     <Link to='/Signupform'>
       <div className="sign">
                <h5>Sign Up</h5>
      </div>
      </Link>
        </Col>
      </Row>
     </Container>
     </>
   );
 }

 export default Login;