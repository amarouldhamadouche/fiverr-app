import React from 'react'
import {MdEmail} from 'react-icons/md'
import {BiPhoneCall} from 'react-icons/bi'
import {ImLocation} from 'react-icons/im'
import logo from '../Files/logo.png'
import './footer.css'
import {AiFillInstagram,AiFillFacebook,AiFillTwitterCircle,AiFillYoutube,AiFillBehanceCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className=' bg-Darkperpel px-5  '>
    <footer className=' container  text-white mx-auto grid py-8 grid-cols-1 md:grid-cols-3 '>
      <div className='LogoSec'>
      <img className=' cursor-pointer w-2/4  lg:w-32 ' to='/'  src={logo} alt="" />
        <div className='mt-3'>
          <div className='flex items-center'> <MdEmail className='text-white text-5xl pr-3'/> Jazlyn.Little48@yahoo.com</div>
          <div className='flex items-center'> <BiPhoneCall className='text-white text-5xl pr-3'/> 174-607-6568 x10338</div>
          <div className='flex items-center'> <ImLocation className='text-white text-5xl pr-3'/> Aliciachester Petra Isle 66813</div>
        </div>
      </div>
      <div className=' ml-3 ResourcesSec'>
            <h1 className='font-bold text-4xl lg:text-6xl'>Resources</h1>
            <div className='mt-3 grid grid-cols-1 gap-4'>
              <h5>Knowledge Base </h5>
              <h5>Software Review</h5>
              <h5>EULA Terms of Service</h5>
              <h5>Terms & Conditions</h5>
              <h5>Industry News</h5>
            </div>
      </div>
      <div className='JoinSec'>
      <h1 className='font-bold text-4xl lg:text-6xl'>Join Us!</h1>
      <div className='mt-3'>
      <Link to='/register' className='   bg-perprl rounded-full py-2 px-3 text-white mr-5 mb-4 font-bold'>Try now - Free</Link>
      <Link to='/register' className=' bg-white rounded-full py-2 px-3 border-perprl text-perprl font-bold'>Try now - Free</Link>
      <div className='flex gap-3 mt-8'>
        <AiFillBehanceCircle className='text-white text-5xl cursor-pointer ' />
        <AiFillFacebook className='text-white text-5xl cursor-pointer ' />
        <AiFillInstagram className='text-white text-5xl cursor-pointer ' />
        <AiFillYoutube className='text-white text-5xl cursor-pointer ' />
        <AiFillTwitterCircle className='text-white text-5xl cursor-pointer ' />
      </div>
      </div>
      </div>
    </footer>
    </div>
    </>
  )
}

export default Footer