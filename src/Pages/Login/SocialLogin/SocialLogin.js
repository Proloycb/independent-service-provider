import React from 'react';
import google from '../../../images/social/Google.png';
import github from '../../../images/social/GitHub.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import {useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle,user,loading,error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

        const navigate = useNavigate();
        let errorElement;
        if(loading || loading1){
            return <Loading/>
        }

        if(error || error1) {
            errorElement = <p className='text-red-500'>Error: {error?.message} {error1?.message}</p>
        }

        if(user || user1) {
            navigate('/home')
        }
    return (
        <div className='mb-2'>
            <div className='flex items-center mb-2'>
                <div style={{ height: '1px' }} className='w-52 bg-gray-400'></div>
                <p className='px-2'>or</p>
                <div style={{ height: '1px' }} className='w-52 bg-gray-400'></div>
            </div>
            <p>{errorElement}</p>
            <div>
                <button onClick={() => signInWithGoogle()} className='bg-blue-700 text-white font-bold py-2 px-12 flex items-center w-75 mx-auto rounded mb-3'>
                    <img src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button onClick={() => signInWithGithub()} className='bg-blue-700 text-white font-bold py-2 px-12 flex items-center w-75 mx-auto rounded mb-3'>
                    <img src={github} alt="" />
                    <span className='px-1'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;