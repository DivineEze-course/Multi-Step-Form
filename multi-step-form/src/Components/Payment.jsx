import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export default function PaymentSuccess() {
  const [status, setStatus] = useState("verifying");

  useEffect(() => {
    async function verifyPayment() {
  const params = new URLSearchParams(window.location.search);

  const reference = params.get("reference");

  if (!reference) {
    setStatus("failed");
    return;
  }

  const { data, error } =
    await supabase.functions.invoke("verify-payment", {
      body: {
        reference,
      },
    });

  console.log("VERIFY DATA:", data);
  console.log("VERIFY ERROR:", error);

  if (error) {
    console.error("VERIFY FUNCTION ERROR:", error);

    if (error.context) {
      const errorBody = await error.context.json();
      console.error("VERIFY ERROR BODY:", errorBody);
    }

    setStatus("failed");
    return;
  }

  if (!data?.success) {
    console.error("VERIFICATION NOT SUCCESSFUL:", data);
    setStatus("failed");
    return;
  }

  setStatus("success");
}

    verifyPayment();
  }, []);

  if (status === "verifying") {
    return <h1>Verifying payment...</h1>;
  }

  if (status === "failed") {
    return <h1>Payment verification failed.</h1>;
  }

  return (
    <div>
      <h1>Thank You!</h1>

      <p>
        Your payment was successful and your subscription
        has been confirmed.
      </p>
    </div>
  );
}