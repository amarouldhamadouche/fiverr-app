import React from 'react'
import { FaBars , FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import '../components/nav.css'
import { Link } from 'react-router-dom';
import logo from "../Files/logo.png"



function Nav() {
    const [click, setClick] = useState(false);
    const handleClick = () => {setClick(!click)}







  return (
    <div  className='  container mx-auto' >
        <nav className='flex bg-fixed justify-between items-center md:px-0.5 md:py2  p-8' >
            <img className=' cursor-pointer w-2/4 lg:w-32 ' to='/'  src={logo} alt="" />
            <ul className=' z-40   xl:block '>
                <li className= {click? '  Active text-2xl   ease-in-out duration-30 flex flex-col space-y-8 ': 'hidden xl:flex xl:gap-6'}>
                    <Link to='/' className=' hover:text-perprl  cursor-pointer uppercase font-medium '>Home</Link>
                    <Link to='/instructor' className=' hover:text-perprl cursor-pointer uppercase font-medium'>Instructors</Link>
                    <Link to='/school' className=' hover:text-perprl cursor-pointer uppercase font-medium'>Driving Schools</Link>
                    <Link to='/pupil' className='hover:text-perprl cursor-pointer uppercase font-medium'>Pupil App</Link>
                    <Link to='/booking' className='hover:text-perprl cursor-pointer uppercase font-medium'>Booking Software</Link>
                    <Link to='/pricing' className='hover:text-perprl cursor-pointer uppercase font-medium'>Pricing</Link>
                </li>
            </ul>
            <Link to='/login' className='hidden xl:block hover:opacity-90 bg-perprl rounded-3xl px-8 text-white font-bold uppercase py-2 text-center'>Login</Link>
            <div className=' xl:hidden cursor-pointer z-50 h-full ' onClick={handleClick}>

            {click ? <FaTimes className='  text-white' size={30}  /> : <FaBars className='  text-perprl' size={30}  /> }
                
            </div>
        </nav>
    </div>
)
}

export default Nav