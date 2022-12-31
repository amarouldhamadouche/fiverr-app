import React from "react";
import { useContext } from "react";
import StepperContext from "../../context/StipperContext";

function Gearbox() {
  const { userData, setUserData } = useContext(StepperContext);
   const handleChange = (type) => {
    setUserData({ ...userData, typeOfLearning: type});
  };
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
               className={`${userData?.typeOfLearning == 0 ? "bg-perprl" : " bg-VD " }  text-start block w-96 pl-4 pr-28 py-3 rounded-lg transition ease-in-out`}
               onClick={()=>handleChange(0)}
            >
              <h5 className={`${userData?.typeOfLearning === 0 ? 'text-white' : 'text-Darkblue'} mb-1 text-start font-medium`}>
                i want to learn drive
              </h5>
            </a>

            <a
              href="#"
              className={`${userData?.typeOfLearning === 1 ? "bg-perprl  " : " bg-VD "}  text-start block w-96 pl-4 pr-28 py-3 rounded-lg transition ease-in-out `} 
              onClick={()=>handleChange(1)}
            >
              <h5 className={`${userData?.typeOfLearning === 1 ? 'text-white' : 'text-Darkblue'} mb-1 text-start font-medium`}>
                i want refresher learner
              </h5>
            </a>

            <a
              href="#"
              className={`${userData?.typeOfLearning === 2 ? "bg-perprl " : " bg-VD " }  text-start block w-96 pl-4 pr-28 py-3 rounded-lg transition ease-in-out `}
              onClick={()=>handleChange(2)}
            >
              <h5 className={`${userData?.typeOfLearning === 2 ? 'text-white' : 'text-Darkblue'} mb-1 text-start font-medium`}>
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
