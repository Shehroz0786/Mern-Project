import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Destinationinternational.css';
import pic from "../Images/pic1.jpg";
import { Link } from 'react-router-dom';

function Destination() {
    return (
        <Container fluid className=' conint bg-light'>
            <Row>
                <Col className='HD'><h3>OUR TOP DESTINATIONS</h3></Col>
            </Row>
            <Row className='row0' >
                <Col className='HD1' lg={5} xs={12}>
                    <h3>OUR BEST FLIGHTS</h3>
                </Col>
                <Col lg={4} xs={12} className='HD2'>
                    <Link to='/Domestic'>
                    <p>Domestic Flights</p>
                    </Link>
                </Col>
                <Col lg={3} xs={12} className='HD3'>
                    <Link to='/International'>
                    <p>International Flights</p>
                    </Link>
                </Col>
            </Row>

            <Row className='row1'>
                <Col className='col' lg={4} xs={12}>
                    <div className="img">
                        <img src={pic} alt=" logo" />
                    </div>
                    <div className="hd">
                        <p>From</p>
                        <h6> Karachi</h6>
                    </div>
                    <div className="hd1">
                        <p>To</p>
                        <h6> Duabi</h6>
                    </div>
                </Col>
                <Col className='col' lg={4} xs={12}>
                <div className="img">
                        <img src={pic} alt=" logo" />
                    </div>
                    <div className="hd">
                        <p>From</p>
                        <h6> Karachi</h6>
                    </div>
                    <div className="hd1">
                        <p>To</p>
                        <h6> Duabi</h6>
                    </div>
                </Col>
                <Col className='col' lg={4} xs={12}>
                <div className="img">
                        <img src={pic} alt=" logo" />
                    </div>
                    <div className="hd">
                        <p>From</p>
                        <h6> Karachi</h6>
                    </div>
                    <div className="hd1">
                        <p>To</p>
                        <h6> Duabi</h6>
                    </div>
                </Col>
            </Row>

            <Row className='row1'>
            <Col className='col' lg={4} xs={12}>
                    <div className="img">
                        <img src={pic} alt=" logo" />
                    </div>
                    <div className="hd">
                        <p>From</p>
                        <h6> Karachi</h6>
                    </div>
                    <div className="hd1">
                        <p>To</p>
                        <h6> Duabi</h6>
                    </div>
                </Col>
                <Col className='col' lg={4} xs={12}>
                <div className="img">
                        <img src={pic} alt=" logo" />
                    </div>
                    <div className="hd">
                        <p>From</p>
                        <h6> Karachi</h6>
                    </div>
                    <div className="hd1">
                        <p>To</p>
                        <h6> Duabi</h6>
                    </div>
                </Col>
                <Col className='col' lg={4} xs={12}>
                <div className="img">
                        <img src={pic} alt=" logo" />
                    </div>
                    <div className="hd">
                        <p>From</p>
                        <h6> Karachi</h6>
                    </div>
                    <div className="hd1">
                        <p>To</p>
                        <h6> Duabi</h6>
                    </div>
                </Col>
            </Row>

            <Row className='row1'>
            <Col className='col' lg={4} xs={12}>
                <div className="img">
                        <img src={pic} alt=" logo" />
                    </div>
                    <div className="hd">
                        <p>From</p>
                        <h6> Karachi</h6>
                    </div>
                    <div className="hd1">
                        <p>To</p>
                        <h6> Duabi</h6>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Destination;