import React from "react";
import BsFillCalendarDateFill from "react-icons/bs";
import { useContext } from "react";
import StepperContext from "../../context/StipperContext";

function LessonDate() {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChangeTime = (type) => {
    setUserData({ ...userData,LessonDate:{ ...userData.LessonDate,time:type}});
  };
  const handleChangeDate = (type) => {
    setUserData({ ...userData,LessonDate:{ ...userData.LessonDate,date:type}});
  };
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
              value={userData?.LessonDate?.date}
              onChange={(e)=>handleChangeDate(e.target.value)}
            />
          </div>
        </div>

        <div classNameName=" flex  justify-center items-center flex-col">
          <h1 className="font-semibold mb-1">Time</h1>
          <div className=" flex gap-4 flex-col justify-center items-center">
            <span className={`${userData?.LessonDate?.time === 1 ? "bg-perprl" : "bg-VD"} cursor-pointer text-start block w-96 pl-4 pr-28 py-3  rounded-lg  transition ease-in-out ` }  onClick={()=>handleChangeTime(1)}>
              <h5 className={`${userData?.LessonDate?.time === 1 ? "text-white" : "text-Darkblue"} mb-1 text-lg text-start font-medium `} >
                12:00 PM - 02:00 PM
              </h5>
            </span>

            <span className={`${userData?.LessonDate?.time === 2 ? "bg-perprl" : "bg-VD"} cursor-pointer text-start block w-96 pl-4 pr-28 py-3  rounded-lg  transition ease-in-out ` }  onClick={()=>handleChangeTime(2)}>
              <h5 className={`${userData?.LessonDate?.time === 2 ? "text-white" : "text-Darkblue"} mb-1 text-lg text-start font-medium `}>
                03:00 PM - 06:00 PM
              </h5>
            </span>

            <span className={`${userData?.LessonDate?.time === 3  ? "bg-perprl" : "bg-VD"} cursor-pointer text-start block w-96 pl-4 pr-28 py-3  rounded-lg  transition ease-in-out ` }  onClick={()=>handleChangeTime(3)}>
              <h5 className={`${userData?.LessonDate?.time === 3  ? "text-white" : "text-Darkblue"} mb-1 text-lg text-start font-medium `}>
                07:00 PM - 09:00 PM
              </h5>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonDate;
