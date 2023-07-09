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
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
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
