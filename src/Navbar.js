import React from 'react'
import './Navbar.css'
import logo from './Fashion-Logo-5.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
        <nav className='main-div'>
            <div className='logo-div'>
                <img src={logo} alt="" />
            </div>
            <div className='sign-log-btn-div'>
                <div className='signup-btn'>
                    <Link to='/signup'><button>Sign Up</button></Link>
                    {/* <button>Sign Up</button> */}
                </div>
                <div className='login-btn'>
                    <Link to='/login'><button>Log In</button></Link>
                </div>
            </div>
        </nav>
  )
}

export default Navbar