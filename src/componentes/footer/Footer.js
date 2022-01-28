import React from 'react';
import facebook from '../../images/redes-04.png'
import youtube from '../../images/redes-05.png'
import linkedin from '../../images/redes-06.png'
import logo from '../../images/logo_footer.png'
import {Link} from 'react-router-dom'

function Footer() {
  return <main className='footer'>
      <article className='footer-grid'>
          <div className='footer-grid-1'>
            <a href='www.facebook.com' target='_blank'><img src={facebook} alt="facebook"/>  </a>
            <a href='www.youtube.com' target='_blank'><img src={youtube} alt="youtube"/>  </a>
            <a href='www.linkedin.com' target='_blank'><img src={linkedin} alt="linkedin"/>  </a>
          </div>
          <div className='footer-grid-2'>
              <Link to="/"><img src={logo} alt="onbytec" className='img'/></Link>
              <div className='contacto-datos-mobile'>
                   <h5>España</h5>
                   <small>Madrid</small>
                   <p>Paseo de la Castellana 77, C28046</p>
                   <h5>Ventas</h5>
                   <p>Tel:+54(011)44545-5450</p>
               </div>
              <p>2022 onbytec. todos los derechos reservados</p>
          </div>
      </article>
  </main>;
}

export default Footer;
