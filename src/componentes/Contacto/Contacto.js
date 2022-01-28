import React from 'react';
import {useForm} from '../../componentes/hooks/useForm'
import Loader from '../../componentes/loader/Loader'
import Message from '../../componentes/message/Message'





const initialForm ={
    name: '',
    email:'',
    empresa: '',
    comments:'',
    tel:''
}
const validationsForm = (form)=>{
    let errors ={};
    let regexName= /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail=  /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;
    let regexTel = /^.{1,12}$/;

    if(!form.name.trim()){
        errors.name = 'El campo nombre es requerido'
    } else if(!regexName.test(form.name.trim())){
        errors.name = 'El campo nombre solo acepta letras y espacios en blanco'
    }
    if(!form.email.trim()){
        errors.email = 'El campo email es requerido'
    }else if(!regexEmail.test(form.email.trim())){
        errors.email = 'Email invalido'
    }
    if(!form.tel.trim()){
        errors.tel = 'El campo email es requerido'
    }else if(!regexTel.test(form.tel.trim())){
        errors.tel = 'Email invalido'
    }
    if(!form.comments.trim()){
        errors.comments = '*'
    }else if(!regexComments.test(form.comments.trim())){
        errors.comments = 'El campo comentario no debe exceder los 255 caracteres'
    }


    return errors;
}



function Contacto() {
   
    const{form, errors, loading, response, handleBlur, handleChange, handleSubmit}= useForm(initialForm, validationsForm)

 

  return(
   <main className='contacto'>
       <article className='contacto-grid'>
           <div className='contacto-grid-1'>
               <div className='contacto-datos'>
                   <h5>España</h5>
                   <small>Madrid</small>
                   <p>Paseo de la Castellana 77, C28046</p>
                   <h5>Ventas</h5>
                   <p>Tel:+34 910 60 32 79</p>
               </div>
               
               <h4>contacto</h4>


           </div>
           <div className='contacto-grid-2'>
                <form onSubmit={handleSubmit}>
                <input 
                type= 'text' 
                name='name' 
                placeholder='nombre' 
                className='form-control'
                onBlur={handleBlur}   
                onChange={handleChange} 
                value={form.name} 
                required/>  
                {errors.name && <small>{errors.name}</small>}
                <input 
                type= 'email' 
                name='email' 
                placeholder='Email' 
                className='form-control'
                onBlur={handleBlur}   
                onChange={handleChange} 
                value={form.email} 
                required/> 
                {errors.email && <small>{errors.email}</small>}
                <input 
                type= 'number' 
                name='tel' 
                placeholder='Telefono' 
                className='form-control'
                onBlur={handleBlur}   
                onChange={handleChange} 
                value={form.tel} 
                required/> 
                {errors.tel && <small>{errors.tel}</small>}

                <input 
                type= 'text' 
                name='empresa' 
                placeholder='empresa' 
                className='form-control'
                onBlur={handleBlur}   
                onChange={handleChange} 
                value={form.empresa} 
                required/> 
                <textarea 
                name='comments'
                cols='50'
                rows='5'
                placeholder='Deja tu mensaje'
                onBlur={handleBlur}   
                onChange={handleChange} 
                value={form.comments}
                className='form-control' />
                {errors.comments && <small>{errors.comments}</small>}
                <button type="submit" className="btn">Enviar</button>
                </form>
                
            </div>
            <div className='contacto-grid-3'>
                {loading && <Loader/>}
                {response && <Message msg="El mensaje ha sido enviado" />}
            </div>
                        
           
       </article>
   </main>
   
   )
}

export default Contacto;
