import React from 'react' 
import { Link } from 'react-router-dom'
import img from '../Files/instructors.png'

function PupilSec() {
  return (
    <div>
         <div className=' mb-28 container px-9 w-auto mx-auto mt-28 grid grid-cols-1  '>
            <div className=' flex items-center justify-center flex-col'>
                <h1 className=' text-3xl text-center md:text-start font-bold mb-3 md:border-b-perprl md:border-b-4'>The Pupil App</h1>
                <p className=' max-w-2xl text-center text-xl mb-6'>Utilising the pupil app will help the new driver with the process of learning to drive. The app reduces cancellations, highlights their driving progress and keeps them up to date with payments.</p>
            </div>
            <div className=' mx-auto items-cente  justify-center gap-6 lg:gap-36 mt-12 flex flex-col lg:flex-row '>
                <div className='txtSide '>
                    <div className=' max-w-xl'>
                    <h1 className='font-bold text-xl mb-2 '>The Pupil App</h1>
                    <p className=' font-semibold mb-5'>Quickly and easily access all the information needed to learn to drive.</p>
                    </div>



                    <ul className=' flex flex-col gap-2 mb-5 '>
                        <li className='list-disc'><p className=''>Lessons delivered and booked with credit hours</p></li>
                        <li className='list-disc'><p>Driving syllabus progress</p></li>
                        <li className='list-disc'><p>Payment history with in-app pay buttons (optional)</p></li>
                        <li className='list-disc'><p>Message chat centre</p></li>
                        <li className='list-disc'><p>Lesson gap booking (optional)</p></li>
                        <li className='list-disc'><p>Theory and practical test dates</p></li>
                        <li className='list-disc'><p>Resources area consisting of the instructors links</p></li>
                        <li className='list-disc'><p>Lesson reminders 24/48 hours beforehand</p></li>
                        <li className='list-disc'><p>Branded app with your logo and colours</p></li>
                        <li className='list-disc'><p>GDPR compliant</p></li>
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

export default PupilSec