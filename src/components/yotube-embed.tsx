import React from "react";

const YoutubeEmbed = ({ embedId }: { embedId: string }) => (
  <div className="relative flex-1 overflow-hidden lg:min-h-80 min-h-60 lg:max-w-[700px] lg:w-1/2 rounded-xl shadow-inner">
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

export default YoutubeEmbed;
