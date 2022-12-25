import React from 'react'
import { Link } from 'react-router-dom'
import pic1 from '../Files/a.png'
import './Instrecters.css'

function Instructors() {
  return (
    <div>
    <div className=' container mb-10 mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-40 '>
        <div className='img'>
            <img src={pic1} alt="" />
        </div>
        <div className='txt items-center text-center lg:text-start lg:gap-6 justify-center flex flex-col'>
            <div className=' flex flex-col justify-start items-start gap-4 max-w-sm'>
                <h1 className=' font-bold mx-auto lg:mx-0 text-center lg:text-start text-Darkblue text-5xl'>Instructors.</h1>
                <p>Total Drive is a dedicated app for driving instructors and their pupils. Manage lessons through the diary, recording each pupils progress, payments, reflective logs and driving details.</p>
                <Link to='/login' className=' mx-auto text-white lg:mx-0 bg-perprl text-center lg:text-start py-2 px-3 rounded-full my-3 font-semibold'>Start managing</Link>
            </div>
            <div className='t justify-center items-center flex flex-col lg:justify-end text-end lg:items-end  gap-4 max-w-md'>
                <div className='  border-r-Darkblue lg:border-r-4 flex flex-col justify-end text-end items-end'>
            <h1 className='lg:mr-3 text-center  font-bold text-Darkblue lg:text-end text-5xl mx-auto lg:mx-0 '>Multi-Car Schools.</h1>
                <p className='mr-3 '>Easily add extra instructors and allocate new students to them. Track the performance of instructors on pass rates, cancellations and every students driving progress.</p>
                </div>
                <Link to='/login' className='  text-white bg-perprl py-2 px-3 rounded-full my-3 font-semibold'>Setup School</Link>
            </div>

        </div>
    </div>


    </div>
  )
}

export default Instructors