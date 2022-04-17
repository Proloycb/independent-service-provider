import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    let errorElement;

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

      if(loading){
          return <Loading/>;
      }

      if (error) {
        errorElement = <p className='text-red-700'>Error: {error?.message}</p>
    }

      if(user){
          console.log(user);
      }

      const handleSubmit = event => {
          event.preventDefault();
          const name = nameRef.current.value;
          const email = emailRef.current.value;
          const password = passwordRef.current.value;
          createUserWithEmailAndPassword(email, password);
          navigate('/home');
      }
    return (
        <div className='flex justify-center mt-5'>
            <div className='w-full max-w-sm '>
                <h1 className='text-center text-4xl text-indigo-700 font-semibold mb-5'>Please Register</h1>
                <form onSubmit={handleSubmit} className='shadow-md bg-gray-100 rounded px-8 pt-6 pb-8 mb-4'>
                    <input ref={nameRef} className='w-full shadow appearance-none border rounded py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline mb-4' type="text" name="name" id="" placeholder='Your Name' />
                    <input ref={emailRef} className='w-full shadow appearance-none border rounded py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline mb-4' type="email" name="email" id="" placeholder='Your Email' required />
                    <input ref={passwordRef} className='w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline mb-4' type="password" name="password" id="" placeholder='Password' required />
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 block w-3/4 mx-auto rounded mb-3'>Register</button>
                    <p>{errorElement}</p>
                    <p className='text-slate-700'>Already Have an account?<Link to='/login' className='text-blue-500 decoration-none'>Please Login</Link></p>
                </form>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Register;