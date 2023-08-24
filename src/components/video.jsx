import React from "react";

export default function Video({ videoSrcURL }) {
  return (
    <video
      className="gatsby-video-component"
      crossOrigin="anonymous"
      autoplay
      loop
      muted
    >
      <source src={videoSrcURL} type="video/mp4" />
    </video>
  );
}
