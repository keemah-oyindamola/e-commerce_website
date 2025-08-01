import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import "./Signup.css"
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import axios from 'axios'
import apple from "./applelogo.png"
import google from "./googlelogo.png"
import facebook from "./images.png"

const Signup = () => {
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()

    const endpoint = ("https://e-commerce-website-backend-rcrp.onrender.com")
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        validationSchema: yup.object({
            username: yup.string().min(4, "username is too short").required("usename is required"),
            email: yup.string().email("email is required").required("email is required"),
            password: yup.string().min(5, "password is short").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])/,"Password must contain uppercase, lowercase, number, and special character").required("password is required")
        }),
        onSubmit: (value) => {
            console.log(value);
            setloading(true)
            axios.post(`${endpoint}/user`, value)
                .then((res) => {
                    console.log(res.data);
                    toast.success("Signup successful")
                    setTimeout(() => {
                        navigate("/login")
                    }, 3000);
                })
                .catch((error) => {
                    console.log(error, "meeee");
                    if (error?.response?.data?.message) {
                        toast.error(error?.response?.data?.message)
                    } else {
                        toast.error("An error occurred during signup, check your connectivity")
                    }
                })
                .finally(() => {
                    setloading(false)
                })
        }
    })
    return (
        <>

            <div className="whole-section">
                <form onSubmit={formik.handleSubmit} action="">
                    <div className="my-phone">
                    <div className='my-screen'>
                        <div class="my-content">
                            <h3>Create Account</h3>
                            <p>Fill your information below or register with your social Accoun </p>
                            <div className='input'>
                                <span>Username</span><br />
                                <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name='username'  placeholder='Enter Your Name' />
                                <p>{formik.touched.username && formik.errors.username ? formik.errors.username : ""}</p>
                            </div>
                            <div className="inputt">
                                <span>Email</span><br />
                                <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" name="email"  placeholder='Enter Your Email' />
                                <p>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</p>
                            </div>
                            <div className="inputt">
                                <span>Password</span><br />
                                <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" name="password"  placeholder='Enter Your Password' />
                                <p>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</p>
                            </div>
                            <div className="mysignup-btn">
                                <button type='submit'>{loading ? "............" : "Sign up"}</button>
                                <ToastContainer />
                            </div>
                            <p className='footer'>Or sign in with</p>
                            <div className="icons">
                                <img src={apple} alt="" />
                                <img src={google} alt="" />
                                <img src={facebook} alt="" />
                            </div>
                            <div className="my-notch"></div>
                        </div>
                    </div>
                </div>
                </form>
            </div>

        </>

    )
}

export default Signup