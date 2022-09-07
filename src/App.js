import './App.css';
import Home from './home';
import Planets from './planets';
import Characters from './characters';
import DetallePersonaje from './components/detalles/DetallePersonaje';
import {Route, Routes} from "react-router-dom";
import DetallePersona from './components/detalles/DetallePersonaje';


function App() {
  
  return (
      <Routes>
        <Route path='/detalleperson/:name' element={<DetallePersonaje/>}/>
        <Route path='/detalleperson' element={<DetallePersonaje/>}/> 
        <Route path='/' element={<Home/>}/> 
        <Route path='/characters' element={<Characters/>}/>
        <Route path='/planets' element={<Planets/>}/>
      </Routes>
    );
}

export default App;

