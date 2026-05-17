import { useState } from "react";


export default function() {
const [name,setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
    return (
        <div className="flex flex-col absolute top-25 right-15 bg-white rounded-lg p-7 pb-12 w-3/4 shadow-md ">
        <h2 className="text-2xl font-bold">Personal info</h2>
        <p className="pe-4 pt-2 text-wrap font-light">Please provide your name, email address and phone number.</p>
<div className="input-labels flex flex-col pt-5 gap-3">
<div className="flex flex-col gap-1">
        <label>Name</label>
        <input className ="border-black border p-2 rounded-sm" type="text" placeholder="e.g Stephen King" value={name} onChange={(e) => setName(e.target.value)}/>
</div>
<div className="flex flex-col gap-1">
        <label>Email Address</label>
        <input className ="border-black border p-2 rounded-sm" type="text" placeholder="e.g stephenking@lorem.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
</div>
<div className="flex flex-col gap-1">
        <label>Phone Number</label>
        <input className ="border-black border p-2 rounded-sm" type="text" placeholder="e.g. +1 234 567 890" value={phone} onChange={(e) => setPhone(e.target.value)}   />
 </div>
        </div>
        </div>

    )
}