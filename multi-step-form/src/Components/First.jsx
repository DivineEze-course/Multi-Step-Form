import { useState } from "react";


export default function({name, setName, email, setEmail, phone, setPhone, step, insertField, setInsertField}) {

  
       
    return (
        <div className="flex flex-col absolute top-25 right-15 bg-white rounded-lg p-7 pb-12 w-3/4 shadow-md ">
        <h2 className="text-2xl font-bold text-blue-900">Personal info</h2>
        <p className="pe-4 pt-2 text-wrap font-light text-gray-500 text-sm">Please provide your name, email address and phone number.</p>
<div className="input-labels flex flex-col pt-5 gap-3">
<div className="flex flex-col gap-1">
        <label className="text-sm text-blue-900">Name</label>
        <input className ="border-gray-500 border p-2 rounded-sm required" type="text" placeholder="e.g Stephen King" value={name} onChange={(e) => setName(e.target.value)}/>
         {insertField && name.trim() === "" && (
    <p className="text-red-400 text-xs">
      Please input your name
    </p>
  )}
</div>
<div className="flex flex-col gap-1">
        <label className="text-sm text-blue-900">Email Address</label>
        <input className ="border-gray-500 border p-2 rounded-sm required" type="text" placeholder="e.g stephenking@lorem.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
         {insertField && email.trim() === "" && (
    <p className="text-red-400 text-xs">
      Please input your email
    </p>
  )}
</div>
<div className="flex flex-col gap-1">
        <label className="text-sm text-blue-900">Phone Number</label>
        <input className ="border-gray-500 border p-2 rounded-sm required" type="text" placeholder="e.g. +1 234 567 890" value={phone} onChange={(e) => setPhone(e.target.value)}   />
         {insertField && phone.trim() === "" && (
    <p className="text-red-400 text-xs">
      Please input your phone number
    </p>
  )}
 </div>
        </div>
        </div>

    )
}