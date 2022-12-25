import React from 'react'

function PricingCards() {
  return (
    <div className='container mx-auto flex items-center justify-center  flex-col'>
    <h1 className='mt-24 font-bold text-6xl'>Pricing</h1>    
    <div className=' container mx-auto flex flex-col md:flex-row items-center justify-center gap-20 mt-8 mb-40'>
    
<div className="rounded-lg w-72 p-4 bg-white shadow-lg dark:bg-gray-800 max-w-xs">
    <p className="text-2xl leading-normal text-center font-bold text-black  pt-4">
        Free
    </p>
    <p className="text-4xl font-inter leading-normal text-center font-bold text-black  pb-4">
        <span className="font-inter text-base leading-loose text-center font-medium text-Darkblue uppercase">
            $
        </span>
        0
        <span className="text-sm font-inter leading-tight text-center font-bold text-black  opacity-50">
            /month
        </span>
    </p>
    <ul>
        <li className="text-xs font-inter leading-normal text-center font-medium text-black  py-4 border-t border-gray-300">
        Completely Free to Use
        </li>
        <li className="text-xs font-inter leading-normal text-center font-medium text-black  py-4 border-t border-gray-300">
        1-to-1 Diary Advice
        </li>
        <li className="text-xs font-inter leading-normal text-center font-medium text-black  py-4 border-t border-gray-300">
        Use All App Features
        </li>
        <li className="text-xs font-inter leading-normal text-center font-medium text-black  py-4 border-t border-gray-300">
        PDI Training Record
        </li>
        <li className="text-xs font-inter leading-normal text-center font-medium text-black  py-4 border-t border-gray-300">
        £10 Off Go Green Training
        </li>
        
    </ul>
    <div className="py-4 text-center">
        <button type="button" className="py-2 px-4  bg-perprl hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200  w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            Try it free
        </button>
    </div>
</div>


<div className="rounded-lg w-72 p-4 bg-white shadow-lg dark:bg-gray-800 max-w-xs">
    <p className="text-2xl leading-normal text-center font-bold text-black  pt-4">
    Standard
    </p>
    <p className="text-4xl font-inter leading-normal text-center font-bold text-black  pb-4">
        <span className="font-inter text-base leading-loose text-center font-medium text-black   uppercase">
            $
        </span>
        10
        <span className="text-sm font-inter leading-tight text-center font-bold text-black  opacity-50">
           /month
        </span>
    </p>
    <ul>
        <li className="text-xs font-inter leading-normal text-center font-medium text-black  py-4 border-t border-gray-300">
        Diary: Faster than paper
        </li>
        <li className="text-xs font-inter leading-normal text-center font-medium text-black  py-4 border-t border-gray-300">
        Pupil Records
        </li>
        <li className="text-xs font-inter leading-normal text-center font-medium text-black  py-4 border-t border-gray-300">
        Free Lesson Reminders
        </li>
        <li className="text-xs font-inter leading-normal text-center font-medium text-black  py-4 border-t border-gray-300">
        Branded Pupil App
        </li>
        <li className="text-xs font-inter leading-normal text-center font-medium text-black  py-4 border-t border-gray-300">
        Finances & Payments
        </li>
    </ul>
    <div className="py-4 text-center">
        <button type="button" className="py-2 px-4  bg-perprl hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200  w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            Try it free
        </button>
    </div>
</div>


<div className="rounded-lg w-72 p-4 bg-white shadow-lg dark:bg-gray-800 max-w-xs">
    <p className="text-2xl leading-normal text-center font-bold text-black  pt-4">
    Premium
    </p>
    <p className="text-4xl font-inter leading-normal text-center font-bold text-black  pb-4">
        <span className="font-inter text-base leading-loose text-center font-medium text-black   uppercase">
            $
        </span>
        19
        <span className="text-sm font-inter leading-tight text-center font-bold text-black  opacity-50">
            /month
        </span>
    </p>
    <ul>
        <li className="text-xs font-inter leading-normal text-center font-medium text-black  py-4 border-t border-gray-300">
        + Standard Plan Features
        </li>
        <li className="text-xs font-inter leading-normal text-center font-medium text-black  py-4 border-t border-gray-300">
        Online Booking Software
        </li>
        <li className="text-xs font-inter leading-normal text-center font-medium text-black  py-4 border-t border-gray-300">
        Free Lesson Reminders
        </li>
        <li className="text-xs font-inter leading-normal text-center font-medium text-black  py-4 border-t border-gray-300">
        Branded Pupil App
        </li>
        <li className="text-xs font-inter leading-normal text-center font-medium text-black  py-4 border-t border-gray-300">
        Finances & Payments
        </li>
    </ul>
    <div className="py-4 text-center">
        <button type="button" className="py-2 px-4  bg-perprl hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200  w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            Try it free
        </button>
    </div>
</div>
</div>
    </div>
  )
}

export default PricingCards