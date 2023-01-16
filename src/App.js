import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Domestic from "./Components/Domestic";
import International from "./Components/International";
import Loginform from "./Components/Loginform";
import Signupform from "./Components/Signupform";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import BankStatementletter from "./Components/BankStatementletter";
import CoverStatementletter from "./Components/CoverStatementletter";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import HotelReservition from "./pages/HotelReservition";
import Tickets from "./pages/Tickets";
import TravelInsurance from "./pages/TravelInsurance";
import VisitVisa from "./pages/VisitVisa";
import UmrahPackages from "./pages/UmrahPackages";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Tickets />} />
        <Route path="/TravelInsurance" element={<TravelInsurance />} />
        <Route path="/HotelReservition" element={<HotelReservition />} />
        <Route path="/UmrahPackages" element={<UmrahPackages />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/VisitVisa" element={<VisitVisa />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/BankStatementletter" element={<BankStatementletter />} />
        <Route path="/CoverStatementletter"element={<CoverStatementletter />}/>
        <Route path="/Loginform" element={<Loginform />} />
        <Route path="/Signupform" element={<Signupform />} />
        <Route path="/Domestic" element={<Domestic />} />
        <Route path="International" element={<International />} />
      </Routes>
    </div>
  );
}

export default App;
