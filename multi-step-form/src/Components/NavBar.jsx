import { useState } from 'react'

export default function({step, setStep, setIsConfirm}) {
   
   
    const prevCount = () => {
        if(step > 1){
            setStep(step - 1);
        }
    }
    const nextCount = () => {
        if(step < 4){
            setStep(step + 1);
        }
    }
    const handleConfirm = () => {
        if(step === 4){
          setIsConfirm(() => true)
        }
    }
    return (
       <div className="flex justify-between absolute bg-white p-5 w-full bottom-0">
        <button className="font-light" onClick={prevCount} >Go back</button>
        <button className="border rounded-md border-blue p-3 bg-blue-900 text-white" onClick={step === 4 ? handleConfirm : nextCount} >
            {step === 4 ? "Confirm" : "Next Step"}
        </button>
       </div>
    )
}