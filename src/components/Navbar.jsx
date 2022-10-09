import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {

  const navigate = useNavigate()
  return (
    <div style={{height:'80px',display: 'flex',alignItems: 'center',backgroundColor:'#4b4646',color:'#fff'}}>
      <nav>
        <div>
          <Link style={{color:'#fff',textDecoration:'none',fontSize:'2rem',marginLeft:'2rem'}} to='/'>
            Home
          </Link>
          <Link to='/user' style={{color:'#fff',textDecoration:'none',fontSize:'2rem',marginLeft:'2rem'}}>
            Users
          </Link> 
           <Link to='/create' style={{color:'#fff',textDecoration:'none',fontSize:'2rem',marginLeft:'2rem'}}>
            Create
          </Link>

        </div>
      </nav>
    </div>
  )
}

export default Navbar
