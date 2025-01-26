"use client";
import { use } from "framer-motion/client";
import { useState, useEffect } from "react";
// import  main  from '../../../public/video/main.mp4'

const VideoBackground = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-100"
      >
        <source
          src="https://video.wixstatic.com/video/2b2edc_9873c58bfe44462d87733f089cffcdad/1080p/mp4/file.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/50" />{" "}
      {/* Optional overlay to ensure text remains readable */}
    </div>
  );
};
export const VideoBackground2 = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
      >
        <source src="video/video1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" />{" "}
      {/* Optional overlay to ensure text remains readable */}
    </div>
  );
};
export const VideoBackground3 = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
      >
        <source src="video/video2.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" />{" "}
      {/* Optional overlay to ensure text remains readable */}
    </div>
  );
};
export const VideoBackground4 = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
      >
        <source src="video/video3.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" />{" "}
      {/* Optional overlay to ensure text remains readable */}
    </div>
  );
};
export const VideoBackground5 = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
      >
        <source src="video/video4.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" />{" "}
      {/* Optional overlay to ensure text remains readable */}
    </div>
  );
};
export const VideoBackground6 = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
      >
        <source src="video/video5.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" />{" "}
      {/* Optional overlay to ensure text remains readable */}
    </div>
  );
};

export default VideoBackground;
