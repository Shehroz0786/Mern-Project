import './Bankletter.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Bankletter() {
  return (
    <Container fluid className='mb-5'>
      <Row className='mt-5'>
        <Col className='col1 bg-light' lg={4} xs={12}>
        <h3>Your Bank Details</h3>
        <Form>
        <Form.Select aria-label="Select Bank" className='mb-4'>
      <option>Select Bank</option>
      <option value="1">Al Baraka Bank</option>
      <option value="2">Allied Bank</option>
      <option value="3">Askari Bank</option>
      <option value="4">Bank Al Habib</option>
      <option value="5">Bank Islami</option>
      <option value="6">Faisal Bank</option>
      <option value="7">Bank of Punjab</option>
      <option value="8">MCB</option>
      <option value="9">MCB Islamic Bank</option>
    </Form.Select>

      <Form.Group className="mb-4" controlId="Branch Name">
        <Form.Control type="text" placeholder="Branch Name" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="Account Title">
        <Form.Control type="text" placeholder="Account Title" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="Account Number">
        <Form.Control type="text" placeholder="Account Number" />
      </Form.Group>
      <div className="date mb-4">
      <Form.Group controlId="Start date">
        <Form.Control type="date" name="Start date" placeholder="Start date" />
      </Form.Group>
      <Form.Group controlId="End date">
        <Form.Control type="date" name="End date" placeholder="End date" />
      </Form.Group>
      </div>
    
      <Form.Group className="mb-4 mt-4" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Someone will be collecting the statement for me" />
      </Form.Group>
      
      <Form.Group className="mb-4">
        <Form.Control placeholder="Collector's Name" disabled />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Control placeholder="Collector's CNIC" disabled />
      </Form.Group>
    </Form>
        </Col>

        
        <Col className='col2 bg-light' lg={6} xs={12}>
        <h3>Statement Request Letter Generator</h3><br/><br/><br/>
        <p>To,<br/>
        The Branch Manager,<br/>
        Bank Name,<br/>
        Branch Name,<br/><br/><br/>
        Subject:Request for Bank Statement<br/><br/><br/>
        Respected Sir/Madam,<br/><br/><br/>
        This letter is to request a bank statement for my account with Account Title:Account title<br/>
        and Account No.:Account No.,from Start date to End date<br/><br/><br/>
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