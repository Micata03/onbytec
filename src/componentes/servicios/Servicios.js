import React from 'react'
import servicio1 from '../../images/servicio1.png'
import servicio2 from '../../images/servicio2.png'
import servicio3 from '../../images/servicio3.png'
import servicio4 from '../../images/servicio4.png'
import servicioDeco from '../../images/servicios-02.png'
import linea from '../../images/linea.png'
import cuadrados from '../../images/decoracion_texto.png'


function Servicios() {
    return (
       <main className='servicios'>
           
           <div className='servicio-header'>
               <h2 className='servicio-titulo'>Servicios</h2>
                
           </div>
           <img src={servicioDeco} className='servicio-img'/> 
        <article className='servicios-lista'>
            <div className='servicio1'>
                <div className='servicio1-text'>
                <h2>consultoría, proyectos e implementaciones</h2>
                <p>En ONBYTEC podemos ser una fuente de consulta ante nuevas tecnologías. Nuestro staff se encuentra altamente calificado para aconsejarlo en como usar las tecnologias de la información para conseguir sus objetivos empresariales. Nos permitimos asesorarlo desde la idea inicial del proyecto y poder más allá de la naturaleza del mismo convertir su idea en realidad. Al comprender en principio la problemática podremos desarrollar las herramientas necesarias y llevar adelante la implementación y el seguimiento posterior de las necesidades requeridas.</p>
                <img src={linea} className='lineaCeleste'></img>
                </div>
                <div className='servicios-lista-img'>
                    <img src={servicio1} className='serv-img'/>
                </div>
                
            </div>
            <div className='servicio1'>
                <div className='servicio1-text'>
                <h2 >Soporte técnico</h2>
                <p>Hoy en día y cada vez más las empresas están reconociendo las ventajas de contar con un socio tecnologico de confianza y son cada vez más las que prefieren delegar las tareas de soporte, mantenimiento y desarrollo IT como una inversión de valor. Es por ello que ONBYTEC le brinda la posibilidad de contar con asistencia para que los usuarios puedan resolver eventuales problemas o inquietudes, o acompañar al departamento de sistema en la realización de una tarea específica. El soporte técnico se puede dar de forma remota y personalmente.</p>
                <img src={linea} className='lineaCeleste'></img>
                </div>
                <div className='servicios-lista-img'>
                    <img src={servicio2} className='serv-img '/>
                </div>
                
            </div>
            <div className='servicio1'>
                <div className='servicio1-text'>
                <h2>outsourcing</h2>
                <p>ONBYTEC brinda a sus clientes, en forma permanente o por el lapso del proyecto, profesionales especializados en el análisis y desarrollo de sistemas para empresas, que están o no relacionados con su core business. Esta solución es adecuada cuando sin poseer un staff de sistemas puede respaldarse en uno obteniendo así una ventaja competitiva para su empresa. Entre las ventajas del Outsoursing podemos destacar que su empresa va a disponer de un staff capacitado desde el comienzo por un costo menor al de tener que contratar personal especializado en cada una de las necesidades que su empresa presente en materia de sistemas.</p>
                <img src={linea} className='lineaCeleste'></img>
                </div>
                <div className='servicios-lista-img'>
                    <img src={servicio3} className='serv-img'/>
                </div>
                
            </div>
            <div className='servicio1'>
                <div className='servicio1-text'>
                <h2 >Auditoria</h2>
                <p>Consiste en recoger, agrupar y evaluar evidencias para determinar debilidades que pudieran presentarse en una revisión exhaustiva de las estaciones de trabajo, redes de comunicaciones o servidores. El resultado que se obtiene va a ser una imagen completa del estado general de los activos de información. ONBYTEC  al realizar este proceso le va a permitir verificar la seguridad en la autenticidad, confidencialidad, integridad y disponibilidad de la información tratada por los sistemas. Una vez obtenidos los resultados se los informaremos a los responsables detallando sugerencias de medidas preventivas de refuerzo o de corrección.</p>
                <img src={linea} className='lineaCeleste'></img>
                </div>
                <div className='servicios-lista-img'>
                    <img src={servicio4} className='serv-img'/>
                </div>
                
            </div>
        </article>
        <div className="parrafo-servicio">
            <p>Somos el aliado perfecto para la selección, formación, prescripción, distribución y soporte de soluciones que incrementen la rentabilidad, el rendimiento y la calidad de servicio.</p>
            <img src={cuadrados} alt='Aliado perfecto'/>
        </div>
       </main>
    )
}

export default Servicios
