import React from 'react'
import { Link } from 'react-router-dom'
import img from '../Files/instructors.png'

function BookingSec() {
  return (
    <div>
 <div>
         <div className=' mb-28 container px-9 w-auto mx-auto mt-28 grid grid-cols-1  '>
            <div className=' flex items-center justify-center flex-col'>
                <h1 className=' text-3xl text-center md:text-start font-bold mb-3 md:border-b-perprl md:border-b-4'>Online Booking Software</h1>
                <p className=' max-w-2xl text-center text-xl mb-6'>First and foremost, the driving lesson online booking software is an optional tool you need to turn on. It provides the ability for an existing pupil to book a time slot directly into your diary and for your diary to remain hidden. You can also allow new pupils to book into your diary too.</p>
            </div>
            <div className=' mx-auto items-cente  justify-center gap-6 lg:gap-36 mt-12 flex flex-col lg:flex-row '>
                <div className='txtSide '>
                    <div className=' max-w-xl'>
                    <h1 className='font-bold text-xl mb-2 '>How Online Booking Works</h1>
                    <p className=' font-semibold mb-5'>This smart technology enables an existing pupil to enter their name, pick a date, choose a time, and have the option to prepay for the lesson.</p>
                    </div>



                    <ul className=' flex flex-col gap-2 mb-5 '>
                        <li className=''><p>After paying, the instructor and pupil receives a text message confirmation and the newly booked lesson automatically appears in your diary, on your pupils’ lesson card and on your pupils app.</p></li>
                        <li className=''><p>Setting up online booking is super simple. Just enter your working hours, lesson duration and the travel time. The smart technology does the rest!</p></li>
                        <li className=''><p>The online booking software comes with a professional one-page website branded as your driving school, including your school name and logo. Mobile responsive, users can book via a desktop, tablet or mobile.</p></li>
                    </ul>
                    <Link to='/register' className='bg-perprl rounded-full py-2 px-3 text-white mr-5 font-bold '>Try now - Free</Link>
                </div>
                <div className='PicSide'>
                    <img className=' max-w-xs mx-auto lg:max-w-lg'  src={img} alt="" />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default BookingSec