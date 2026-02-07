import React, { useState, useEffect } from 'react';

const CounterItem = ({ targetNumber, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    // এনিমেশনের গতি নির্ধারণ (সংখ্যা যত বড়, ইনক্রিমেন্ট তত বেশি হবে যাতে একই সময়ে শেষ হয়)
    const duration = 2000; // ২ সেকেন্ডে এনিমেশন শেষ হবে
    const increment = Math.ceil(targetNumber / (duration / 16)); 

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16); // ১৬ মিলি-সেকেন্ড পর পর আপডেট হবে (প্রায় ৬০ ফ্রেম প্রতি সেকেন্ডে)

    return () => clearInterval(timer);
  }, [targetNumber]);

  return (
    <div className="text-white text-center flex flex-col items-center">
      <div className="flex flex-col items-start">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl md:text-6xl font-bold">{count.toLocaleString()}</span>
        </div>
        <div className="w-full h-1 bg-yellow-500 mt-1 mb-2"></div>
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-left leading-tight">
          {label.split(' ').map((word, i) => (
            <React.Fragment key={i}>
              {word} <br />
            </React.Fragment>
          ))}
        </span>
      </div>
    </div>
  );
};

const LiveCounter = () => {
  const stats = [
    { id: 1, number: 225, label: "PROFESSIONAL TEACHER" },
    { id: 2, number: 13, label: "ACADEMIC DEPARTMENTS" },
    { id: 3, number: 23, label: "TOTAL PROGRAMS" },
    { id: 4, number: 103934, label: "REGISTERED STUDENTS" },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://aub.ac.bd/assets/images/background/counter-bg.jpg')`, // আপনার ক্যাম্পাসের ব্যাকগ্রাউন্ড ইমেজ লিঙ্ক দিন
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed' // প্যারাল্যাক্স ইফেক্ট এর জন্য
        }}
      >
        {/* ছবির ওপর ডার্ক পার্পল/ব্লু ওভারলে */}
        <div className="absolute inset-0 bg-[#2d2446]/80 mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4">
          {stats.map((stat) => (
            <CounterItem 
              key={stat.id} 
              targetNumber={stat.number} 
              label={stat.label} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveCounter;