import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        toast('Thank you for your booking')
    }
    return (
        <div className='flex justify-center mt-7 mb-12'>
            <div className='w-full max-w-sm '>
                <h1 className='text-center text-4xl text-indigo-700 font-semibold mb-5'>Checkout Information</h1>
                <form onSubmit={handleSubmit} className='shadow-md bg-gray-100 rounded px-8 pt-6 pb-8 mb-4'>
                    <input className='w-full shadow appearance-none border rounded py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline mb-4' type="text" name="name" id="" placeholder='Your Name' />
                    <input className='w-full shadow appearance-none border rounded py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline mb-4' type="email" name="email" id="" placeholder='Your Email' required />
                    <input className='w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline mb-4' type="text" name="address" id="" placeholder='Address' required />
                    <input className='w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline mb-4' type="text" name="phone-number" id="" placeholder='Phone number' required />
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 block w-3/4 mx-auto rounded mb-3'>Checkout</button>
                </form>
                <ToastContainer/>
            </div>
        </div>
    );
};

export default Checkout;