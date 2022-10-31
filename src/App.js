import React from 'react'
//adding all commponents here
import Nav from './Components/nav'
import Footer from './Components/Footer'
import Signup from './Components/Signup'
import PrivateComponent from './Components/privateComponent'
import Login from './Components/Login'
import AddProduct from './Components/AddProduct'
import ShowProducts from './Components/ShowProducts'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import UpdateProduct from './Components/UpdateProduct'
const App = () => {
  return (

    <div className='App'>
     <BrowserRouter>
     <Nav/>
     <Routes>

     <Route element = {<PrivateComponent/>}>
     <Route path='/' element={<ShowProducts/>}></Route>
      <Route path='/add' element={<AddProduct/>}></Route>
      <Route path='/update/:id' element={<UpdateProduct/>}></Route>
      <Route path='/profile' element={<h1>Profile Component</h1>}></Route>
      <Route path='/logout' element={<h1>Logout Component</h1>}></Route>
     </Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element = {<Login/>}></Route>
     </Routes>
     
     </BrowserRouter>
     <Footer/>
    </div>
  )
}

export default App