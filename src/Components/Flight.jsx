
import "../Components/Flight.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/esm/Container";
import pf from '../Images/PF.png';

import Button from 'react-bootstrap/Button';

function Flight() {
  return (
    <>
<div style={{background:"rgb(236, 236, 236)"}}>
    <Container className="conflight">
    <Row >
        <Col lg={3}>
            <h2>Filter By</h2>
            <hr className="my-5" />
            <h5 className="my-5">Stops</h5>
            <div className="form-check my-3">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label className="form-check-label" >Non Stop</label>
             </div>
             <hr className="my-5" />

             <h5 className="my-5">Departure time</h5>
            <div className="form-check my-3">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label className="form-check-label" >00:00 - 06:00</label>
             </div>
             <div className="form-check my-3 ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label className="form-check-label" >06:00 - 12:00</label>
             </div>
             <div className="form-check my-3 ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label className="form-check-label" >12:00 - 18:00</label>
             </div>
             <div className="form-check my-3 ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label className="form-check-label" >18:00 - 00:00</label>
             </div>
             <hr className="my-5"/>

             <h5 className="my-5">Airlines</h5>
            <div className="form-check my-3">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label className="form-check-label" >Serene Air</label>
             </div> <div className="form-check my-3">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label className="form-check-label" >Airsial</label>
             </div> <div className="form-check my-3">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label className="form-check-label" >Airblue</label>
             </div> <div className="form-check my-3">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label className="form-check-label" >Fly Jinnah</label>
             </div>
             <div className="form-check my-3 ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label className="form-check-label" >PIA</label>
             </div>
        </Col>

        <Col lg={9}>
            <Row> 
                <Col className="d-flex justify-content-between" style={{background:'lightgrey'}}>
                <div className="Departure">Departure</div>
                <div className="Departure-date">27 Dec, 2022</div>
                </Col>
            </Row>
            <Row style={{padding:"15px", marginBottom:"15px",background:"white"}}>
                <Col lg={9}>
                    <div className="d-flex justify-content-between">
                        < div className="text-center" style={{width:'20%'}}>
                            <img src={pf} alt="ff" width='50%' />
                            <p style={{fontSize:'13px'}}>Airsiel</p>
                        </div>
                        <div className="d-flex justify-content-evenly" style={{width:'70%'}}>
                            
                            <div className="time1">
                                <p className="mb-0" style={{fontSize:'25px'}}>03:30 PM</p>
                                <p>ISB</p>
                            </div>
                            <div className="time2 text-center pt-1">
                                - <span className="px-3 " style={{background:"gray",borderRadius:'30px',fontSize:'20px'}}>2 hrs</span> -
                                <p style={{fontSize:'14px'}}>Non Stop</p>
                            </div>
                            <div className="time3">
                            <p className="mb-0" style={{fontSize:'25px'}}>05:30 PM</p>
                                <p>KHI</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly">
                        < div className="text-center" style={{width:'20%'}}>
                            <p>Flight Details</p>
                        </div>
                        <div style={{width:'70%'}}>
                            <div className="d-flex justify-content-evenly">
                            <div className="time1">
                                <p className="mb-0" style={{fontSize:'15px'}}>03:30 PM</p>
                                
                            </div>
                            
                            <div className="time3">
                            <p className="mb-0" style={{fontSize:'15px'}}>05:30 PM</p>
                               
                            </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={3}>
                <div className="right d-flex flex-column align-items-center justify-content-center">
                        <p className="m-0">Total Price</p>
                        <p className="m-0" style={{fontSize:'30px'}}>Rs, 32,000</p>
                        <Button variant="warning">Book</Button>
                    </div>
                </Col>
                </Row>


            <Row> 
                <Col className="d-flex justify-content-between" style={{background:'lightgrey'}}>
                <div className="Departure">Departure</div>
                <div className="Departure-date">27 Dec, 2022</div>
                </Col>
            </Row>
            <Row style={{padding:"15px", marginBottom:"15px",background:"white"}}>
                <Col lg={9}>
                    <div className="d-flex justify-content-between">
                        < div className="text-center" style={{width:'20%'}}>
                            <img src={pf} alt="ff" width='50%' />
                            <p style={{fontSize:'13px'}}>Airsiel</p>
                        </div>
                        <div className="d-flex justify-content-evenly" style={{width:'70%'}}>
                            
                            <div className="time1">
                                <p className="mb-0" style={{fontSize:'25px'}}>03:30 PM</p>
                                <p>ISB</p>
                            </div>
                            <div className="time2 text-center pt-1">
                                - <span className="px-3 " style={{background:"gray",borderRadius:'30px',fontSize:'20px'}}>2 hrs</span> -
                                <p style={{fontSize:'14px'}}>Non Stop</p>
                            </div>
                            <div className="time3">
                            <p className="mb-0" style={{fontSize:'25px'}}>05:30 PM</p>
                                <p>KHI</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly">
                        < div className="text-center" style={{width:'20%'}}>
                            <p>Flight Details</p>
                        </div>
                        <div style={{width:'70%'}}>
                            <div className="d-flex justify-content-evenly">
                            <div className="time1">
                                <p className="mb-0" style={{fontSize:'15px'}}>03:30 PM</p>
                                
                            </div>
                            
                            <div className="time3">
                            <p className="mb-0" style={{fontSize:'15px'}}>05:30 PM</p>
                               
                            </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={3}>
                <div className="right d-flex flex-column align-items-center justify-content-center">
                        <p className="m-0">Total Price</p>
                        <p className="m-0" style={{fontSize:'30px'}}>Rs, 32,000</p>
                        <Button variant="warning">Book</Button>
                    </div>
                </Col>
                </Row>


                <Row> 
                <Col className="d-flex justify-content-between" style={{background:'lightgrey'}}>
                <div className="Departure">Departure</div>
                <div className="Departure-date">27 Dec, 2022</div>
                </Col>
            </Row>
            <Row style={{padding:"15px", marginBottom:"15px",background:"white"}}>
                <Col lg={9}>
                    <div className="d-flex justify-content-between">
                        < div className="text-center" style={{width:'20%'}}>
                            <img src={pf} alt="ff" width='50%' />
                            <p style={{fontSize:'13px'}}>Airsiel</p>
                        </div>
                        <div className="d-flex justify-content-evenly" style={{width:'70%'}}>
                            
                            <div className="time1">
                                <p className="mb-0" style={{fontSize:'25px'}}>03:30 PM</p>
                                <p>ISB</p>
                            </div>
                            <div className="time2 text-center pt-1">
                                - <span className="px-3 " style={{background:"gray",borderRadius:'30px',fontSize:'20px'}}>2 hrs</span> -
                                <p style={{fontSize:'14px'}}>Non Stop</p>
                            </div>
                            <div className="time3">
                            <p className="mb-0" style={{fontSize:'25px'}}>05:30 PM</p>
                                <p>KHI</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly">
                        < div className="text-center" style={{width:'20%'}}>
                            <p>Flight Details</p>
                        </div>
                        <div style={{width:'70%'}}>
                            <div className="d-flex justify-content-evenly">
                            <div className="time1">
                                <p className="mb-0" style={{fontSize:'15px'}}>03:30 PM</p>
                                
                            </div>
                            
                            <div className="time3">
                            <p className="mb-0" style={{fontSize:'15px'}}>05:30 PM</p>
                               
                            </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={3}>
                <div className="right d-flex flex-column align-items-center justify-content-center">
                        <p className="m-0">Total Price</p>
                        <p className="m-0" style={{fontSize:'30px'}}>Rs, 32,000</p>
                        <Button variant="warning">Book</Button>
                    </div>
                </Col>
                </Row>


                <Row> 
                <Col className="d-flex justify-content-between" style={{background:'lightgrey'}}>
                <div className="Departure">Departure</div>
                <div className="Departure-date">27 Dec, 2022</div>
                </Col>
            </Row>
            <Row style={{padding:"15px", marginBottom:"15px",background:"white"}}>
                <Col lg={9}>
                    <div className="d-flex justify-content-between">
                        < div className="text-center" style={{width:'20%'}}>
                            <img src={pf} alt="ff" width='50%' />
                            <p style={{fontSize:'13px'}}>Airsiel</p>
                        </div>
                        <div className="d-flex justify-content-evenly" style={{width:'70%'}}>
                            
                            <div className="time1">
                                <p className="mb-0" style={{fontSize:'25px'}}>03:30 PM</p>
                                <p>ISB</p>
                            </div>
                            <div className="time2 text-center pt-1">
                                - <span className="px-3 " style={{background:"gray",borderRadius:'30px',fontSize:'20px'}}>2 hrs</span> -
                                <p style={{fontSize:'14px'}}>Non Stop</p>
                            </div>
                            <div className="time3">
                            <p className="mb-0" style={{fontSize:'25px'}}>05:30 PM</p>
                                <p>KHI</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly">
                        < div className="text-center" style={{width:'20%'}}>
                            <p>Flight Details</p>
                        </div>
                        <div style={{width:'70%'}}>
                            <div className="d-flex justify-content-evenly">
                            <div className="time1">
                                <p className="mb-0" style={{fontSize:'15px'}}>03:30 PM</p>
                                
                            </div>
                            
                            <div className="time3">
                            <p className="mb-0" style={{fontSize:'15px'}}>05:30 PM</p>
                               
                            </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={3}>
                <div className="right d-flex flex-column align-items-center justify-content-center">
                        <p className="m-0">Total Price</p>
                        <p className="m-0" style={{fontSize:'30px'}}>Rs, 32,000</p>
                        <Button variant="warning">Book</Button>
                    </div>
                </Col>
                </Row>


                <Row> 
                <Col className="d-flex justify-content-between" style={{background:'lightgrey'}}>
                <div className="Departure">Departure</div>
                <div className="Departure-date">27 Dec, 2022</div>
                </Col>
            </Row>
            <Row style={{padding:"15px", marginBottom:"15px",background:"white"}}>
                <Col lg={9}>
                    <div className="d-flex justify-content-between">
                        < div className="text-center" style={{width:'20%'}}>
                            <img src={pf} alt="ff" width='50%' />
                            <p style={{fontSize:'13px'}}>Airsiel</p>
                        </div>
                        <div className="d-flex justify-content-evenly" style={{width:'70%'}}>
                            
                            <div className="time1">
                                <p className="mb-0" style={{fontSize:'25px'}}>03:30 PM</p>
                                <p>ISB</p>
                            </div>
                            <div className="time2 text-center pt-1">
                                - <span className="px-3 " style={{background:"gray",borderRadius:'30px',fontSize:'20px'}}>2 hrs</span> -
                                <p style={{fontSize:'14px'}}>Non Stop</p>
                            </div>
                            <div className="time3">
                            <p className="mb-0" style={{fontSize:'25px'}}>05:30 PM</p>
                                <p>KHI</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly">
                        < div className="text-center" style={{width:'20%'}}>
                            <p>Flight Details</p>
                        </div>
                        <div style={{width:'70%'}}>
                            <div className="d-flex justify-content-evenly">
                            <div className="time1">
                                <p className="mb-0" style={{fontSize:'15px'}}>03:30 PM</p>
                                
                            </div>
                            
                            <div className="time3">
                            <p className="mb-0" style={{fontSize:'15px'}}>05:30 PM</p>
                               
                            </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={3}>
                <div className="right d-flex flex-column align-items-center justify-content-center">
                        <p className="m-0">Total Price</p>
                        <p className="m-0" style={{fontSize:'30px'}}>Rs, 32,000</p>
                        <Button variant="warning">Book</Button>
                    </div>
                </Col>
                </Row>


                <Row> 
                <Col className="d-flex justify-content-between" style={{background:'lightgrey'}}>
                <div className="Departure">Departure</div>
                <div className="Departure-date">27 Dec, 2022</div>
                </Col>
            </Row>
            <Row style={{padding:"15px", marginBottom:"15px",background:"white"}}>
                <Col lg={9}>
                    <div className="d-flex justify-content-between">
                        < div className="text-center" style={{width:'20%'}}>
                            <img src={pf} alt="ff" width='50%' />
                            <p style={{fontSize:'13px'}}>Airsiel</p>
                        </div>
                        <div className="d-flex justify-content-evenly" style={{width:'70%'}}>
                            
                            <div className="time1">
                                <p className="mb-0" style={{fontSize:'25px'}}>03:30 PM</p>
                                <p>ISB</p>
                            </div>
                            <div className="time2 text-center pt-1">
                                - <span className="px-3 " style={{background:"gray",borderRadius:'30px',fontSize:'20px'}}>2 hrs</span> -
                                <p style={{fontSize:'14px'}}>Non Stop</p>
                            </div>
                            <div className="time3">
                            <p className="mb-0" style={{fontSize:'25px'}}>05:30 PM</p>
                                <p>KHI</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly">
                        < div className="text-center" style={{width:'20%'}}>
                            <p>Flight Details</p>
                        </div>
                        <div style={{width:'70%'}}>
                            <div className="d-flex justify-content-evenly">
                            <div className="time1">
                                <p className="mb-0" style={{fontSize:'15px'}}>03:30 PM</p>
                                
                            </div>
                            
                            <div className="time3">
                            <p className="mb-0" style={{fontSize:'15px'}}>05:30 PM</p>
                               
                            </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={3}>
                <div className="right d-flex flex-column align-items-center justify-content-center">
                        <p className="m-0">Total Price</p>
                        <p className="m-0" style={{fontSize:'30px'}}>Rs, 32,000</p>
                        <Button variant="warning">Book</Button>
                    </div>
                </Col>
                </Row>


                <Row> 
                <Col className="d-flex justify-content-between" style={{background:'lightgrey'}}>
                <div className="Departure">Departure</div>
                <div className="Departure-date">27 Dec, 2022</div>
                </Col>
            </Row>
            <Row style={{padding:"15px", marginBottom:"15px",background:"white"}}>
                <Col lg={9}>
                    <div className="d-flex justify-content-between">
                        < div className="text-center" style={{width:'20%'}}>
                            <img src={pf} alt="ff" width='50%' />
                            <p style={{fontSize:'13px'}}>Airsiel</p>
                        </div>
                        <div className="d-flex justify-content-evenly" style={{width:'70%'}}>
                            
                            <div className="time1">
                                <p className="mb-0" style={{fontSize:'25px'}}>03:30 PM</p>
                                <p>ISB</p>
                            </div>
                            <div className="time2 text-center pt-1">
                                - <span className="px-3 " style={{background:"gray",borderRadius:'30px',fontSize:'20px'}}>2 hrs</span> -
                                <p style={{fontSize:'14px'}}>Non Stop</p>
                            </div>
                            <div className="time3">
                            <p className="mb-0" style={{fontSize:'25px'}}>05:30 PM</p>
                                <p>KHI</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly">
                        < div className="text-center" style={{width:'20%'}}>
                            <p>Flight Details</p>
                        </div>
                        <div style={{width:'70%'}}>
                            <div className="d-flex justify-content-evenly">
                            <div className="time1">
                                <p className="mb-0" style={{fontSize:'15px'}}>03:30 PM</p>
                                
                            </div>
                            
                            <div className="time3">
                            <p className="mb-0" style={{fontSize:'15px'}}>05:30 PM</p>
                               
                            </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={3}>
                <div className="right d-flex flex-column align-items-center justify-content-center">
                        <p className="m-0">Total Price</p>
                        <p className="m-0" style={{fontSize:'30px'}}>Rs, 32,000</p>
                        <Button variant="warning">Book</Button>
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

export default Flight;
