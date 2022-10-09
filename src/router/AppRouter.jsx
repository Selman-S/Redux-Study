import React from 'react'
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Cart from '../pages/Cart';
import Create from '../pages/Create';
import Home from '../pages/Home';

const AppRouter = () => {
  return (
    <BrowserRouter>
     <Navbar />
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/cart" element={<Cart />} />
 <Route path="/create" element={<Create />} />
 </Routes>
</BrowserRouter>
  )
}

export default AppRouter