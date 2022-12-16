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
// import Game from './Components/Game';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Home' element={<Home/>}/>
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
