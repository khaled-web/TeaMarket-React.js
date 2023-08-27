//.............
//importing
//.............

import React, {
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
SETUP_USER_ERROR,
LOGOUT_USER,
GET_PRODUCTS_BEGIN,
GET_PRODUCTS_SUCCESS,
GET_PRODUCTS_ERROR,
UPDATE_SORT,
SET_GRIDVIEW,
SET_LISTVIEW
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
 //product
 product_error:false,
 products:[],
 single_product_error:false,
 single_product:[],
 //filtering
 grideView:false,
 sort:'price lowest',
 filter:{
  text:'',
  mini_price:0,
  max_price:0,
  price:0
 }
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

  //logout_user
  const logoutUser = ()=>{
    dispatch({type:LOGOUT_USER})
    removeUserFromLocalStorage()
  }
  
  //fetchProduct
  const fetchProducts = async()=>{
    dispatch({type:GET_PRODUCTS_BEGIN})
    try {

      const response = await axios.get('http://localhost:4000/api/v1/product',{
        headers:{
          Authorization: 'Bearer ' + token
        }
      })
      const products = response.data.product
      console.log(products)
      dispatch({
        type:GET_PRODUCTS_SUCCESS,
        payload:products
      })
    } catch (error) {
      dispatch({type:GET_PRODUCTS_ERROR})
    }
  }
  //setGridView
  const setGridView=()=>{
    dispatch({type:SET_GRIDVIEW})
  }
  //setListView
  const setListView = ()=>{
    dispatch({type:SET_LISTVIEW})
  }
  //updateSort
  const updateSort = (e)=>{
    const value = e.target.value
    dispatch({type:UPDATE_SORT, payload:value})
  }

  //useEffect
  useEffect(()=>{
    fetchProducts()
  },[])




  return <AppContext.Provider value={{
  ...state, 
  displayAlert, 
  openSideBar,
  closeSidebar,
  positiveMessage,
  setupUser,
  logoutUser,
  updateSort,
  setGridView,
  setListView
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