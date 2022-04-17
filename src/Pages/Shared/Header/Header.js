import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [open, setOpen] = useState(false);
    const menu = <FontAwesomeIcon icon={faBars}/>
    const close = <FontAwesomeIcon icon={faXmark}/>
    return (
        <div className='shadow-md w-full'>
            <div className='md:flex items-center justify-between bg-gray-100 py-4 md:px-10 px-7'>
                <div className='font-semibold cursor-pointer flex items-center'>
                    <span className='mr-1 pt-2'>
                        <img src={logo} alt="" />
                    </span>
                    <div>
                        <p className='text-2xl text-indigo-600'>Leo Stone</p>
                        <p className='text-xl text-gray-400'>Personal Gym Trainer</p>
                    </div>
                </div>
                <div onClick={()=> setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    {open ? close : menu}
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-5 absolute md:static bg-gray-100 md:z-auto  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
                    <li className='md:ml-8 text-xl md:my-0 my-5'>
                        <Link className='hover:text-orange-500' to='/'>Home</Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-5'>
                        <Link className='hover:text-orange-500' to='/#services'>Services</Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-5'>
                        <Link className='hover:text-orange-500' to='/blogs'>Blogs</Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-5'>
                        <Link className='hover:text-orange-500' to='/about'>About</Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-5'>
                        <Link className='hover:text-orange-500' to='/login'>Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;