import React from 'react'
import { useState } from 'react'

import StepperContext from '../context/StipperContext'
import Stepper from '../components/Stepper'
import StepperControle from '../components/StepperControle'
import ZipCode from './Steps/ZipCode'
import Gearbox from './Steps/Gearbox'
import Final from './Steps/Final'
import LessonDate from './Steps/LessonDate'
import LessonPrice from './Steps/LessonPrice'
import About from './Steps/About'
import Credit from './Steps/Credit'

function StepperPage() {
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);


    const [currentStep, setCurrentStep] = useState(1);
    const steps = [
        "Are you ready to learn dirve ?",
        "Select gearbox to see instructor.",
        "Please select Pricing to your lessons",
        "Please select Dating to your lessons",
        "Tell us about you",
        "Please enter your credit card information",
        "Complete"
    ]

    const displayStep = (step) =>{
        switch(step){
            case 1 : 
                return <ZipCode/>
            
            case 2 : 
              return <Gearbox/>    
            
            case 3 : 
              return <LessonPrice/>

            case 4 : 
              return <LessonDate/>  
            
            case 5 : 
              return <About/>

            case 6 : 
              return <Credit/>

            case 7 : 
              return <Final/>
            
            default:  
        }
    }

    const handleClick = (direction) => {
      let newStep = currentStep;
  
      direction === "next" ? newStep++ : newStep--;
      // check if steps are within bounds
      newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    };
  
  return (
    <div className='mx-auto rounded-2xl bg-Vone  pb-2 shadow-xl md:w-1/2'>
       <div className="horizontal container mt-5 ">
        <Stepper
        steps={steps}
        currentStep ={currentStep}
        />

         <div className="my-10 p-10 ">
         <StepperContext.Provider value={{
          userData,
          setUserData,
          finalData,
          setFinalData
         }}>
           {displayStep(currentStep)}
         </StepperContext.Provider>
        </div>
      



        </div>
        
        {currentStep !== steps.length && (
        <StepperControle
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
      
    </div>
  )
}

export default StepperPage