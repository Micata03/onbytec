import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineDown} from 'react-icons/ai'
import headerlogo from '../../images/logo_header.png'
import logo from '../../images/logo_texto_top.png'
import Contacto from '../Contacto/Contacto';
import NavBar from '../Navbar/NavBar';
import Nosotros from '../nosotros/Nosotros';
import Servicios from '../servicios/Servicios';
import MenuOpen from './MenuOpen';
import 'animate.css';


function Home() {

    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = ()=>{
        setMenuOpen(true)
    }
    const closeMenu =()=>{
        setMenuOpen(false)
    }
    return (
        <>
        <main className='home'>
            <article className='home-grid'>
                <div className='home-grid-1'>
                    <div className='home-menu-desktop'>
                <AiOutlineMenu className="home-menu" onClick={openMenu}/>
            {menuOpen ?  <MenuOpen close={closeMenu}/> : console.log('mp')}
            </div>
                   <div className='home-logo'>
                       <img src={headerlogo}/>
                   </div>
                </div>
                <div className='home-grid-2'>
                    <div className='home-marca'>
                        <img src={logo}/>
                    </div>
                    <div className='home-text'>
                        <p>Implementando de la mejor tecnología, según su necesidad</p>
                    </div>
                    
                </div>

            </article>
            
            <AiOutlineDown className="home-down animate__animated animate__bounce animate__repeat-3"/>
            </main>
        <Nosotros/>
        <Servicios/>
        <Contacto/>

        
        </>
        
    )
}

export default Home
