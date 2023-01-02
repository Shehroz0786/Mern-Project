import React from "react";
import Flightdata from "./Flightdata";
import Flight from "./Flight";
import "../Components/Flight.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";


function MainFlight() {
    const [data, setData] = useState(Flightdata);
    return (
      <>
        <div style={{ background: "rgb(236, 236, 236)" }}>
          <Container className="conflight">
            <Row>
              <Col lg={3}>
                <h2>Filter By</h2>
                <hr className="my-5" />
                <h5 className="my-5">Stops</h5>
                <div className="form-check my-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label className="form-check-label">Non Stop</label>
                </div>
                <hr className="my-5" />
                <h5 className="my-5">Departure time</h5>
                <div className="form-check my-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label className="form-check-label">00:00 - 06:00</label>
                </div>
                <div className="form-check my-3 ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label className="form-check-label">06:00 - 12:00</label>
                </div>
                <div className="form-check my-3 ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label className="form-check-label">12:00 - 18:00</label>
                </div>
                <div className="form-check my-3 ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label className="form-check-label">18:00 - 00:00</label>
                </div>
                <hr className="my-5" />
                <h5 className="my-5">Airlines</h5>
                <div className="form-check my-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label className="form-check-label">Serene Air</label>
                </div>{" "}
                <div className="form-check my-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label className="form-check-label">Airsial</label>
                </div>{" "}
                <div className="form-check my-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label className="form-check-label">Airblue</label>
                </div>{" "}
                <div className="form-check my-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label className="form-check-label">Fly Jinnah</label>
                </div>
                <div className="form-check my-3 ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label className="form-check-label">PIA</label>
                </div>
              </Col>
              <Col lg={9}>
              {data.map((val) => {
       return(
        <Flight
        time1={val.time1}
        time2={val.time2}
        time3={val.time3}
        prise={val.prise}
        city1={val.city1}
        city2={val.city2}
      />
       )
      })}
              </Col>
          </Row>
          
    
        </Container>
      </div>
    </>
  );
}
export default MainFlight;