import React from 'react';
import notfound from '../../../images/notfound.jpg';

const NotFound = () => {
    return (
        <div className='mx-auto w-1/2'>
            <h1 className='text-6xl text-center text-orange-500 mt-2 mb-3'>Page not found</h1>
            <img src={notfound} alt="" />
        </div>
    );
};

export default NotFound;