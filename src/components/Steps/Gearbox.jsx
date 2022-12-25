import React from "react";

function Gearbox() {
  return (
    <div className="mt-10 container">
      <div classNameName="   flex  justify-center items-center flex-col">
        <form className="form">
          <h1 className="font-semibold mb-3 text-l text-center">
            What type of lesson do you want
          </h1>
          <div className=" flex gap-4 flex-col justify-center items-center">
            <a
              href="#"
              className=" text-start block w-96 pl-4 pr-28 py-3   bg-VD  rounded-lg  transition ease-in-out    "
            >
              <h5 className="mb-1 text-start font-medium  text-Darkblue   ">
                i want to learn drive
              </h5>
            </a>

            <a
              href="#"
              className=" text-start block w-96 pl-4 pr-28 py-3   bg-VD  rounded-lg  transition ease-in-out    "
            >
              <h5 className="mb-1 text-start font-medium  text-Darkblue   ">
                i want refresher learner
              </h5>
            </a>

            <a
              href="#"
              className=" text-start block w-96  pl-4 pr-16 py-3    bg-VD  rounded-lg  transition ease-in-out    "
            >
              <h5 className="mb-1 text-start font-medium  text-Darkblue   ">
                i have a test booked within 14 days
              </h5>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Gearbox;
