import './App.css';
import home from './views/home';
import planets from './views/planets';
import characters from './views/characters';
import {Route, Routes} from 'react-router-dom';


function App() {
  
  return (
      <Routes>
        <Route path='/' element={<home/>}></Route>
        <Route path='/planets' element={<planets/>}></Route>
        <Route path='/characters' element={<characters/>}></Route>
      </Routes>
    );
}

export default App;

