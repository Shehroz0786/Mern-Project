import "../Components/Flight.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pf from "../Images/PF.png";

import Button from "react-bootstrap/Button";


import React from 'react'

export default function Flight(props) {
  return (
            <>
            <Col lg={12}>
              <Row>
                <Col
                  className="d-flex justify-content-between"
                  style={{ background: "lightgrey" }}
                >
                  <div className="Departure">Departure</div>
                  <div className="Departure-date">27 Dec, 2022</div>
                </Col>
              </Row>
              <Row
                style={{
                  padding: "15px",
                  marginBottom: "15px",
                  background: "white",
                }}
              >
                <Col lg={9}>
                  <div className="d-flex justify-content-between">
                    <div className="text-center" style={{ width: "20%" }}>
                      <img src={pf} alt="ff" width="50%" />
                      <p style={{ fontSize: "13px" }}>Airsiel</p>
                    </div>
                    <div
                      className="d-flex justify-content-evenly"
                      style={{ width: "70%" }}
                    >
                      <div className="time1">
                        <p className="mb-0" style={{ fontSize: "25px" }}>
                         {props.time1}
                        </p>
                        <p>{props.city1}</p>
                      </div>
                      <div className="time2 text-center pt-1">
                        -{" "}
                        <span
                          className="px-3 "
                          style={{
                            background: "gray",
                            borderRadius: "30px",
                            fontSize: "20px",
                          }}
                        >
                         {props.time2}
                        </span>{" "}
                        -<p style={{ fontSize: "14px" }}>Non Stop</p>
                      </div>
                      <div className="time3">
                        <p className="mb-0" style={{ fontSize: "25px" }}>
                          {props.time3}
                        </p>
                        <p>{props.city2}</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-evenly">
                    <div className="text-center" style={{ width: "20%" }}>
                      <p>Flight Details</p>
                    </div>
                    <div style={{ width: "70%" }}>
                      <div className="d-flex justify-content-evenly">
                        <div className="time1">
                          <p className="mb-0" style={{ fontSize: "15px" }}>
                            {props.time1}
                          </p>
                        </div>

                        <div className="time3">
                          <p className="mb-0" style={{ fontSize: "15px" }}>
                            {props.time3}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="right d-flex flex-column align-items-center justify-content-center">
                    <p className="m-0">Total Price</p>
                    <p className="m-0" style={{ fontSize: "30px" }}>
                     {props.prise}
                    </p>
                    <Button variant="warning">Book</Button>
                  </div>
                </Col>
              </Row>
              </Col>
      </>

              )
}

