import { useState } from 'react'

export default function({step, setStep, setIsConfirm, name, email, phone, setInsertField, }) {

   const isFirstFormValid = (name.trim() !== "" && email.trim() !== "" && phone.trim() !== "");
   
   
    const prevCount = () => {
        if(step > 1){
            setStep(step - 1);
        }
    }
    const nextCount = () => {
        if(step == 1 && !isFirstFormValid){
            setInsertField(true);
            return;
        }
       else if(step < 4){
            setStep(step + 1);
            
        }
    }
    const handleConfirm = () => {
        if(step === 4){
          setIsConfirm(() => true)
        }
    }
    return (
       <div className={`flex justify-between lg:static absolute bg-white p-5 w-full lg:w-3/4 bottom-0 ${step === 1 ? "flex-row-reverse" : ""}`}>
       { step === 1 ? null : <button className="font-light" onClick={prevCount} >Go back</button> }
        <button className={`border rounded-md border-blue ps-5 pe-5 p-3  text-white ${step === 4 ? "bg-indigo-500" : "bg-blue-900"} `} onClick={step === 4 ? handleConfirm : nextCount} >
            {step === 4 ? "Confirm" : "Next Step"}
        </button>
       </div>
    )
}