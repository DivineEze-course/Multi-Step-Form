import { useState } from "react";

export default function({plan, billing, addOns}) {
        return (  
             
             <div className="flex flex-col absolute top-25 right-15 bg-white rounded-lg p-7 pb-12 w-3/4 shadow-md ">
        <h2 className="text-2xl font-bold">Finishing Up</h2>
        <p className="font-light">Double check Everything looks OK before confirming.</p>

        <div className="flex flex-col bg-gray-100 rounded-lg p-4 mt-5">
            <div className="flex justify-between items-center">
                <div>
                    <p className="font-medium">{plan} ({billing})</p>
                    <button className="text-sm text-gray-500 underline">Change</button>
                </div>
                <p className="font-medium">${billing === "Monthly" ? (plan === "Arcade" ? "9/mo" : plan === "Advanced" ? "12/mo" : "15/mo") : (plan === "Arcade" ? "90/yr" : plan === "Advanced" ? "120/yr" : "150/yr")}</p>
            </div>

        </div>
        </div>
        )
}