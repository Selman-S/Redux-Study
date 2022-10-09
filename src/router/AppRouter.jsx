import React from 'react'
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Cart from '../pages/User';
import Create from '../pages/Create';
import Home from '../pages/Home';

const AppRouter = () => {
  return (
    <BrowserRouter>
     <Navbar />
     <div style={{minHeight:'calc(100vh - 192px)',margin:'0'}}>

 <Routes >
 <Route path="/" element={<Home />} />
 <Route path="/user" element={<Cart />} />
 <Route path="/create" element={<Create />} />
 </Routes>
     </div>
 <Footer/>
</BrowserRouter>
  )
}

export default AppRouter