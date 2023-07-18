import {
 CLEAR_ALERT,
 DISPLAY_ALERT,
 TOGGLE_SIDEBAR,
 SIDEBAR_OPEN,
 SIDEBAR_CLOSE,
 POSITIVE_MESSAGE
} from './action'

const reducer = (state, action) => {
 //SideBarOpen
 if (action.type === SIDEBAR_OPEN) {
  return {
   ...state,
   showSidebar: true
  }
 }
 //SidebarClose
 if (action.type === SIDEBAR_CLOSE) {
  return {
   ...state,
   showSidebar: false
  }
 }
 //clearAlert
 if(action.type === CLEAR_ALERT){
  return{
   ...state,
   showAlert:false,
   alertType:'',
   alertText:''
  }
 }
 //displayAlert
 if(action.type === DISPLAY_ALERT){
  return{
   ...state,
   showAlert:true,
   alertType:'danger',
   alertText:'Please provide all values'
  }
 }
 //MessageSuccess
 if(action.type === POSITIVE_MESSAGE){
  return{
   ...state,
   showAlert:true,
   alertType:'success',
   alertText:'Your Order In Progress...'
  }
 }
 throw new Error(`no such action : ${action.type}`)
}

export default reducer;