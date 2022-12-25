import React from "react";
import BsFillCalendarDateFill from "react-icons/bs";

function LessonDate() {
  return (
    <div className="mt-10 container">
      <div className=" flex justify-center flex-col items-center mb-4">
        <div className="form">
          <h1 className="font-semibold mb-1 ">select date</h1>

          <div className="flex justify-center items-center">
            <input
              className="appearance-none text-start placeholder:text-center w-96 bg-VD  outline-none rounded  py-3 px-3 text-Darkblue placeholder:text-Darkblue mb-5"
              type="numbers"
              placeholder="22-December-2022"
            />
          </div>
        </div>

        <div classNameName="   flex  justify-center items-center flex-col">
          <h1 className="font-semibold mb-1">Time</h1>
          <div className=" flex gap-4 flex-col justify-center items-center">
            <a className=" cursor-pointer text-start block w-96 pl-4 pr-28 py-3   bg-VD  rounded-lg  transition ease-in-out    ">
              <h5 className="mb-1 text-lg text-start font-medium  text-Darkblue   ">
                12:00 PM - 02:00 PM
              </h5>
            </a>

            <a className=" cursor-pointer text-start block w-96 pl-4 pr-28 py-3   bg-VD  rounded-lg  transition ease-in-out    ">
              <h5 className="mb-1 text-lg text-start font-medium  text-Darkblue   ">
                03:00 PM - 06:00 PM
              </h5>
            </a>

            <a className=" cursor-pointer text-start block w-96  pl-4 pr-28 py-3    bg-VD  rounded-lg  transition ease-in-out    ">
              <h5 className="mb-1 text-lg text-start font-medium  text-Darkblue   ">
                07:00 PM - 09:00 PM
              </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonDate;
