import React from 'react'
import { Link } from 'react-router-dom'
import img from '../Files/contactus.png'

function SchoolSec() {
  return (
    <div>
        <div className=' mb-28 container px-9 w-auto mx-auto mt-28 grid grid-cols-1  '>
            <div className=' flex items-center justify-center flex-col'>
                <h1 className=' text-3xl text-center md:text-start font-bold mb-3 md:border-b-perprl md:border-b-4'>Driving School Management Software</h1>
                <p className=' max-w-2xl text-center text-xl mb-6'>Our comprehensive driving school management software allows you to see everything in one place. With statistics and analytics of your pupils progress and your school.</p>
            </div>
            <div className=' mx-auto items-cente  justify-center gap-6 lg:gap-36 mt-12 flex flex-col lg:flex-row '>
                <div className='txtSide '>
                    <div className=' max-w-xl'>
                    <h1 className='font-bold text-xl mb-2 '>Driving School Dashboard</h1>
                    <p className=' font-semibold mb-5'>Our app and online software is perfect for both driving instructors and driving schools. See all of your bookings, pupils, earnings and stats in one place.</p>
                    </div>



                    <ul className=' flex flex-col gap-2 mb-5 '>
                        <li className='list-disc'><p className=''>Weekly analysis of hours delivered & booked</p></li>
                        <li className='list-disc'><p>Next lesson booked percentage</p></li>
                        <li className='list-disc'><p>Pass rate percentage</p></li>
                        <li className='list-disc'><p>No. in the waiting list and active students</p></li>
                        <li className='list-disc'><p>Students owing payments</p></li>
                        <li className='list-disc'><p>Status of your students theory test</p></li>
                        <li className='list-disc'><p>View your driving school or each instructor</p></li>
                    </ul>
                    <Link to='/register' className='bg-perprl rounded-full py-2 px-3 text-white mr-5 font-bold '>Try now - Free</Link>
                </div>
                <div className='PicSide'>
                    <img className=' max-w-xs mx-auto lg:max-w-lg'  src={img} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SchoolSec