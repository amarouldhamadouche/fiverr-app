import React from "react";
import { useContext } from "react";
import StepperContext from "../../context/StipperContext";

function LessonPrice() {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChangeType = (type) => {
   setUserData({ ...userData,LessonPrice:{...userData.LessonPrice,lessonType:type}});
 };

 const handleChangePackage = (type) => {
  setUserData({ ...userData,LessonPrice:{...userData.LessonPrice,package:type}});
};
  return (
    <div>
      <div className=" mt-10 container ">
        <div>
          <div>
            <h1 className="font-semibold text-start mb-3 ">
              what type of lessons do you want ?
            </h1>
            <div className=" flex flex-row gap-4 justify-center">
              <button className={`${userData?.LessonPrice?.lessonType === "manual" ? "bg-perprl text-white" : "bg-VD text-Darkblue" } hover:bg-perprl hover:text-white transition ease-in-out h-auto w-40 py-4 rounded  font-semibold ` } onClick={()=>handleChangeType('manual')}>
                Manual
              </button>
              <button className={`${userData?.LessonPrice?.lessonType === "automatic" ? "bg-perprl text-white" : "bg-VD text-Darkblue" } hover:bg-perprl hover:text-white transition ease-in-out h-auto w-40 py-4 rounded  font-semibold ` } onClick={()=>handleChangeType('automatic')}>
                Automatic
              </button>
            </div>
          </div>

          <div className=" mt-5 flex flex-col justify-start">
            <h1 className="font-semibold text-start mb-3 text-xl">
              your instructore
            </h1>
            <div className=" mt-5 flex justify-between items-center">
              <div className=" flex flex-row items-center gap-3">
                <h1 className=" bg-VD p-4 rounded-full">JT</h1>
                <h1 className="font-semibold">Jimmy Tim</h1>
              </div>
              <p className=" h-auto text-center w-36 py-4 rounded bg-VD font-semibold text-Darkblue">
                $59.50/hr
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="uppercase font-semibold text-start mb-3 text-xl">
            Chose your Package
          </h1>
          <div className=" flex flex-col gap-4 lg:flex-row items-center justify-around">
            <div className={`${userData?.LessonPrice?.package === 1 ? "bg-perprl" : "bg-VD" } hover:bg-perprl transition ease-in-out rounded-lg px-2 py-6 gap-3 flex flex-col  w-32`}  onClick={()=>handleChangePackage(1)}>
              <h1 className=" bg-white  text-center p-1 rounded-full w-8">1</h1>
              <div>
                <p className=" text-white font-medium">2 hours</p>
                <p className=" text-white font-bold text-2xl">$119</p>
              </div>
            </div>

            <div className={`${userData?.LessonPrice?.package === 2 ? "bg-perprl" : "bg-VD" } hover:bg-perprl transition ease-in-out rounded-lg px-2 py-6 gap-3 flex flex-col  w-32`}  onClick={()=>handleChangePackage(2)}>
              <h1 className=" bg-white  text-center p-1 rounded-full w-8">2</h1>
              <div>
                <p className=" text-white font-medium">2 hours</p>
                <p className=" text-white font-bold text-2xl">$350</p>
              </div>
            </div>

            <div className={`${userData?.LessonPrice?.package === 3 ? "bg-perprl" : "bg-VD" } hover:bg-perprl transition ease-in-out rounded-lg px-2 py-6 gap-3 flex flex-col  w-32`}  onClick={()=>handleChangePackage(3)}>
              <h1 className=" bg-white  text-center p-1 rounded-full w-8">3</h1>
              <div>
                <p className=" text-white font-medium">2 hours</p>
                <p className=" text-white font-bold text-2xl">$500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonPrice;
