import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Footer = () => {
  const navigate = useNavigate()
  return (
    <div
      style={{
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#4b4646',
        color: '#fff',
        margin: '0',
      }}
    >
      <nav  style={{
            display: 'flex',
          
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
        <div
          style={{
            display: 'flex',
          
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <h1
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '2rem',
              margin: '0',
            }}
          >
            User APP
          </h1>
          <div>
            <p class="copyright-text">
              Copyright &copy; 2022 All Rights Reserved by
              <a href="https://github.com/Selman-S" target="_blank">Selman</a>.
            </p>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Footer
