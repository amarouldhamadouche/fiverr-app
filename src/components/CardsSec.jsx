import React from 'react'
import './CardSec.css'
import {SlCalender} from 'react-icons/sl'
import {BsPeopleFill} from 'react-icons/bs'
import {RiCoinsLine} from 'react-icons/ri'
import {CgMicrosoft} from 'react-icons/cg'

function CardsSec() {
  return (
    <section className="py-20 bg-white my-6">
    <div className="container max-w-9xl mx-auto">
        <h2 className="px-4 text-4xl font-bold tracking-tight text-start">Our Features</h2>
        <p className=" px-4 mt-2 text-lg text-start ">Check out our list of awesome features below.</p>
        <div className="grid grid-cols-1  gap-8 mt-10 lg:grid-cols-12 lg:px-0">


            <div className=" Card  hover:text-white relative flex flex-col items-center justify-center  lg:items-start lg:justify-start col-span-1 lg:col-span-3 px-5 py-8 space-y-4 overflow-hidden bg-white sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                <div className="p-3   bg-white rounded-full"  data-rounded="rounded-full">
                    <SlCalender  className="w-8 h-8 text-Darkblue "  />
                </div>
                <h4 className="text-xl text-center lg:text-start font-bold ">Driving Instructor Diary</h4>
                <p className="text-base text-center lg:text-start ">Manage lessons, pick-ups, repeats, calendar sync.</p>
            </div>

            <div className=" Card relative flex flex-col  items-center justify-center  lg:items-start lg:justify-start col-span-1 lg:col-span-3 px-5 py-8 space-y-4 overflow-hidden bg-white sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                <div className="p-3  bg-white rounded-full"  data-rounded="rounded-full">
                    <BsPeopleFill className="w-8 h-8 text-Darkblue"  />
                </div>
                <h4 className="text-xl text-center lg:text-start font-bold ">Pupil Record</h4>
                <p className="text-base text-center lg:text-start  ">Progress, payments, lessons, & driving details.</p>
            </div>

            <div className=" Card relative flex flex-col  items-center justify-center  lg:items-start lg:justify-start col-span-1 lg:col-span-3 px-5 py-8 space-y-4 overflow-hidden bg-white sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                <div className="p-3 bg-white rounded-full"  data-rounded="rounded-full">
                    <RiCoinsLine  className="w-8 h-8 text-Darkblue"  />
                </div>
                <h4 className="text-xl text-center lg:text-start font-bold ">Finances</h4>
                <p className="text-base text-center lg:text-start  ">Income, expenses, mileage for making tax digital.</p>
            </div>

            <div className=" Card relative flex flex-col  items-center justify-center  lg:items-start lg:justify-start col-span-1 lg:col-span-3 px-5 py-8 space-y-4 overflow-hidden bg-white sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                <div className="p-3   bg-white rounded-full"  data-rounded="rounded-full">
                    <CgMicrosoft  className="w-8 h-8 text-Darkblue "  />
                </div>
                <h4 className="text-xl text-center lg:text-start font-bold ">Finances</h4>
                <p className="text-base text-center lg:text-start  ">Income, expenses, mileage for making tax digital.</p>
            </div>

          

        </div>
    </div>
</section>
  )
}

export default CardsSec