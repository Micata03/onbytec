import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import logoMenu from '../../images/logo_menu.png'
import { Link } from 'react-router-dom';

function MenuOpen({close}) {
    return (
        <main className='menu-overlay'>
            <article className='menu'>
                <div className='menu-grid'>
                    <div className='menu-grid-1'>
                        <AiOutlineClose className="menu-close" onClick={close}/>
                        <Link to="/"><img src={logoMenu} className='menu-img' onClick={close}/></Link>
                        
                    </div>
                    <div className='menu-grid-2'>
                        <ul className='menu-links'>
                            <Link to="/nosotros" className='li'><li onClick={close}>Nosotros</li></Link>
                            <Link to="/servicios" className='li'><li onClick={close}>Servicios</li></Link>
                            <Link to="/contacto" className='li'><li onClick={close}>Contacto</li></Link>
                            
                            
                        </ul>
                    </div>
                </div>
            </article>

        </main>
    )
}

export default MenuOpen
