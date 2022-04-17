import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { image, name, price, duration, description } = service;
    const navigate = useNavigate();
    const handleBook = () => {
        navigate('/checkout')
    }
    return (
        <div className='border-solid border-2 rounded-lg text-center shadow-lg'>
            <img src={image} alt="" />
            <div className='p-3'>
                <p className='text-xl font-semibold'>{name}</p>
                <p className='text-gray-500'><small>{description}</small></p>
                <p>Duration: {duration}</p>
                <button onClick={handleBook} className='border-solid border-2 rounded-lg text-white bg-blue-500 p-2 mt-2'>Book Now : $ {price}</button>
            </div>
        </div>
    );
};

export default Service;