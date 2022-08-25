import './App.css';
import Home from './home';
import Planets from './planets';
import Characters from './characters';
import DetallePerson from './components/detalles/detalleperson';
import {Route, Routes} from "react-router-dom";
import DetallePersona from './components/detalles/detalleperson';


function App() {
  
  return (
      <Routes>
        <Route path='/detallepersonaje/:name'>sgfhgsghsdf</Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/characters' element={<Characters/>}></Route>
        <Route path='/planets' element={<Planets/>}>
          <DetallePersona/>
        </Route>
      </Routes>
    );
}

export default App;

