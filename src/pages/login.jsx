import React, { useState } from 'react'
import { loginApi } from '../api/api';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import '../css/loginstyle.css';

 
 
 
const Login= () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const[emailError,setEmailError]=useState("")
    const[passwordError,setPasswordError]=useState("")
 
 
    const changeEmail = (e) => {
      // e is event that is typed by the user
      setEmail(e.target.value);
    };
 
    const changePassword = (e) => {
      // e is event that is typed by the user
      setPassword(e.target.value);
    };
 
    const validate=()=>{
        let validator=false;
        if(email.trim===""){
            setEmailError("Email cannot be Empty")
            validator=true;
        }if(passwordError.trim===""){
            setPasswordError("Password cannot be empty")
            validator=true
        }
        return validator
 
    }
    const navigate = useNavigate();
    const handleSignup = ()=>{
      navigate("/register")
    }
 
    const handleSubmit = (e) => {
        e.preventDefault(); // prevents browser to reload
        console.log(email, password);
   
        // making json data object
        const data = {
          email: email, // agaadi ko backend ko ho paxadi ko maathi ko use state ko
          password: password,
        };
 
     loginApi(data).then((res)=>{
        if(res.data.success==false){
            toast.error(res.data.message)
        }
        else{
            toast.success(res.data.message)
            localStorage.setItem('token',res.data.token)

         // set user data
             const jsonDecode = JSON.stringify(res.data.userData)
             localStorage.setItem('user',jsonDecode)
             navigate('/homepage')
 
        }
     })
    }
    return(
        <>
        <div id="bg"></div>

<form>
  <div class="form-field">
    <input type="text" placeholder="Email / Username" onChange={changeEmail} required/>
  </div>
  
  <div class="form-field">
    <input type="password" placeholder="Password" onChange={changePassword} required/>                         </div>
  
  <div class="form-field">
    <button class="btn" onClick={handleSubmit} type="submit">Log in</button>
  </div>
  <div class="form-field">
    <button class="btn" onClick={handleSignup} >sign un</button>
  </div>

</form>
        </>
       
 
       
 
    );
       
   
}
export default Login;
