import { useState } from 'react'
import First from './Components/First'
import Second from './Components/Second'
import Third from "./Components/Third"
import Slider from './Components/Slider'
import NavBar from './Components/NavBar'
import Last from './Components/Last'
import Confirm from './Components/Confirm'
import { supabase } from "./supabase.js";
import { calculateTotal } from "./calculateTotal";
import PaymentSuccess from "./Components/Payment";



function App() {
  const [insertField,setInsertField] = useState(false);
    const [step, setStep] = useState(1);
    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [plan, setPlan] = useState("Arcade");
    const [billing, setBilling] = useState("Monthly");
     const [isConfirm,setIsConfirm] = useState(false);
    const [addOns, setAddOns] = useState({
    onlineservice: false,
    largestorage: false,
    gamelibrary: false,
  });
  

  const createSubscription = async () => {
  const total = calculateTotal(plan, billing, addOns);
  const subscriptionId = crypto.randomUUID();

  const { error } = await supabase
    .from("subscription")
    .insert({
      id: subscriptionId,
      name: name,
      email: email,
      phone: phone,
      plan: plan,
      billing: billing,
      total: total,
      payment_status: "pending",
      
    })
    

 if (error) {
  console.error("SUPABASE ERROR:", error);
  console.error("CODE:", error.code);
  console.error("MESSAGE:", error.message);
  console.error("DETAILS:", error.details);

  return null;
}


  
 const addOnPrices = {
    onlineservice: {
      Monthly: 1,
      Yearly: 10,
    },
    largestorage: {
      Monthly: 2,
      Yearly: 20,
    },
    gamelibrary: {
      Monthly: 2,
      Yearly: 20,
    },
  };

const selectedAddOns = Object.keys(addOns)
  .filter((key) => addOns[key])
  .map((key) => ({
    subscription_id: subscriptionId,
    addon_name: key,
    price: addOnPrices[key][billing],
  }));


if (selectedAddOns.length > 0) {
  const { error: addOnsError } = await supabase
    .from("subscription_addons")
    .insert(selectedAddOns);

  if (addOnsError) {
    console.error("ADDONS ERROR:", addOnsError);
    return null;
  }
}
  

 const { data: paymentData, error: paymentError } =
  await supabase.functions.invoke("initialize-payment", {
    body: {
      email: email,
      amount: total,
      subscriptionId: subscriptionId,
    },
  });

console.log("PAYMENT DATA:", paymentData);
console.log("PAYMENT ERROR:", paymentError);

if (paymentError) {
  console.error("PAYMENT ERROR:", paymentError);
  return null;
}

window.location.href = paymentData.data.authorization_url;

return subscriptionId;
};

  function renderStep() {
  switch (step) {
    case 1:
      return <First name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} step={step} insertField={insertField} setInsertField={setInsertField}/>;

    case 2:
      return <Second plan={plan} setPlan={setPlan} billing={billing} setBilling={setBilling} />;

    case 3:
      return <Third addOns={addOns} setAddOns={setAddOns} billing={billing} setBilling={setBilling} />;

      case 4:
      return <Last plan={plan} billing={billing} addOns={addOns} setStep={setStep} />;

    default:
      return null;
  }
}
 if (window.location.pathname === "/payment-success") {
    return <PaymentSuccess />;
  }
  return (
    
    <div className='block md:flex justify-center items-center md:mt-10'>
    <div className='md:hidden'>
    <Slider steps={step} />
    {renderStep()}
    { isConfirm ? "" : <NavBar step={step} setStep={setStep} setIsConfirm={setIsConfirm} name={name} email={email} phone={phone} setInsertField={setInsertField}  createSubscription={createSubscription}/>}
    </div>

      <div className='hidden lg:flex w-4/6 h-150 rounded-lg flex gap-10 justify-center items-center p-4 shadow-md '>
          <Slider steps={step} />
        <div className="w-2/3 h-screen relative p-4 flex flex-col justify-center items-center">
          { isConfirm ? <Confirm /> : renderStep()}
          { isConfirm ? "" : <NavBar step={step} setStep={setStep} setIsConfirm={setIsConfirm} name={name} email={email} phone={phone} setInsertField={setInsertField} createSubscription={createSubscription}/>}
        </div>
      </div>
    </div>
  )
}

export default App
