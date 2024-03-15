"use client";

import Script from "next/script";

export default function Razorpay() {
  return (
    <Script
      id="show-banner"
      dangerouslySetInnerHTML={{
        __html: `let d = document; let x = !d.getElementById('razorpay-embed-btn-js');
        if (x) { let s = d.createElement('script'); s.defer = !0; s.id = 'razorpay-embed-btn-js'; s.src = 'https://cdn.razorpay.com/static/embed_btn/bundle.js'; d.body.appendChild(s); } else { let rzp = window['_rzp_']; rzp && rzp.init && rzp.init() }`,
      }}
    />
  );
}
