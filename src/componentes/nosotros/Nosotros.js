import React from 'react'
import deco from '../../images/decoracion_nosotros1.png'
import apc from '../../images/apc.png'
import cisco from '../../images/cisco.png'
import dell from '../../images/dell.png'
import fortinet from '../../images/fortinet.png'
import hp from '../../images/hp.png'
import ubiquiti from '../../images/Ubiquiti.png'
import vmware from '../../images/vmware.png'
import microsoft from '../../images/Microsoft.png'


function Nosotros() {
    return (
        <main className='nosotros'>
            <article className='nosotros-grid'>
                <div className='nosostros-grid-1'>
                    <h2>Nosotros</h2>
                    
                </div>
                <div className='nosotros-grid-2'>
                    <p>ONBYTEC es una empresa de servicios interesada en la seguridad de la información, la calidad de las comunicaciones y la infraestructura para las plataformas de cómputos, ofreciendo en consecuencia como alternativa a la implementación de productos y proyectos informáticos. Somos el aliado perfecto para la selección, formación, prescripción, distribución y soporte de soluciones que incrementen la rentabilidad, el rendimiento y la calidad de servicio.</p>
                </div>

            </article>
            <div className='marcas'>
                <img src={apc} alt="apc"/>
                <img src={cisco} alt="cisco"/>
                <img src={dell} alt="dell"/>
                <img src={fortinet} alt="fortinet"/>
                <img src={hp} alt="hp"/>
                <img src={ubiquiti} alt="ubiquiti"/>
                <img src={vmware} alt="vmware"/>
                <img src={microsoft} alt="microsoft"/>


            </div>
        </main>
    )
}

export default Nosotros
