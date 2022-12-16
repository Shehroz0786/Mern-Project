import './Buses.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

function Buses() {
  return (
    <>
      <Container className='conbus'>

        <Carousel>
  
        <Carousel.Item >
            <div className='newRow'>
              <Card style={{ width: '21rem' }} className='text-center'>
                <Card.Img variant="top" src="https://mdbootstrap.com/img/new/standard/city/047.webp" />
                <Card.Body>
                  <Card.Title>Family Room</Card.Title>
                  <Card.Text>
                    120$ / PER NIGHT
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: '21rem' }} className='text-center'>
                <Card.Img variant="top" src="https://mdbootstrap.com/img/new/standard/city/047.webp" />
                <Card.Body>
                  <Card.Title>Family Room</Card.Title>
                  <Card.Text>
                    120$ / PER NIGHT
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: '21rem' }} className='text-center'>
                <Card.Img variant="top" src="https://mdbootstrap.com/img/new/standard/city/047.webp" />
                <Card.Body>
                  <Card.Title>Family Room</Card.Title>
                  <Card.Text>
                    120$ / PER NIGHT
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
          <Carousel.Item >
            <div className='newRow'>
              <Card style={{ width: '21rem' }} className='text-center'>
                <Card.Img variant="top" src="https://mdbootstrap.com/img/new/standard/city/047.webp" />
                <Card.Body>
                  <Card.Title>Family Room</Card.Title>
                  <Card.Text>
                    120$ / PER NIGHT
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: '21rem' }} className='text-center'>
                <Card.Img variant="top" src="https://mdbootstrap.com/img/new/standard/city/047.webp" />
                <Card.Body>
                  <Card.Title>Family Room</Card.Title>
                  <Card.Text>
                    120$ / PER NIGHT
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: '21rem' }} className='text-center'>
                <Card.Img variant="top" src="https://mdbootstrap.com/img/new/standard/city/047.webp" />
                <Card.Body>
                  <Card.Title>Family Room</Card.Title>
                  <Card.Text>
                    120$ / PER NIGHT
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
        </Carousel>

        


        <Row className='mt-5 mb-5 text-center'>
          <Col>
            <h1 style={{ fontSize: ' 4.5rem' }}>Rooms & Suites</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,<br />
              there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the <br /> Semantics,
              a large language ocean.</p>
          </Col>
        </Row>

        <Row>
          <Col >
            <Card style={{ width: '21rem' }} className='text-center'>
              <Card.Img variant="top" src="https://mdbootstrap.com/img/new/standard/city/047.webp" />
              <Card.Body>
                <Card.Title className='font-weight-bold'>Single Room</Card.Title>
                <Card.Text>
                  90$ / PER NIGHT
                </Card.Text>
              </Card.Body>
            </Card></Col>

          <Col>
            <Card style={{ width: '21rem' }} className='text-center'>
              <Card.Img variant="top" src="https://mdbootstrap.com/img/new/standard/city/047.webp" />
              <Card.Body>
                <Card.Title>Family Room</Card.Title>
                <Card.Text>
                  120$ / PER NIGHT
                </Card.Text>
              </Card.Body>
            </Card></Col>

          <Col>
            <Card style={{ width: '21rem' }} className='text-center'>
              <Card.Img variant="top" src="https://mdbootstrap.com/img/new/standard/city/047.webp" />
              <Card.Body>
                <Card.Title>Presidential Room</Card.Title>
                <Card.Text>
                  150$ / PER NIGHT
                </Card.Text>
              </Card.Body>
            </Card></Col>
        </Row>





        <Row className='mt-5 mb-5'>
          <Col >
            <Card className='p-3' style={{ width: '22rem' }}>
              <Card.Img variant="top" src="https://mdbootstrap.com/img/new/standard/city/047.webp" />
              <Card.Body className="d-flex justify-content-between px-0 pb-0">
                <div> <Card.Text>
                  <h3 className='mb-2 '>Suite Room</h3>

                </Card.Text></div>
                <div className='d-flex flex-column justify-content-end'>
                  <Button variant="primary" className="float-end">More Details</Button>
                </div>
              </Card.Body>
            </Card>

          </Col>

          <Col>
            <Card className='p-3' style={{ width: '22rem' }}>
              <Card.Img variant="top" src="https://mdbootstrap.com/img/new/standard/city/047.webp" />
              <Card.Body className="d-flex justify-content-between px-0 pb-0">
                <div> <Card.Text>
                  <h3 className='mb-2 '>Deluxe Room</h3>

                </Card.Text></div>
                <div className='d-flex flex-column justify-content-end'>
                  <Button variant="primary" className="float-end">More Details</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className='p-3' style={{ width: '22rem' }}>
              <Card.Img variant="top" src="https://mdbootstrap.com/img/new/standard/city/047.webp" />
              <Card.Body className="d-flex justify-content-between px-0 pb-0">
                <div> <Card.Text>
                  <h3 className='mb-2 '>Standard Room</h3>

                </Card.Text></div>
                <div className='d-flex flex-column justify-content-end'>
                  <Button variant="primary" className="float-end">More Details</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </>
  );
}

export default Buses;