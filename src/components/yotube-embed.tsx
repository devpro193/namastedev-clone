"use client";
import { useInView } from "framer-motion";
import React, { useRef } from "react";

const YoutubeEmbed = ({ embedId }: { embedId: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <div
      ref={ref}
      className={`${
        isInView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      } relative flex-1 overflow-hidden min-h-80 bg-background/20 max-md:min-h-60 xl:max-w-[700px] xl:w-1/2 rounded-xl shadow-inner transition-all duration-500`}
    >
      <iframe
        className="h-full w-full left-0 top-0 absolute"
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default YoutubeEmbed;
