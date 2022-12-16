
import "./SubBuses.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/esm/Container";
import { BsFillStarFill } from "react-icons/bs";
import hotel from '../Images/hotel.jpg';
import Button from 'react-bootstrap/Button';

function SubBuses() {
  return (
    <>
<div style={{background:"rgb(236, 236, 236)"}}>
    <Container className="consubbus">
    <Row>
        <Col lg={4}>
            <h2>Filter By</h2>
            <h5>Property Class</h5>
            <div className="d-flex justify-content-between align-items-center" style={{height:'50px'}}>
                <div className="div1 py-1 px-4 border d-flex bg-white">1<BsFillStarFill style={{fontSize:'12px',marginTop:'6px'}}/></div>
                <div className="div1 py-1 px-4 border d-flex bg-white">2<BsFillStarFill style={{fontSize:'12px',marginTop:'6px'}}/></div>
                <div className="div1 py-1 px-4 border d-flex bg-white">3<BsFillStarFill style={{fontSize:'12px',marginTop:'6px'}}/></div>
                <div className="div1 py-1 px-4 border d-flex bg-white">4<BsFillStarFill style={{fontSize:'12px',marginTop:'6px'}}/></div>
                <div className="div1 py-1 px-4 border d-flex bg-white">5<BsFillStarFill style={{fontSize:'12px',marginTop:'6px'}}/></div>
            </div>
            <h5 className="my-5">Property Type</h5>
            <div className="form-check my-3">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label className="form-check-label" >Hotel</label>
             </div>
             <div className="form-check my-3 ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label className="form-check-label" >Apartment</label>
             </div>
             <div className="form-check my-3 ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label className="form-check-label" >Apart-Hotel</label>
             </div>
             <div className="form-check my-3 ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label className="form-check-label" >Beach Hut</label>
             </div>
             <div className="form-check my-3 ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label className="form-check-label" >Farm House</label>
             </div>
             <div className="form-check my-3 ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label className="form-check-label" >Guest House</label>
             </div>
             <div className="form-check my-3 ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label className="form-check-label" >Motel</label>
             </div>
             <div className="form-check my-3 ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label className="form-check-label" >Resort</label>
             </div>

             <h5 className="my-5">Amenities</h5>
            <div className="form-check my-3">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label className="form-check-label" >Scooters</label>
             </div>
             <div className="form-check my-3 ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label className="form-check-label" >Kinesis Training Centre</label>
             </div>
             <div className="form-check my-3 ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label className="form-check-label" >Banquet</label>
             </div>
             <div className="form-check my-3 ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label className="form-check-label" >Dolphin Trips</label>
             </div>
             <div className="form-check my-3 ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label className="form-check-label" >Football</label>
             </div>
             <div className="form-check my-3 ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label className="form-check-label" >Glass-Bottom Boat</label>
             </div>
             <div className="form-check my-3 ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label className="form-check-label" >Deep-Sea Fishing</label>
             </div>
             <div className="form-check my-3 ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label className="form-check-label" >Breakfast</label>
             </div>


             <h5 className="my-5">Booking Policy</h5>
            <div className="form-check my-3">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label className="form-check-label" >Free Cancellation</label>
             </div>
             <div className="form-check my-3 ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label className="form-check-label" >Instant Confirmation</label>
             </div>
        </Col>

        <Col lg={8}>
          
            <Row style={{padding:"15px", marginBottom:"15px",background:"white"}}>
                <Col lg={3}><img src={hotel} alt="hotel" width='100%' height='100%'/></Col>
                <Col lg={9}>
                <h4>Galaxy Inn Guest House</h4> 
                <div className="d-flex justify-content-between">
                    <div className="left">
                        <h6>Gulshan -e-Jamal</h6>
                        <Button variant="success">Refundable</Button>
                        <Button variant="primary mx-2" >Breakfast Included</Button>
                        
                        </div>
                    <div className="right d-flex flex-column align-item-end">
                        <p className="m-0">1 night, 2 adults</p>
                        <p className="m-0" style={{fontSize:'30px'}}>Rs, 32,000</p>
                        <p className="m-2" style={{fontSize:'14px',fontWeight:"500"}}>Inclusive of all taxes</p>
                        <Button variant="warning">Book</Button>
                    </div>
                </div>
                </Col>
                </Row>

                <Row style={{padding:"15px", marginBottom:"15px",background:"white"}}>
                <Col lg={3}><img src={hotel} alt="hotel" width='100%' height='100%'/></Col>
                <Col lg={9}>
                <h4>Galaxy Inn Guest House</h4> 
                <div className="d-flex justify-content-between">
                    <div className="left">
                        <h6>Gulshan -e-Jamal</h6>
                        <Button variant="success">Refundable</Button>
                        <Button variant="primary mx-2" >Breakfast Included</Button>
                        
                        </div>
                    <div className="right d-flex flex-column align-item-end">
                        <p className="m-0">1 night, 2 adults</p>
                        <p className="m-0" style={{fontSize:'30px'}}>Rs, 32,000</p>
                        <p className="m-2" style={{fontSize:'14px',fontWeight:"500"}}>Inclusive of all taxes</p>
                        <Button variant="warning">Book</Button>
                    </div>
                </div>
                </Col>
                </Row>


                <Row style={{padding:"15px", marginBottom:"15px",background:"white"}}>
                <Col lg={3}><img src={hotel} alt="hotel" width='100%' height='100%'/></Col>
                <Col lg={9}>
                <h4>Galaxy Inn Guest House</h4> 
                <div className="d-flex justify-content-between">
                    <div className="left">
                        <h6>Gulshan -e-Jamal</h6>
                        <Button variant="success">Refundable</Button>
                        <Button variant="primary mx-2" >Breakfast Included</Button>
                        
                        </div>
                    <div className="right d-flex flex-column align-item-end">
                        <p className="m-0">1 night, 2 adults</p>
                        <p className="m-0" style={{fontSize:'30px'}}>Rs, 32,000</p>
                        <p className="m-2" style={{fontSize:'14px',fontWeight:"500"}}>Inclusive of all taxes</p>
                        <Button variant="warning">Book</Button>
                    </div>
                </div>
                </Col>
                </Row>

                <Row style={{padding:"15px", marginBottom:"15px",background:"white"}}>
                <Col lg={3}><img src={hotel} alt="hotel" width='100%' height='100%'/></Col>
                <Col lg={9}>
                <h4>Galaxy Inn Guest House</h4> 
                <div className="d-flex justify-content-between">
                    <div className="left">
                        <h6>Gulshan -e-Jamal</h6>
                        <Button variant="success">Refundable</Button>
                        <Button variant="primary mx-2" >Breakfast Included</Button>
                        
                        </div>
                    <div className="right d-flex flex-column align-item-end">
                        <p className="m-0">1 night, 2 adults</p>
                        <p className="m-0" style={{fontSize:'30px'}}>Rs, 32,000</p>
                        <p className="m-2" style={{fontSize:'14px',fontWeight:"500"}}>Inclusive of all taxes</p>
                        <Button variant="warning">Book</Button>
                    </div>
                </div>
                </Col>
                </Row>

                <Row style={{padding:"15px", marginBottom:"15px",background:"white"}}>
                <Col lg={3}><img src={hotel} alt="hotel" width='100%' height='100%'/></Col>
                <Col lg={9}>
                <h4>Galaxy Inn Guest House</h4> 
                <div className="d-flex justify-content-between">
                    <div className="left">
                        <h6>Gulshan -e-Jamal</h6>
                        <Button variant="success">Refundable</Button>
                        <Button variant="primary mx-2" >Breakfast Included</Button>
                        
                        </div>
                    <div className="right d-flex flex-column align-item-end">
                        <p className="m-0">1 night, 2 adults</p>
                        <p className="m-0" style={{fontSize:'30px'}}>Rs, 32,000</p>
                        <p className="m-2" style={{fontSize:'14px',fontWeight:"500"}}>Inclusive of all taxes</p>
                        <Button variant="warning">Book</Button>
                    </div>
                </div>
                </Col>
                </Row>

                <Row style={{padding:"15px", marginBottom:"15px",background:"white"}}>
                <Col lg={3}><img src={hotel} alt="hotel" width='100%' height='100%'/></Col>
                <Col lg={9}>
                <h4>Galaxy Inn Guest House</h4> 
                <div className="d-flex justify-content-between">
                    <div className="left">
                        <h6>Gulshan -e-Jamal</h6>
                        <Button variant="success">Refundable</Button>
                        <Button variant="primary mx-2" >Breakfast Included</Button>
                        
                        </div>
                    <div className="right d-flex flex-column align-item-end">
                        <p className="m-0">1 night, 2 adults</p>
                        <p className="m-0" style={{fontSize:'30px'}}>Rs, 32,000</p>
                        <p className="m-2" style={{fontSize:'14px',fontWeight:"500"}}>Inclusive of all taxes</p>
                        <Button variant="warning">Book</Button>
                    </div>
                </div>
                </Col>
                </Row>

        </Col>

    </Row>
    </Container>
    </div>
    </>
  );
}

export default SubBuses;
