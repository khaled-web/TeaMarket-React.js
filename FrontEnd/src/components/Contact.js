import React, {useState, useRef} from 'react'
import emailjs from '@emailjs/browser'
import {
  contactItems
} from '../utils/links.js'
import { useNavigate } from 'react-router-dom'
import { UseAppContext } from '../context/appContext.js'
import {Alert} from '../components'

const initialState = {
  from_name:'',
  from_email:'',
  message:''
}

const Contact = () => {
  //useState
  const [values, setValues] =useState(initialState)
  const {showAlert, displayAlert,positiveMessage} = UseAppContext()
  const navigate = useNavigate()
  //handleChange
  const handleChange = (e)=>{
    setValues({...values, [e.target.name]:e.target.value})
  }
  /* emailJs */
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    const {from_name, from_email, message}=values
    if(!from_name || !from_email || !message){
      displayAlert()
      return
    }
    else{
      positiveMessage()
      emailjs.sendForm('service_2ve7voy', 'template_a66gz0a', form.current, 'EfcaVCTSmZFOsd7ZK')
      // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
            setValues({
              from_name:'',
              from_email:'',
              message:''
            })
        }, (error) => {
            console.log(error.text);
        });
    }
  };
  return (
    <section className="contact" id='contact'>
      <div className="section-center clearfix">
        <article className='contact-info'>
        {contactItems.map((i)=>{
          const {id, icon, title, info} = i
          return(
              <div className="contact-item" key={id}>
                <h4 className='contact-title'>
                  <span className='contact-icon'>{icon}</span>
                  {title}
                </h4>
                <h4 className='contact-text'>{info}</h4>
              </div>
          )
        })}
        </article>
        <article className="contact-form">
          <h3>contact us</h3>
          {showAlert && <Alert/>}
          <form className='form-group' ref={form} onSubmit={sendEmail}>
              <input type="text" placeholder="name" className="form-control" name="from_name" onChange={handleChange} value={values.from_name}/>
              <input type="email" placeholder="email" className="form-control" name="from_email" onChange={handleChange} value={values.from_email}/>
              <textarea name="message" placeholder="message" className="form-control" onChange={handleChange} value={values.message}  rows="5"/>
              {/* <button type='submit' className='submit-btn btn'>
              submit here
            </button> */}
            <input type="submit" value="submit here" className='submit-btn btn'/>
          </form>
        </article>
      </div>
    </section>
  )
}

export default Contact
