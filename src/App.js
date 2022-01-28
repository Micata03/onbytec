
import './App.css';
import Contacto from './componentes/Contacto/Contacto';
import Footer from './componentes/footer/Footer';
import Home from './componentes/home/Home';
import NavBar from './componentes/Navbar/NavBar';
import Nosotros from './componentes/nosotros/Nosotros';
import Servicios from './componentes/servicios/Servicios';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
   
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/servicios" element={<Servicios/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
        
        
        

        </Routes>
        <Footer/>
        </BrowserRouter>
    
  );
}

export default App;
