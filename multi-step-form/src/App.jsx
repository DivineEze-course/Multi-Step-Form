import { useState } from 'react'
import First from './Components/First'
import Second from './Components/Second'
import Third from "./Components/Third"
import Slider from './Components/Slider'
import NavBar from './Components/NavBar'
import Last from './Components/Last'
import Confirm from './Components/Confirm'



function App() {
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

  function renderStep() {
  switch (step) {
    case 1:
      return <First name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} />;

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
  return (
    <>
    <Slider steps={step} />
    { isConfirm ? <Confirm /> : renderStep()}
    { isConfirm ? "" : <NavBar step={step} setStep={setStep} setIsConfirm={setIsConfirm} />}
    </>
  )
}

export default App
