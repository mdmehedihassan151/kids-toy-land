import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import { auth } from '../../firebase/firebase.config';

const Login = () => {

  const handleLogin = (e) =>{
       e.preventDefault();
       console.log(e.target);
       const form = e.target;
       const email= form.email.value;
       const password= form.password.value;
       console.log(email, password);

       if (password.length<6) {
        toast.error('password should be 6 character')
        return;
       } ;
  
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

          <label className="label">Password</label>
         <input name='password' type="password" className="input" placeholder="Password" required/>
          
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