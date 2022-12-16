import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Domestic from './Components/Domestic';
import International from './Components/International';
import Loginform from './Components/Loginform';
import Signupform from './Components/Signupform';
import {Route, Routes} from 'react-router-dom';
import Home from'./Components/Home';
import BankStatementletter from './Components/BankStatementletter';
import CoverStatementletter from './Components/CoverStatementletter';
// import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import HotelReservition from './pages/HotelReservition';
import Tickets from './pages/Tickets';
import TravelInsurance from './pages/TravelInsurance';
import VisitVisa from './pages/VisitVisa';
import UmrahPackages from './pages/UmrahPackages';
import Header from './Components/Header';
import Footer from './Components/Footer';
import TicketForm from './Components/TicketForm';
import Card from './Components/Card';
import OurServices from './Components/OurServices';
import Contact from './pages/Contact';



function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={< Tickets />}></Route>
			  <Route exact path='/TravelInsurance' element={<TravelInsurance/>}/>
				<Route exact path='/HotelReservition' element={< HotelReservition />}></Route>
				<Route exact path='/UmrahPackages' element={< UmrahPackages />}></Route>
				<Route exact path='/Contact' element={< Contact />}></Route>
        <Route exact path='/VisitVisa' element={<VisitVisa/>}/>


       
        <Route path='/Home' element={<Home/>}/>
        <Route path='/BankStatementletter' element={<BankStatementletter/>}/>
        <Route path='/CoverStatementletter' element={<CoverStatementletter/>}/>
        <Route path='/Loginform' element={<Loginform/>}/>
        <Route path='/Signupform' element={<Signupform/>}/>
        <Route path='/Domestic' element={<Domestic/>}/>
        <Route path='International' element={<International/>}/>
      </Routes>
      {/* <Game/> */}
 
    </div>
  );
}

export default App;
