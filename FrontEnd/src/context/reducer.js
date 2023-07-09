import {
 CLEAR_ALERT,
 DISPLAY_ALERT,
 TOGGLE_SIDEBAR,
 SIDEBAR_OPEN,
 SIDEBAR_CLOSE,

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
 throw new Error(`no such action : ${action.type}`)
}

export default reducer;