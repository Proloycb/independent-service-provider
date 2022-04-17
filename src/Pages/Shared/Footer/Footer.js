import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-black text-gray-100 text-center p-8 fixed bottom-0 left-0 right-0'>
            <p><small>Copyright &copy; {year}</small></p>
        </div>
    );
};

export default Footer;