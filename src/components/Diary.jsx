import React from 'react'
import { Link } from 'react-router-dom'
import img from '../Files/instructors.png'

function Diary() {
  return (
    <div>
        <div className=' mb-28 container px-9 mx-auto mt-28 grid grid-cols-1  '>
            <div className=' flex items-center justify-center flex-col'>
                <h1 className=' text-3xl font-bold mb-3 border-b-perprl border-b-4'>The Driving Instructor App</h1>
                <p className=' max-w-2xl text-center text-xl mb-6'>With a feature-rich platform for driving instructors, Total Drive is the most customisable instructor software on the market.  You can change the app to fit your business!</p>
            </div>
            <div className=' mx-auto items-cente  justify-center gap-6 lg:gap-36 mt-12 flex flex-col lg:flex-row '>
                <div className='txtSide '>
                    <div className=' max-w-xl'>
                    <h1 className='font-bold text-xl mb-2 '>The Diary</h1>
                    <p className=' font-semibold mb-5'>Customisable Instructor Diary App
                    Select a 1, 3, 5 or 7-day diary view, Total Drive can be used across multiple devices simultaneously, on tablets and mobile phones.</p>
                    </div>



                    <ul className=' flex flex-col gap-2 mb-5 '>
                        <li className='list-disc'><p className=''>Add single lessons, intensive courses and weekly repeats</p></li>
                        <li className='list-disc'><p>Choose your diary colours to suit the way you work</p></li>
                        <li className='list-disc'><p>Diary grid-click to input lessons quickly and easily</p></li>
                        <li className='list-disc'><p>Free lesson reminders sent 24/48 hours beforehand</p></li>
                        <li className='list-disc'><p>Diary works fully offline</p></li>
                        <li className='list-disc'><p>Connected SatNav to your next pupil pick-up</p></li>
                        <li className='list-disc'><p>Sync with Google & Apple Calendar</p></li>
                    </ul>
                    <Link to='/register' className='bg-perprl rounded-full py-2 px-3 text-white mr-5 font-bold '>Try now - Free</Link>
                </div>
                <div className='PicSide'>
                    <img className=' max-w-xs mx-auto lg:max-w-sm'  src={img} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Diary