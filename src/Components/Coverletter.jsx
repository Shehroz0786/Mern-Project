import './Coverletter.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';


function Coverletter() {
  const[select,setSelect]=useState('');
  const[embassy,setEmbassy]=useState('');
  const[adress,setAdress]=useState('');
  const[name,setName]=useState('');
  const[cnumber,setCnumber]=useState('');
  const[email,setEmail]=useState('');
  const[sdate,setSdate]=useState('');
  const[ldate,setLdate]=useState('');
  const[text,setText]=useState('');


  const selectfun=(e)=>{
    setSelect(e.target.value);
  }
  const embassyfun=(e)=>{
    setEmbassy(e.target.value);
  }
  const adressfun=(e)=>{
    setAdress(e.target.value);
  }
  const namefun=(e)=>{
    setName(e.target.value);
  }
  const cnumberfun=(e)=>{
    setCnumber(e.target.value);
  }
  const emailfun=(e)=>{
    setEmail(e.target.value);
  }
  const sdatefun=(e)=>{
    setSdate(e.target.value);
  }
  const ldatefun=(e)=>{
    setLdate(e.target.value);
  }
  const textfun=(e)=>{
    setText(e.target.value);
  }
  return (
    <Container fluid className='mb-5'>
      <Row className='mt-5'>
        <Col className='col1 bg-light' lg={4} xs={12}>
        <h3>Your Details</h3> <br/><br/><br/>
        <h4>Country Details</h4>
        <Form>
        <Form.Select aria-label="Select country you're visiting" className='mb-4' value={select} onChange={selectfun}>
      <option>Select country you're visiting</option>
      <option value="Afghanistan">Afghanistan</option>
      <option value="Albania">Albania</option>
      <option value="Algeria">Algeria</option>
      <option value="Angola">Angola</option>
      <option value="Benin">Benin</option>
      <option value="Belgium">Belgium</option>
      <option value="Burundi">Burundi</option>
      <option value="Brazil">Brazil</option>
      <option value="Canada">Canada</option>
      <option value="Mali">Mali</option>
    </Form.Select>
    {[ 'radio'].map((type) => (
        <div key={`inline-${type}`} className=" radio mb-3">
              <Form.Check
            inline
            label="Embassy"
            name="group2"
            type={type}
            id={`inline-${type}-2`} value={"embassy"} onChange={embassyfun}
          />
             <Form.Check
            inline
            label="Consulate General"
            name="group2"
            type={type}
            id={`inline-${type}-2`} value={"consulate General"} onChange={embassyfun}
          />
          </div>
           ))}

      <InputGroup className='mb-4'>
        <Form.Control as="textarea" aria-label="With textarea" placeholder='Adress' value={adress} onChange={adressfun}/>
      </InputGroup>

      <h4>Personal Details</h4>


      <Form.Group className="mb-4" controlId="Your full legal name">
        <Form.Control type="text" placeholder="Your full legal name" value={name} onChange={namefun}/>
      </Form.Group>
      <Form.Group className="mb-4" controlId="Contect number">
        <Form.Control type="text" placeholder="Contect number" value={cnumber} onChange={cnumberfun}/>
      </Form.Group>
      <Form.Group className="mb-4" controlId="Email adress">
        <Form.Control type="email" placeholder="Email adress" value={email} onChange={emailfun} />
      </Form.Group>

      <h4>Trip Details</h4>
      <div className="date mb-4">
      <Form.Group controlId="Sdate">
        <Form.Control type="date" name="Start date" placeholder="Start date" value={sdate} onChange={sdatefun} />
      </Form.Group>
      <Form.Group controlId="Edate">
        <Form.Control type="date" name="End date" placeholder="End date" value={ldate} onChange={ldatefun}/>
      </Form.Group>
      </div>
      <InputGroup className='mb-4'>
        <Form.Control as="textarea" aria-label="With textarea" placeholder="Name of tourist attractions in the country you're visiting" value={text} onChange={textfun} />
      </InputGroup>
    </Form>
        </Col>

        
        <Col className='col2 bg-light' lg={6} xs={12}>
        <h3>Cover Letter Generator</h3><br/><br/><br/>
        <p>{embassy} of,Country {select},<br/>
        Adress, {adress}<br/><br/>
        Respected Sir/Madam,<br/><br/>
        I,{name}, would like to apply for a tourist visa to spend a vacations in ,{select}, from<br/>
        Start date {sdate} ,End date {ldate}.<br/><br/>
        The main purpose for travel is tourism, to see the beautiful sights of ,{select}, particularly<br/>
        ,Name of turridt attractions {text}, .i am also lookingfoward to experiencing theculture, tasting the<br/>
        cuisine, and meeting the locals to experience everything the country has to offer.<br/><br/>
        Please find the following documents to support the legitimacy of what is outlined this letter<br/><br/><br/><br/>
        Please don't hesitate to contact me if any further information is required. You can reach me at:<br/><br/>
        Contact no.{cnumber},<br/>
        Email,{email}<br/><br/><br/>
        Sincerely,<br/>
        {name}
        </p>
        <Col className='colbtn'>
        <Button variant="primary" size="md">
         GENERATE AND DOWNLOAD AS PDF
        </Button>
        </Col>
        </Col>
        <Row >
       
        </Row>

      </Row>
      
    </Container>
  );
}

export default Coverletter;