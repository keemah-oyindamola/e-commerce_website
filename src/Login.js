import React, { useState } from 'react'
import "./Login.css"
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import applee from "./applelogo.png"
import googlee from "./googlelogo.png"
import facebookk from "./images.png"
const Login = () => {
    const [loadingg, setloadingg] = useState(false)
    const navigate = useNavigate()
    const endpoint = ("https://e-commerce-website-backend-rcrp.onrender.com")

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: async (value) => {
            try {
                setloadingg(true)
                const res = await axios.post(`${endpoint}/user/login`, value)
                console.log(res.data);
                console.log(res.data.userid);
                const userid = res.data.userid
                toast.success("Login successful")
                setTimeout(() => {
                    navigate(`/dashboard/${userid}`);
                }, 3000);
            } catch (error) {
                console.log(error);
                if (error.response && error.response.data && error.response.data.message) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error("An error occurred during login");
                }
                setloading(false)
            }
        }
    })
    return (
        <div className="whole-section">
            <form onSubmit={formik.handleSubmit} action="">
                <div className="my-phone">
                    <div className='my-screen'>
                        <div class="my-logincontent">
                            <h3>Log In</h3>
                            <p>Hi! Welcome </p>
                            <div className="login-input">
                                <span>Email</span><br />
                                <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" name="email" id="" placeholder='Enter Your Email' />
                            </div>
                            <div className="inputt">
                                <span>Password</span><br />
                                <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" name="password" id="" placeholder='Enter Your Password' />
                            </div>
                            <div className="mylogin-btn">
                                <button type='submit'>{loadingg ? "......." : "Login"}</button>
                                <ToastContainer />
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
            </form>
        </div>
    )
}

export default Login