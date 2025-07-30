import React from 'react'
import "./Login.css"
import applee from "./applelogo.png"
import googlee from "./googlelogo.png"
import facebookk from "./images.png"
const Login = () => {
  return (
     <div className="whole-section">
                <div className="my-phone">
                    <div className='my-screen'>
                        <div class="my-logincontent">
                            <h3>Log In</h3>
                            <p>Hi! Welcome </p>
                            <div className="login-input">
                                <span>Email</span><br />
                                <input type="email" name="" id="" placeholder='Enter Your Email' />
                            </div>
                            <div className="inputt">
                                <span>Password</span><br />
                                <input type="password" name="" id="" placeholder='Enter Your Password' />
                            </div>
                            <div className="mylogin-btn">
                                <button>Log in</button>
                            </div>

                            <p className='footer'>Forgotten your password?</p>
                            <p className='footer'>Or sign in with</p>
                                <div className="icons">
                                    <img src={applee} alt="" />
                                    <img src={googlee} alt="" />
                                    <img src={facebookk} alt="" />
                                </div>
                            <div className="my-loginnotch"></div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Login