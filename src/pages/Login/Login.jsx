import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import { auth } from '../../firebase/firebase.config';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io"; 

const Login = () => {
   const [showPassword, setShowPassword] = useState(false)
    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  const handleLogin = (e) =>{
       e.preventDefault();
       console.log(e.target);
       const form = e.target;
       const email= form.email.value;
       const password= form.password.value;
       console.log(email, password);

        if (!regExp.test(password)) {
         toast.error("Password must contain min 8 characters, including uppercase, lowercase, number and special symbol (!@#$%^&*).");
         return;
       }
  
       signInWithEmailAndPassword(auth, email, password)
       .then((res) =>{
        console.log(res)
       })
       .catch ((e) =>{
        console.log('error',e)
       })
      
      };
    return (
        <div className='flex justify-center min-h-screen items-center '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4">
            <h2 className='text-2xl font-semibold text-center'>Login your account</h2>    
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required/>

          <div className='relative'>
            <label className="label">Password</label>
         <input name='password' type={showPassword?"text":"password"} className="input" placeholder="Password" required/>
         <span onClick={() => setShowPassword(!showPassword)} className=" absolute bottom-3 right-2">
        {showPassword?<IoMdEye></IoMdEye>: <IoMdEyeOff></IoMdEyeOff>}
         </span>
          </div>
        
          
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p className='font-semibold text-center pt-4'>Don't Have An Account ? <Link to={'/auth/register'} className='text-secondary'>Register</Link> </p>
        </fieldset>
      </form>
    </div>
        </div>
    );
};

export default Login;