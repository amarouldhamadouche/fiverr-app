import React from 'react'
import "../components/HeroSec.css"
import { FaQuoteLeft } from "react-icons/fa"
import {AiFillStar  } from "react-icons/ai"
import {BsPlayCircle } from "react-icons/bs"
import Img from '../Files/hero.png'
import { Link } from 'react-router-dom'


function HeroSec() {
return (
    <div className=' container mx-auto mt-28 flex flex-col lg:flex-row   '>
        <div className=' flex items-start  justify-start mb-9 lg:mb-0   '>
            <FaQuoteLeft className='  lg:inline-block hidden text-8xl text-Darkblue ' />
            <div className=' text-Darkblue font-bold text-center text-6xl lg:text-start lg:text-9xl'>Meet <br /> <span className=' text-perprl'>Ultimate</span>  <br /> Best Driver.
            <p className=' border-l-Darkblue w-2/3 mx-auto lg:mx-0 text-center lg:text-start lg:border-l-4 lg:pl-4 text-base lg:w-1/3'>Qui vero est ex magni voluptatem soluta repellat error. Voluptas enim accusamus similique neque mollitia voluptatem odit aut eum. Ut et laboriosam eum et totam omnis. Vel quia fugit provident nesciunt dolor quisquam ex qui minima.</p>
            <div className=' flex lg:justify-start lg:items-start items-center justify-center flex-col lg:flex-row text-xl gap-4 mt-4'>
                <Link to='/stepper' className=' bg-perprl rounded-full py-2 px-3 text-white'>Give us a try</Link>
            </div>
            </div>
        </div>

        <div>
            <div className='  '>
            <img className='md:Heroimg mx-auto max-w-xs lg:max-w-lg' src={Img} alt="" />
            </div>

            <div className=' lg:reviwes w-80 mx-auto  rounded-3xl h-auto bg-white drop-shadow-2xl  lg:absolute  '>
                <div className=' px-3 py-4 m-auto flex justify-center items-start  flex-col'>
                    <h4 className=' font-extrabold text-perprl'>Goyette</h4>
                    <p className=' text-xs mt-1'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos</p>
                    <div className='flex mt-3'>
                    <AiFillStar className=' text-xl text-yellow ' />
                    <AiFillStar className=' text-xl text-yellow  ' />
                    <AiFillStar className=' text-xl text-yellow  ' />
                    <AiFillStar className=' text-xl text-yellow  ' />
                    <AiFillStar className=' text-xl text-yellow  ' />


                    </div>
                </div>

            </div>



        </div>


    </div>
)
}

export default HeroSec