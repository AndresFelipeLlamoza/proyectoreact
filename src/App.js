import './App.css';
import Home from './home';
import Planets from './planets';
import Characters from './characters';
import DetallePerson from './components/detalles/detalleperson';
import {Route, Routes} from "react-router-dom";


function App() {
  
  return (
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/characters' element={<Characters/>}></Route>
        <Route path='/planets' element={<Planets/>}></Route>
        <Route path='/detalleperson' element={<DetallePerson/>}></Route>
      </Routes>
    );
}

export default App;

