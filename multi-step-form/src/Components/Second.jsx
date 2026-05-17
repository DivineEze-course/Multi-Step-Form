import { useState } from "react";

export default function(){
    const [plan, setPlan] = useState("Arcade");
    const [billing, setBilling] = useState("Monthly");
    const billingOptions = ["Monthly", "Yearly"];
const plans = [
    {
        name: "Arcade",
        price: {
            monthly: 9,
            yearly: 90
        },
        icon: "/icon-arcade.svg"
    },
    {
        name: "Advanced",
        price: {    
            monthly: 12,
            yearly: 120
        },
        icon: "/icon-advanced.svg"
    },
    {
        name: "Pro",
        price: {        
            monthly: 15,
            yearly: 150
        },
        icon: "/icon-pro.svg"
    }

]
    return (
        <div className="flex flex-col absolute top-25 right-15 bg-white rounded-lg p-7 pb-12 w-3/4 shadow-md ">
        <h2 className="text-2xl font-bold">Select your plan</h2>
        <p className="font-light">You have the option of monthly or year billing.</p>

        <div className="month-plan">
            <div className="plan">
                <img src="" alt="" className="icon" />
                <div className="flex flex-col gap-2 mt-5">
                <div className={`flex items-center gap-3 border  rounded-lg p-2 ${plan === "Arcade" ? "border-blue-950 bg-blue-100/40" : "border-gray-400"}`} value ={"Arcade"} onClick={() => setPlan("Arcade")} >
                    <img src={plans[0].icon} alt={plans[0].name} />
                    <div>
                    <p>{plans[0].name}</p>
                    <p>${plans[0].price[billing.toLowerCase()]}/{billing === "Yearly" ? "yr" : "mo"}</p>
                    {billing === "Yearly" && <p className="text-xs text-gray-500">2 months free</p>}
                    </div>
                </div>
                <div className={`flex items-center gap-3 border rounded-lg p-2 ${plan === "Advanced" ? "border-blue-950 bg-blue-100/40" : "border-gray-400"}`} value ={"Advanced"} onClick={() => setPlan("Advanced")} >
                    <img src={plans[1].icon} alt={plans[1].name} />
                    <div>
                    <p>{plans[1].name}</p>
                    <p>${plans[1].price[billing.toLowerCase()]}/{billing === "Yearly" ? "yr" : "mo"}</p>
                    {billing === "Yearly" && <p className="text-xs text-gray-500">2 months free</p>}    
                    </div>
                </div>
                <div className={`flex items-center gap-3 border rounded-lg p-2 ${plan === "Pro" ? "border-blue-950 bg-blue-100/40" : "border-gray-400"}`} value ={"Pro"} onClick={() => setPlan("Pro")} >
                    <img src={plans[2].icon} alt={plans[2].name} />
                    <div>
                    <p>{plans[2].name}</p>
                    <p>${plans[2].price[billing.toLowerCase()]}/{billing === "Yearly" ? "yr" : "mo"}</p>
                    {billing === "Yearly" && <p className="text-xs text-gray-500">2 months free</p>}
                    </div>
                </div>
                </div>
                 </div>
                <div className="bg-gray-200 flex gap-3 items-center p-2 rounded-lg justify-center mt-4" onClick={() => setBilling(billing === "Monthly" ? "Yearly" : "Monthly")}><p className={billing === "Monthly" ? "font-bold text-blue-900" : "text-gray-500"}>Monthly</p><i className={`bi bi-toggle-${billing === "Yearly" ? "on" : "off"} text-3xl text-blue-900`}></i><p className={billing === "Yearly" ? "font-bold text-blue-900" : "text-gray-500"}>Yearly</p></div>
           
        </div>
        </div>
    )
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  