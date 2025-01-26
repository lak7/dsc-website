"use client";
import { motion } from "framer-motion";
import { useState, useRef, ReactNode, MouseEvent } from "react";
import { TiLocationArrow } from "react-icons/ti";

interface BentoTiltProps {
  children: ReactNode;
  className?: string;
  isLeft?: boolean;
}

interface BentoCardProps {
  src: string;
  title: ReactNode;
  description?: string;
  isComingSoon?: boolean;
}

export const BentoTilt = ({
  children,
  className = "",
  isLeft = false,
}: BentoTiltProps) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </motion.div>
  );
};

export const BentoCard = ({
  src,
  title,
  description,
  isComingSoon,
}: BentoCardProps) => {
  return (
    <div className="relative size-full">
      <img
        src={src}
        alt="Background"
        className="absolute left-0 top-0 size-full object-cover"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font ">{title}</h1>
          {description && (
            <p className="mt-3 p-3 max-w-64 text-xs backdrop-blur-lg border border-transparent rounded-2xl bg-black/20 transition-all duration-300 hover:bg-black/30 hover:border-white/10 md:text-base">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-20 overflow-hidden">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-20">
        {/* <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Developer Student Club (DSC) BVCOE, is a dynamic community of tech
          enthusiasts committed to fostering innovation and collaboration. We
          empower students to connect with peers, learn emerging technologies,
          and build impactful solutions for real-world challenges.
        </p> */}
        <h1 className="text-9xl max-lg:text-5xl font-zentry font-black text-blue-50">
          OUR THREE PILLARS
        </h1>
      </div>
      <div className="grid w-full grid-cols-2 grid-rows-2 gap-7">
        <BentoTilt
          className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 transition-transform duration-300 hover:scale-[1.02]"
          isLeft={true}
        >
          <BentoCard
            src="/connect.jpg"
            title={
              <>
                CO<b>NN</b>ECT
              </>
            }
            description="Become part of a vibrant community of developers and innovators. Engage with like-minded peers, industry leaders, and mentors who share your passion for technology."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0 transition-transform duration-300 hover:scale-[1.02]">
          <BentoCard
            src="/learn.jpg"
            title={
              <>
                LE<b>A</b>RN
              </>
            }
            description="Explore the latest technology with hands-on workshops, events, and collaborative projects. Enhance your skills and gain practical experience."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0 transition-transform duration-300 hover:scale-[1.02]">
          <BentoCard
            src="/build.jpg"
            title={
              <>
                B<b>U</b>ILD
              </>
            }
            description="Transform ideas into impactful solutions. Work on cutting-edge projects that
address community needs and leave a lasting impression."
            isComingSoon
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
