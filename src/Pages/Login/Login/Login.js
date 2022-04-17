import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading />;
    }

    if (error) {
        errorElement = <p className='text-red-700'>Error: {error?.message}</p>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const handleReset = async () => {
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast('Sent Email');
        }
        else{
            toast('Please enter your email address');
        }
    }
    return (
        <div className='flex justify-center mt-5'>
            <div className='w-full max-w-sm '>
                <h1 className='text-center text-4xl text-indigo-700 font-semibold mb-5'>Please Login</h1>
                <form onSubmit={handleSubmit} className='shadow-md bg-gray-100 rounded px-8 pt-6 pb-8 mb-4'>
                    <input ref={emailRef} className='w-full shadow appearance-none border rounded py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline mb-4' type="email" name="email" id="" placeholder='Your Email' required />
                    <input ref={passwordRef} className='w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline mb-4' type="password" name="password" id="" placeholder='Password' required />
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 block w-3/4 mx-auto rounded mb-3'>Login</button>
                    <p>{errorElement}</p>
                    <p className='text-slate-700'>New to Leo Stone?<Link to='/register' className='text-blue-500 decoration-none'>Please Register</Link></p>
                    <p className='text-slate-700'>Forget Password?<span onClick={handleReset} className='text-blue-500 decoration-none cursor-pointer'>Reset Password</span></p>
                </form>
                <SocialLogin />
                <ToastContainer/>
            </div>

        </div>
    );
};

export default Login;