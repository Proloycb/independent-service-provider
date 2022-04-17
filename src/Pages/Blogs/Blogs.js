import React from 'react';

const Blogs = () => {
    return (
        <div className='w-1/2 mx-auto mt-5 mb-10'>
            <h1 className='text-4xl text-center mb-5'> Blogs</h1>
            <div className='mb-5'>
                <h3 className='text-xl mb-2'>1. Difference between authentication and authorization?</h3>
                <p className='pl-5'><span className='font-bold'>Authentication:</span> Authentication verifies who the user is. It is the first step of a good identity and access management process. It is visible to and partially changeable by the user.</p>
                <p className='pl-5'><span className='font-bold'>Authorization:</span>Authrization determines what resourses a user can access. It is always takes place after authentication complete. It isn't visible to or changeable by the user. </p>
            </div>
            <div className='mb-5'>
                <h3 className='text-xl mb-2'>2. Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p className='pl-5'>Answer: Firebase use for authentication, hoisting , apps to develop .Other options are authentication Auth0, Axios, JWT etc.</p>
            </div>
            <div className='mb-5'>
                <h3 className='text-xl mb-2'>3. What other services does firebase provide?</h3>
                <p className='pl-5'>Answer: Firebase other services provides are Realtime database, remote config, firebase ml, cloud functions, hoisting, cloud storage, cloud messaging etc.</p>
            </div>
        </div>
    );
};

export default Blogs;