import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';
import './Signupform.css';

import React, { useState, useEffect } from "react";

import axios from "axios";

 function Signup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

 async function register() {
  if (password === cpassword) {
    const user = {
      name,
      email,
      password,
      cpassword,
    };
    try {
      
      const result = await axios.post("/api/user/Signup", user).data;
    

      setname("");
      setemail("");
      setpassword("");
      setcpassword("");
    } catch (error) {
      console.log(error);
     
    }
  } else {
    alert("Password not matched..!");
  }
}
  return (
    <>

     <Container fluid className='Ccol bg-secondary'>
       <Row>
         <Col className='Logcol bg-light' lg={5}>
      
             <h2>SIGN UP</h2>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
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
            <input
              type="text"
              className="form-control"
              placeholder="Confirm Password"
              value={cpassword}
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
            />
       <div className="log1">
       <Button className=' sigbtn bg-primary mb-3' size='lg' onClick={register}>
         Sign Up
       </Button>
       <div className="login">
         <h6>Already On Account</h6>
         <Link to='/Loginform'>
         <h5>Login</h5>
         </Link>
       </div>
       </div>
         </Col>
       </Row>
     </Container>
     </>
  );
}
export default Signup;