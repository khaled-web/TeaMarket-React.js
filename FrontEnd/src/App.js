//..........
//importing
//..........

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {
  Home,
  Landing, 
  Register, 
  Error, 
  ProtectedRoute, 
  About,
  Skills,
  Product,
  Cart,
  Checkout} from './pages'




//..........
//App
//..........
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/' element={
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>
        }/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={
        <ProtectedRoute>
          <Product/>
        </ProtectedRoute>
        }/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes> 
    </BrowserRouter>
  );
}


//..........
//exporting
//..........
export default App;
