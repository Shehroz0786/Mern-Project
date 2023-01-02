import './Bankletter.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React,{ useState } from 'react';
function Bankletter() {
  const [branch, setbranch] = useState('');
  const [Bank, setBank] = useState('');
  const [Actitle, settitle] = useState('');
  const [Acnumber, setname] = useState('');
  const [Sdate, setsdate] = useState('');
  const [Ldate, setldate] = useState('');

  const branchfun = (e) =>{
    setbranch(e.target.value)
  }
  const Bankfun=(e)=>{
    setBank(e.target.value)
  }
  const titlefun=(e)=>{
    settitle(e.target.value)
  }
  const numberfun=(e)=>{
    setname(e.target.value)
  }
  const sdatefun=(e)=>{
    setsdate(e.target.value)
  }
  const ldatefun=(e)=>{
    setldate(e.target.value)
  }
  return (
    <Container fluid className='mb-5'>
      <Row className='mt-5'>
        <Col className='col1 bg-light' lg={4} xs={12}>
        <h3>Your Bank Details</h3>
        <Form>
        <Form.Select aria-label="Select Bank" className='mb-4' value={Bank} onChange={Bankfun}>
      <option>Select Bank</option>
      <option value="Al Baraka Bank">Al Baraka Bank</option>
      <option value="Allied Bank">Allied Bank</option>
      <option value="Askari Bank">Askari Bank</option>
      <option value="Bank Al Habib">Bank Al Habib</option>
      <option value="Bank Islami">Bank Islami</option>
      <option value="Faisal Bank">Faisal Bank</option>
      <option value="Bank of Punjab">Bank of Punjab</option>
      <option value="MCB">MCB</option>
      <option value="MCB Islamic Bank">MCB Islamic Bank</option>
    </Form.Select>

      <Form.Group className="mb-4" controlId="Branch Name">
        <Form.Control type="text" placeholder="Branch Name" value={branch} onChange={branchfun}/>
      </Form.Group>
      <Form.Group className="mb-4" controlId="Account Title">
        <Form.Control type="text" placeholder="Account Title" value={Actitle} onChange={titlefun}/>
      </Form.Group>
      <Form.Group className="mb-4" controlId="Account Number">
        <Form.Control type="text" placeholder="Account Number" value={Acnumber} onChange={numberfun} />
      </Form.Group>
      <div className="date mb-4">
      <Form.Group controlId="Start date">
        <Form.Control type="date" name="Start date" placeholder="Start date" value={Sdate} onChange={sdatefun} />
      </Form.Group>
      <Form.Group controlId="End date">
        <Form.Control type="date" name="End date" placeholder="End date" value={Ldate} onChange={ldatefun}/>
      </Form.Group>
      </div>
    </Form>
        </Col>

        
        <Col className='col2 bg-light' lg={6} xs={12}>
        <h3>Statement Request Letter Generator</h3><br/><br/><br/>
        <p>To,<br/>
        The Branch Manager,<br/>
        Bank Name, {Bank}<br/>
        Branch Name, {branch}<br/><br/><br/>
        Subject:Request for Bank Statement<br/><br/><br/>
        Respected Sir/Madam,<br/><br/><br/>
        This letter is to request a bank statement for my account with Account Title:{Actitle}<br/>
        and Account No.{Acnumber},from Start date {Sdate} to End date {Ldate}<br/><br/><br/>
        Sincerely
        </p>
        <Button variant="primary" size="md">
         GENERATE AND DOWNLOAD AS PDF
        </Button>
        </Col>
        </Row>
    </Container>
  );
}

export default Bankletter;