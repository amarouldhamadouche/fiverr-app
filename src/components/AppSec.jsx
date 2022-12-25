import React from 'react'
import iphone from '../Files/phones.png'
import {AiOutlineDoubleRight} from 'react-icons/ai'
import './appSec.css'
import { Link } from 'react-router-dom'

function AppSec() {
  return (
    <div className='  px-5 lg:px-0  AppSec w-full h-auto bg-perprl flex-col lg:flex-row  flex items-center justify-center gap-12 lg:gap-64 pb-7'>
        <div>
            <img className=' PhoneImg' src={iphone} alt="" />
        </div>
        <div className='TextSide flex flex-col items-start justify-start gap-8 '>
            <div className=' flex flex-col items-start justify-start gap-2'>
            <h1 className=' text-white text-5xl font-bold'>Only £10 per month</h1>
            <p className='text-white text-lg font-bold'>Trusted by 3000+ instructors & over 90,000 pupils</p>
            </div>
            <ul className=' flex flex-col items-start justify-start gap-3 text-white'>
                <li className='flex gap-4 justify-center items-center'>
                    <AiOutlineDoubleRight className=' text-xl font-bold'/><p className=' font-semibold'>Online, Apple app & Android app</p>
                </li>
                <li className='flex gap-4 justify-center items-center'>
                    <AiOutlineDoubleRight className=' text-xl font-bold'/><p className=' font-semibold'>Discounts for multiple instructors</p>
                </li>
                <li className='flex gap-4 justify-center items-center'>
                    <AiOutlineDoubleRight className=' text-xl font-bold'/><p className=' font-semibold'>No contract & Full Access</p>
                </li>
                <li className='flex gap-4 justify-center items-center'>
                    <AiOutlineDoubleRight className=' text-xl font-bold'/><p className=' font-semibold'>100% Tax-Deductible</p>
                </li>
                <li className='flex gap-4 justify-center items-center'>
                    <AiOutlineDoubleRight className=' text-xl font-bold'/><p className=' font-semibold'>No payment details needed for trial</p>
                </li>
                <li className='flex gap-4 justify-center items-center'>
                    <AiOutlineDoubleRight className=' text-xl font-bold'/><p className=' font-semibold'>Monthly or *Annual Subscriptions available</p>
                </li>
                <li className='flex gap-4 justify-center items-center'>
                    <AiOutlineDoubleRight className=' text-xl font-bold'/><p className=' font-semibold'>Full Instructor Diary</p>
                </li>
                
            </ul>
            <Link to='/register' className=' bg-white rounded-full py-2 px-3 text-perprl  mr-5 font-bold'>Try now - Free</Link>
        </div>

    </div>
  )
}

export default AppSec