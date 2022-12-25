import React from 'react'




function Final() {
  return (
    <div>
       <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <div className="wrapper">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>

        <div className="mt-3 text-xl font-semibold uppercase ">
          Congratulations!
        </div>
        <div className="text-lg text-center font-semibold ">
          Your Booking has been created.
        </div>
      </div>
    </div>
    </div>
  )
}

export default Final