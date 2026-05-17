import { useState } from "react";

export default function({plan, billing, addOns, setStep}) {
        return (  
             
             <div className="flex flex-col absolute top-25 right-15 bg-white rounded-lg p-7 pb-12 w-3/4 shadow-md ">
        <h2 className="text-2xl font-bold">Finishing Up</h2>
        <p className="font-light">Double check Everything looks OK before confirming.</p>

        <div className="flex flex-col bg-gray-100 rounded-lg p-4 mt-5">
            <div className="flex justify-between items-center border-b pb-4">
                <div>
                    <p className="font-medium">{plan} ({billing})</p>
                    <button className="text-sm text-gray-500 underline" onClick={() => setStep(2)}>Change</button>
                </div>
                <p className="font-medium">${billing === "Monthly" ? (plan === "Arcade" ? "9/mo" : plan === "Advanced" ? "12/mo" : "15/mo") : (plan === "Arcade" ? "90/yr" : plan === "Advanced" ? "120/yr" : "150/yr")}</p>
            </div>
            <div className="mt-4">
                {addOns.onlineservice && <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">Online Service</p>
                    <p className="text-sm text-gray-500">+${billing === "Monthly" ? "1/mo" : "10/yr"}</p>
                </div>}
                {addOns.largestorage && <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">Larger Storage</p>
                    <p className="text-sm text-gray-500">+${billing === "Monthly" ? "2/mo" : "20/yr"}</p>
                </div>}
                {addOns.gamelibrary && <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">Customizable Profile</p>
                    <p className="text-sm text-gray-500">+${billing === "Monthly" ? "2/mo" : "20/yr"}</p>
                </div>}
            </div>
            <div className="flex justify-between items-center mt-4 gap-4">
                <p className="font-medium">Total (per {billing === "Monthly" ? "month" : "year"})</p>
                <p className="text-blue-900 font-bold text-lg">${billing === "Monthly" ? (plan === "Arcade" ? 9 : plan === "Advanced" ? 12 : 15) + (addOns.onlineservice ? 1 : 0) + (addOns.largestorage ? 2 : 0) + (addOns.gamelibrary ? 2 : 0) + "/mo" : (plan === "Arcade" ? 90 : plan === "Advanced" ? 120 : 150) + (addOns.onlineservice ? 10 : 0) + (addOns.largestorage ? 20 : 0) + (addOns.gamelibrary ? 20 : 0) + "/yr"}</p>
                </div>

        </div>
        </div>
        )
}