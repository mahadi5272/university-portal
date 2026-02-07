import React from 'react';
import { FaGraduationCap, FaHandHoldingHeart, FaAward, FaMoneyCheckAlt } from 'react-icons/fa';

const FeatureCards = () => {
  const cards = [
    {
      id: 1,
      title: "DEGREE PROGRAM",
      desc: "Find your desire degree program.",
      icon: <FaGraduationCap className="text-4xl" />,
      bgColor: "bg-[#e0f2f7]", // হালকা নীল
      colSpan: "lg:col-span-7",
    },
    {
      id: 2,
      title: "WELFARE",
      desc: "Student support and wellbeing.",
      icon: <FaHandHoldingHeart className="text-4xl" />,
      bgColor: "bg-[#e8f5e9]", // হালকা সবুজ
      colSpan: "lg:col-span-5",
    },
    {
      id: 3,
      title: "SCHOLARSHIP",
      desc: "Opportunities for merit-based aid.",
      icon: <FaAward className="text-4xl" />,
      bgColor: "bg-[#e8eaf6]", // হালকা বেগুনি/নীল
      colSpan: "lg:col-span-5",
    },
    {
      id: 4,
      title: "TUITION FEES",
      desc: "Offers low cost higher education programs.",
      icon: <FaMoneyCheckAlt className="text-4xl" />,
      bgColor: "bg-[#f3e5f5]", // হালকা ল্যাভেন্ডার
      colSpan: "lg:col-span-7",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`${card.colSpan} ${card.bgColor} p-10 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-md group cursor-pointer min-h-[220px]`}
            >
              {/* Icon Area */}
              <div className="mb-4 text-gray-700 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              
              {/* Text Area */}
              <h3 className="text-xl font-bold text-gray-800 mb-2 tracking-wide uppercase">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm font-medium">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;