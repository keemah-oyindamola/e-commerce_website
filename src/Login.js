import React, { useState } from 'react'
import "./Login.css"
import { FaSpinner } from "react-icons/fa";
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import * as yup from 'yup'
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
        validationSchema: yup.object({
            email: yup.string().email("Invalid email address").required("Email is required"),
            password: yup.string().min(5, "Password must be at least 5 characters").required("Password is required"),
        }),
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
                setloadingg(false)
            }
        }
    })
    return (
        <div className="whole-section">
            <form onSubmit={formik.handleSubmit} action="">
                <div className="my-phone">
                    <div className='my-screen'>
                        <div className="my-logincontent">
                            <h3>Log In</h3>
                            <p>Hi! Welcome </p>
                            <div className="login-input">
                                <span>Email</span><br />
                                <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" name="email" id="" placeholder='Enter Your Email' />
                                <p>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</p>
                            </div>
                            <div className="inputt">
                                <span>Password</span><br />
                                <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" name="password" id="" placeholder='Enter Your Password' />
                                <p>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</p>
                            </div>
                            <div className="mylogin-btn" disabled={loadingg}>
                                <button type='submit'>{loadingg ? <FaSpinner className="animate-spin" /> : "Login"}</button>
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