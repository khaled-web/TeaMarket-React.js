//.............
//importing
//.............

import React, {
 useState,
 useReducer,
 useContext,
 useEffect
} from 'react';
import {
 DISPLAY_ALERT,
 CLEAR_ALERT,
SIDEBAR_OPEN,
SIDEBAR_CLOSE,
POSITIVE_MESSAGE,
SETUP_USER_BEGIN,
SETUP_USER_SUCCESS,
SETUP_USER_ERROR
} from './action';
import reducer from './reducer'
import axios from 'axios'

//.............
//App.
//.............

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')

//initialState
const initialState = {
  //authIssues
 isLoading: false,
 showAlert: false,
 alertText: '',
 alertType: '',
 user:user ? JSON.parse(user) : null,
 token:token,
 showSidebar:false,
}

//AppContext
const AppContext = React.createContext();

//AppProvider->>index.js
const AppProvider = ({children})=>{
 const [state, dispatch]=useReducer(reducer, initialState);

 //openSidebar
 const openSideBar = ()=>{
  dispatch({type:SIDEBAR_OPEN})
 }
 //closeSidebar
 const closeSidebar = ()=>{
  dispatch({type:SIDEBAR_CLOSE})
 }

 //displayAlert-Function
 const displayAlert = ()=>{
  dispatch({type:DISPLAY_ALERT})
  clearAlert()
 }

 //clearAlert
 const clearAlert = ()=>{
  setTimeout(()=>{
   dispatch({type:CLEAR_ALERT})
  },3000)
 }

 //positiveMessage
 const positiveMessage = ()=>{
  dispatch({type:POSITIVE_MESSAGE})
  clearAlert()
 }

 //localStorage
 const addUserToLocalStorage =({user, token})=>{
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('token', token)
 }

 const removeUserFromLocalStorage = ()=>{
  localStorage.removeItem('user')
  localStorage.removeItem('token')
 }

 //registerUser
 const registerUser = async (currentUser)=>{}

 //loginUser
 const loginUser = async(currentUser)=>{}

  //setupUser
 const setupUser = async({currentUser, endPoint, alertText})=>{
  dispatch({type:SETUP_USER_BEGIN})
  try {
    const response = await axios.post(`http://localhost:4000/api/v1/${endPoint}`, currentUser)
    // console.log(response)
    const {token, user} = response.data
    dispatch({
      type:SETUP_USER_SUCCESS,
      payload:{user,token,alertText}
    })
    addUserToLocalStorage({token,user})
  } catch (error) {
    dispatch({
      type:SETUP_USER_ERROR,
      payload:{msg:error.response.data.msg}
    })
  }
  clearAlert()
 }

  //Toggle-sidebar
  const toggleSidebar = ()=>{}

  //logout_user
  const logoutUser = ()=>{}

  //update_user
  const updateUser = async(currentUser)=>{}

  //handleChange
  const handleChange = ({name, value})=>{}

  //clearValue
  const clearValue = ()=>{}

  return <AppContext.Provider value={{
  ...state, 
  displayAlert, 
  openSideBar,
  closeSidebar,
  positiveMessage,
  setupUser
  }}>
  {children}
 </AppContext.Provider>
}

//useAppContext
const UseAppContext = ()=>{
 return useContext(AppContext)
}

//.............
//exporting.
//.............
//export AppProvider, initialState
export {AppProvider, initialState, UseAppContext}