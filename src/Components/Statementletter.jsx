import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {TbFileDollar } from "react-icons/tb";
import {RiPagesLine} from "react-icons/ri";
import { Link } from 'react-router-dom';
import './Statementletter.css'; 

function Statementletter() {
  return (
    <Container fluid className='bg-secondary'>
      <Row>
        <Col className=' heading ' lg={4} xs={12}>
        <h5 className='text-white heading1'>
        SastaVisa utility helps make the visa application process fast and easy!
        </h5>
        </Col>

        <Col lg={4} xs={12} >
        <Link to='/BankStatementletter'>
      <div className="MD">
        
        <div className="icon">
            <span className='icon0'><TbFileDollar/></span>
        </div>
        <div className="content">
            <h6>Statement letter Generator</h6>
            <p>Getting your bank statement just got easy</p>
        </div>

        </div>
        </Link>
        </Col>

        <Col lg={4} xs={12} >
          <Link to='/CoverStatementletter'>
        <div className="MD">
        <div className="icon1">
            <span className='icon2'><RiPagesLine/></span>
        </div>
        <div className="content">
            <h6>Cover letter Generator</h6>
            <p>Get your cover letter in 30 seconds</p>
        </div>
        </div>
        </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Statementletter;