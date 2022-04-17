import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-slate-700 text-gray-100 text-center p-8'>
            <p><small>Copyright &copy; {year}</small></p>
        </div>
    );
};

export default Footer;