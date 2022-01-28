import React, {useState} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import MenuOpen from '../home/MenuOpen';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

 
    const openMenu = ()=>{
        setMenuOpen(true)
    }
    const closeMenu =()=>{
        setMenuOpen(false)
    }
    return (
        
        <nav className= { 'nav-mobile' }      >
            <AiOutlineMenu className="home-menu" onClick={openMenu}/>
            {menuOpen ?  <MenuOpen close={closeMenu}/> : console.log('mp')}
        
        </nav>
        
    )
}

export default NavBar
