import React from "react";
// Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const MessageSlider = () => {
  // স্লাইডার ডাটা (এখানে আপনি আরও মেসেজ যোগ করতে পারেন)
  const messages = [
    {
      id: 1,
      name: "Professor Dr. Md. Nurul Islam",
      designation: "Treasurer, Asian University of Bangladesh",
      title: "Go ahead AUB",
      image: "https://aub.ac.bd/assets/images/faculty/treasurer.jpg", // Treasurer Image
      label: "The Treasurer",
      text: "It is a matter of great honour for me to be able to write this message as the Treasurer of the Asian University of Bangladesh (AUB). The University was founded in 1996 with the goal of satisfying society's needs for higher education and research. We are doing everything we can to make it one of Bangladesh's greatest private universities. The university's objective is to produce graduates who are well-educated and technologically savvy and can contribute positively to the nation's progress.",
    },
    {
      id: 2,
      name: "Professor Dr. Shahjahan Khan",
      designation: "Vice Chancellor, Asian University of Bangladesh",
      title: "Message from VC",
      image: "https://aub.ac.bd/assets/images/faculty/vc.jpg", // VC Image (Placeholder)
      label: "Vice Chancellor",
      text: "Asian University of Bangladesh is committed to providing quality education at an affordable cost. Our mission is to develop human resources equipped with moral values and modern knowledge. We believe in continuous improvement and strive for excellence in every aspect of academic life.",
    },
  ];

  return (
    <section className="bg-[#549677] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="mySwiper pb-12"
        >
          {messages.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-white">
                
                {/* Image Section */}
                <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                  {/* Decorative White Border (Top-Left) */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-white hidden md:block"></div>
                  
                  <div className="relative z-10 w-full max-w-sm">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-auto object-cover shadow-2xl"
                    />
                    {/* Label (The Treasurer) */}
                    <div className="absolute bottom-0 left-0 bg-[#333] text-white px-4 py-2 font-bold text-sm">
                      {item.label}
                    </div>
                  </div>

                  {/* Decorative White Border (Bottom-Right) */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-white hidden md:block"></div>
                </div>

                {/* Text Section */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <h2 className="text-3xl font-bold">{item.title}</h2>
                  <p className="text-sm md:text-base leading-relaxed opacity-90">
                    {item.text}
                  </p>
                  
                  <div className="text-right">
                     <a href="#" className="italic text-sm hover:underline">Read More I→</a>
                  </div>

                  <div className="pt-4">
                    <h4 className="text-xl font-bold">{item.name}</h4>
                    <p className="text-sm opacity-80">{item.designation}</p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Swiper Pagination Custom Styling */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white !important;
          width: 12px;
          height: 12px;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 6px;
        }
        .swiper-pagination {
          bottom: 0px !important;
        }
      `}</style>
    </section>
  );
};

export default MessageSlider;