//...........
//Importing
//...........

import React, {useEffect} from 'react'
import {FormRow, Alert} from '../components'
import { UseAppContext } from '../context/appContext'
import {useNavigate} from 'react-router-dom'
import '../assets/css/Register.css'

//initial State
const initialState = {
  name:'',
  email:'',
  password:'',
  isMember:true,
}
//...........
//APP
//...........

const Register = () => {
  //useState
  const [values, setValues]=React.useState(initialState)
  //global state and useNavigate
  const navigate = useNavigate()
  //contextData
  const {
    user,
    isLoading,
    showAlert,
    displayAlert,
    setupUser
  } = UseAppContext();
  //ToggleMember-Function
  const toggleMember = ()=>{
    setValues({...values, isMember:!values.isMember})
  }
  //HandleChange-Function
  const handleChange = (e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }
  //onSubmit-Function
  const onSubmit = (e)=>{
    e.preventDefault();
    const{name, email, password, isMember}=values
    if(!email || !password || (!isMember && !name)){
      displayAlert()
      return 
    }
    //register
    const currentUser = {name, email ,password}
    if(isMember){
      // loginUser(currentUser)
      setupUser({
        currentUser,
        endPoint: 'login',
        alertText: 'Login Successful! Redirecting...'
      })
    }
    else{
      // registerUser(currentUser)
      setupUser({currentUser, endPoint:'register', alertText:'User Created! Redirecting...'})
    }
  }
  //useEffect
  // useEffect(()=>{
  //   if(user){
  //     setTimeout(()=>{
  //       navigate('/')
  //     },3000)
  //   }
  // },[user, navigate])
  return (
    <section className='register'>
      <form className='form' onSubmit={onSubmit}>
        <h3>{values.isMember?"login":"register"}</h3>
        {showAlert && <Alert/>}
        {/* name input */}
        {!values.isMember&&        
        <FormRow type="text" name="name" value={values.name} handleChange={handleChange}/> 
        }
        {/* email input */}
        <FormRow type="email" name="email" value={values.email} handleChange={handleChange}/>
        {/* password input */}
        <FormRow type="password" name="password" value={values.password} handleChange={handleChange}/>
        <button type='submit' className='btn btn-block btn-middle' disabled={isLoading}>
          submit
        </button>
        <p>
          {values.isMember?"Not a member yet... ":"Already a member ? "}
          <button type='button' onClick={toggleMember} className="member-btn">
            {!values.isMember?"login":"register"}
          </button>
        </p>
      </form>
    </section>
  )
}
//...........
//Exporting
//...........
export default Register
