import React, { useState } from 'react'
import {  toast , ToastContainer } from 'react-toastify';
// import { CreateApi } from '../api/api';
import '../css/style.css';
import Login from './login';
import { createUserApi } from '../api/api';
import { useNavigate } from 'react-router';


const Register=()=>{
const[fullname,setFullname]=useState('');
const[number,setNumber]=useState('');
const[email,SetEmail]=useState('');
const[password,SetPassword]=useState('');
const[confirmpassword,setconfirmpassword]=useState('')
const navigate = useNavigate()

const changeFirstName=(e)=>{
  setFullname(e.target.value)
}

const changeEmail=(e)=>{
  SetEmail(e.target.value)
}

const changePhonenumber=(e)=>{
  setNumber(e.target.value)
}

const changePassword=(e)=>{
    SetPassword(e.target.value)
}

const changeconpassword=(e)=>{
  setconfirmpassword(e.target.value)
}
 const handelSubmit=(e)=>{
  e.preventDefault()
  const data={
    fullname:fullname,
    email:email,
    number:number,
    password:password
  }
  if (password !== confirmpassword) {
    toast.error("Passwords don't match");
    return;
  }
  createUserApi(data).then((res) => {
    if(res.data.success == false){
      toast.error(res.data.message)
    } else{
      toast.success(res.data.message)
      navigate('/login')
    }
  }).catch((err) => {
    toast.error("Server Error")
    console.log(err.message)
  })


 }


    return(
      <>
      <div id="bg"></div>
<div class="wrapper">
  <h2>Registration</h2>
  <form action="">
    <div class="input-box">
      <input type="text" placeholder="Enter your name" onChange={changeFirstName} required/>
    </div>
    <div class="input-box">
      <input type="text" placeholder="Enter your email" onChange={changeEmail} required/>
    </div>
    <div class="input-box">
      <input type="text" placeholder="Enter Phone number" onChange={changePhonenumber} required/>
    </div>
    <div class="input-box">
      <input type="password" placeholder="Create password" onChange={changePassword} required/>
    </div>
    <div class="input-box">
      <input type="password" placeholder="Confirm password" onChange={changeconpassword} required />
    </div>
    <div class="policy">
      <input type="checkbox"/>
      <h3>I accept all terms & condition</h3>
    </div>
    <div class="input-box button">
      <input type="Submit" onClick={handelSubmit} value="Register Now"/>
    </div>
    <div class="text">
      <h3>Already have an account? <a href="/login">Login now</a></h3>
    </div>
  </form>

</div>



      </>

    );

}

export default Register;