import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router';
import { auth } from '../../firebase/firebase.config';
import { toast } from 'react-toastify';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
const Register = () => {

  const [showPassword, setShowPassword] = useState(false)
  const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    const handleRegister = (e) =>{
     e.preventDefault();
     console.log(e.target);
     const form = e.target;
     const name= form.name.value;
     const photo= form.photo.value;
     const email= form.email.value;
     const password= form.password.value;
     console.log(name, photo, email, password);

    //  if (password.length<6) {
    //   toast.error('password should be 6 character')
    //   return;
    //  } ;

     
       
    if (!regExp.test(password)) {
  toast.error("Password must contain min 8 characters, including uppercase, lowercase, number and special symbol (!@#$%^&*).");
  return;
}


     createUserWithEmailAndPassword(auth, email,password)
     .then((res) =>{
      console.log(res)
      toast.success(" signup successfully")
     })
     .catch ((e) =>{
      console.log(e)
      toast.error("Already Have An Account ? Login");
     })
    
    };
    return (
        <div className='flex justify-center min-h-screen items-center '>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4">
                    <h2 className='text-2xl font-semibold text-center'>Register your account</h2>    
              <form onSubmit={handleRegister} className="card-body">
                <fieldset className="fieldset">
                    {/* name  */}
                  <label className="label">Name</label>
                  <input name='name' type="text" className="input" placeholder="name" required />
                  {/* photo  */}
                  <label className="label">Photo Url</label>
                  <input name='photo' type="text" className="input" placeholder="Photo Url" required/>
                  {/* email  */}
                  <label className="label">Email</label>
                  <input name='email' type="email" className="input" placeholder="Email" required/>
                   {/* password  */}
                  <div className='relative'>
                  <label className="label">Password</label>
                  <input name='password' type={showPassword?"text":"password"} className="input" placeholder="Password" required/>
                 
                  <span onClick={() => setShowPassword(!showPassword)} className=" absolute bottom-3 right-2">
                    {showPassword?<IoMdEye></IoMdEye>: <IoMdEyeOff></IoMdEyeOff>}
                  </span>
                  </div>
                  
                  <button type='submit' className="btn btn-neutral mt-4">Register</button>
                  <p className='font-semibold text-center pt-4'>Already Have An Account ? <Link to={'/auth/login'} className='text-secondary'>Login</Link> </p>
                </fieldset>
              </form>
            </div>
                </div>
    );
};

export default Register;