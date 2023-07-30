import {
 CLEAR_ALERT,
 DISPLAY_ALERT,
 SIDEBAR_OPEN,
 SIDEBAR_CLOSE,
 POSITIVE_MESSAGE,
 SETUP_USER_BEGIN,
 SETUP_USER_SUCCESS,
 SETUP_USER_ERROR
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
 if (action.type === CLEAR_ALERT) {
  return {
   ...state,
   showAlert: false,
   alertType: '',
   alertText: ''
  }
 }
 //displayAlert
 if (action.type === DISPLAY_ALERT) {
  return {
   ...state,
   showAlert: true,
   alertType: 'danger',
   alertText: 'Please provide all values'
  }
 }
 //MessageSuccess
 if (action.type === POSITIVE_MESSAGE) {
  return {
   ...state,
   showAlert: true,
   alertType: 'success',
   alertText: 'Your Order In Progress...'
  }
 }
 //setup(Access)-Began
 if (action.type === SETUP_USER_BEGIN) {
  return {
   ...state,
   isLoading: true
  }
 }
 //setup(Access)-Success
 if (action.type === SETUP_USER_SUCCESS) {
  return {
   ...state,
   isLoading: false,
   showAlert: true,
   alertType: 'success',
   alertText: action.payload.alertText,
   user: action.payload.user,
   token: action.payload.token
  }
 }
 //setup(Access)-error
 if (action.type === SETUP_USER_ERROR) {
  return {
   ...state,
   isLoading: false,
   showAlert: true,
   alertType: 'danger',
   alertText: action.payload.msg
  }
 }
 throw new Error(`no such action : ${action.type}`)
}

export default reducer;