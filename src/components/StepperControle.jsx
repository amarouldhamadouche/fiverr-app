import React from "react";

function StepperControle({ handleClick, currentStep, steps }) {
  return (
    <div className="container mt-9 mb-8 flex justify-center">
      <button
        onClick={() => handleClick()}
        className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-perprl py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-white hover:text-perprl  ${
          currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
        }`}
      >
        Back
      </button>

      <button
        onClick={() => handleClick("next")}
        className="cursor-pointer rounded-xl   bg-perprl py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out "
      >
        {currentStep === steps.length - 1 ? "Confirm" : "Next"}{" "}
      </button>
    </div>
  );
}

export default StepperControle;
