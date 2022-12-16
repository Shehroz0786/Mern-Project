import './Header.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from '../Images/Logo.png'
import { Nav, Navbar, NavDropdown } from "react-bootstrap";


function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar-div">
      <Navbar.Brand>
	  <div className="Nav-logo">
	  <img src={Logo} alt="" />
	  </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle-button" />
      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="mr-auto">

		  <Nav.Link>
		  <Link className='link' to="/">Tickets</Link>
		  </Nav.Link>

		  <Nav.Link>
		  <Link className='link' to="/TravelInsurance">Flight</Link>
		  </Nav.Link>

          <Nav.Link>
		  <Link className='link' to="/VisitVisa">Visa</Link>
		  </Nav.Link>

		  <Nav.Link>
		  <Link className='link' to="/HotelReservition">Hotel Reservation</Link>
		  </Nav.Link>

          <Nav.Link>
		  <Link className='link' to="/UmrahPackages">Umrah Packages</Link>
          </Nav.Link>

		  <Nav.Link>
		  <Link className='link' to="/Contact">Contact us</Link>
          </Nav.Link>

		  <Nav.Link>
		  <Link className='link' to="/Loginform">Login</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header