"use client";
import { use } from "framer-motion/client";
import { useState , useEffect} from "react";


const VideoBackground = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if(!isClient) return null;

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
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

export default VideoBackground;
