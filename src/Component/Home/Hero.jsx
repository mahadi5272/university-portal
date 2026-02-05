import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power4.out"
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      <img 
        src="https://www.aub-ac.com/images/slider/banner1.jpg" // অথবা আপনার লোকাল ইমেজ
        className="absolute inset-0 w-full h-full object-cover"
        alt="Campus"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="hero-text text-4xl md:text-7xl font-black mb-4 uppercase tracking-tighter">
          Congratulations <span className="text-yellow-400 font-serif lowercase italic">AUBian</span>
        </h1>
        <p className="hero-text text-lg md:text-2xl font-light max-w-2xl mx-auto italic">
          শুরু হোক আপনার সফলতার নতুন এক যাত্রা এশিয়ান ইউনিভার্সিটি অফ বাংলাদেশ-এর সাথে।
        </p>
        <button className="hero-text mt-8 btn btn-warning btn-wide rounded-full font-bold">ভর্তি তথ্য</button>
      </div>
    </div>
  );
};

export default Hero;