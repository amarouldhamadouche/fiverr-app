import React from 'react'
import google from '../Files/google-2015.svg'
import amazon from '../Files/amazon-2.svg'
import ibm from '../Files/ibm.svg'
import microsoft from '../Files/microsoft.svg'
import "../components/Brands.css"
function Brands() {
  return (
    <div>
      
<section className=" hidden md:block py-20  lg:py-[120px]">
  <div className=" w-auto lg:Brands  container mx-auto">
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full lg:px-4">
        <div className="flex flex-col w-3/4 mx-auto lg:flex-row flex-wrap items-center justify-center">
          <a
            href="javascript:void(0)"
            className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
          >
            <img
              src={amazon}
              alt="image"
              className="h-10 w-full"
            />
          </a>
          <a
            href="javascript:void(0)"
            className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
          >
            <img
              src={google}
              alt="image"
              className="h-10 w-full"
            />
          </a>
          <a
            href="javascript:void(0)"
            className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
          >
            <img
              src={ibm}
              alt="image"
              className="h-10 w-full"
            />
          </a>
          <a
            href="javascript:void(0)"
            className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
          >
            <img
              src={microsoft}
              alt="image"
              className="h-10 w-full"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Brands