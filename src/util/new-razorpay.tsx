"use client";

import Script from "next/script";

export default function NewRazorpay() {
  return (
    <Script
      id="show-banner"
      dangerouslySetInnerHTML={{
        __html: `
        let rzpPaymentForm = document.getElementsByName("rzp_payment_form");

rzpPaymentForm.forEach((form) => {
  if (!form.hasChildNodes()) {
    let script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.async = true;
    script.dataset.payment_button_id = "pl_NmmJdmhwt5r9iD";
    form.appendChild(script);
  }
});`,
      }}
    />
  );
}
