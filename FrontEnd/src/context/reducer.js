import {
 CLEAR_ALERT,
 DISPLAY_ALERT,
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
 SET_LISTVIEW,
 SORT_PRODUCTS,
 UPDATE_FILTERS,
 FILTER_PRODUCTS,

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
 //logout
 if (action.type === LOGOUT_USER) {
  return {
   ...state,
   user: null,
   token: null,
   showSidebar: false
  }
 }
 //product-begin
 if (action.type === GET_PRODUCTS_BEGIN) {
  return {
   ...state,
   isLoading: true
  }
 }
 //product-success
 if (action.type === GET_PRODUCTS_SUCCESS) {
  return {
   ...state,
   isLoading: false,
   products: action.payload
  }
 }
 //product-error
 if (action.type === GET_PRODUCTS_ERROR) {
  return {
   ...state,
   isLoading: false,
   product_error: true
  }
 }
 //updateSort
 if (action.type === UPDATE_SORT) {
  return {
   ...state,
   sort: action.payload
  }
 }
 //setGridView
 if (action.type === SET_GRIDVIEW) {
  return {
   ...state,
   grideView: true
  }
 }
 //setListView
 if (action.type === SET_LISTVIEW) {
  return {
   ...state,
   grideView: false
  }
 }
 //sort-product
 if (action.type === SORT_PRODUCTS) {
  const {
   sort,
   products
  } = state
  let tempProducts = [...products]
  if (sort === 'price-lowest') {
   tempProducts = tempProducts.sort((a, b) => a.price - b.price)
  }
  if (sort === 'price-highest') {
   tempProducts = tempProducts.sort((a, b) => b.price - a.price)

  }
  if (sort === 'name-a') {
   tempProducts = tempProducts.sort((a, b) => {
    return a.name.localeCompare(b.name)
   })
  }
  if (sort === 'name-z') {
   tempProducts = tempProducts.sort((a, b) => {
    return b.name.localeCompare(a.name)
   })
  }
  return {
   ...state,
   products: tempProducts
  }
 }
 //update filter
 if (action.type === UPDATE_FILTERS) {
  const {
   name,
   value
  } = action.payload
  return {
   ...state,
   filter: {
    ...state.filter,
    [name]: value
   }
  }
 }
 //filterProducts
 if (action.type === FILTER_PRODUCTS) {
  const {
   products
  } = state
  const {
   text,
   price
  } = state.filter
  let tempProducts = [...products]
  //filter-text
  if (text) {
   tempProducts = tempProducts.filter((product) => {
    return product.name.toLowerCase().startsWith(text)
   })
  }
  //filter-price
  if (price !== 'all') {
   tempProducts = tempProducts.filter((product) => {
    return product.price <= price
   })
  }
  return {
   ...state,
   filtered_products: tempProducts
  }
 }

 throw new Error(`no such action : ${action.type}`)
}

export default reducer;