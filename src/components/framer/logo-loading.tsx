"use client";

import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function LoadingLogo() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <motion.img
        variants={{
          hidden: { opacity: 1 },
          visible: { opacity: 0 },
        }}
        initial="hidden"
        animate={animationControls}
        transition={{ duration: 0.5 }}
        className="animate-ping"
        src={"/logo.png"}
        alt="name-pic"
        width={50}
        height={50}
      />
    </div>
    // </Reveal>
  );
}
