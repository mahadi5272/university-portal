import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Swiper এর প্রয়োজনীয় CSS ইমপোর্ট করুন
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero = () => {
  // আপনার স্লাইডারের ডেটা এখানে দিন
  const sliders = [
    {
      id: 1,
      image: "https://i.ibb.co.com/7xN7tdxt/ai-generated-futuristic-esport-background-for-gaming-live-streaming-esport-game-tournament-competiti.jpg", // অথবা আপনার লোকাল ইমেজের পাথ
      title: "Admission Open Summer 2025",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/j90T7HB8/1489380-Blog-Image-10-110922.jpg",
      title: "Asian University of Bangladesh Convocation",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/q3vdQLJw/Elipse-5.png",
      title: "Campus Life at AUB",
    }
  ];

  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade" // প্রফেশনাল ফেড এনিমেশন
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper h-[500px] md:h-[650px] lg:h-[750px] xl:h-[800px]" // হাইট বড় করা হয়েছে
      >
        {sliders.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* ব্যানার ইমেজ */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover lg:object-fill transition-transform duration-700 hover:scale-105"
              />
              
              {/* ইমেজের ওপর হালকা অন্ধকার ভাব আনার জন্য Overlay */}
              <div className="absolute inset-0 bg-black/5 opacity-40"></div>
              
              {/* যদি ইমেজের ওপর টেক্সট দেখাতে চান (Optional) */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* এখানে কোনো কন্টেন্ট থাকলে দিতে পারেন */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* স্লাইডার বাটন এবং ডট কাস্টমাইজ করার CSS */}
      <style>{`
        .swiper-button-next, .swiper-button-prev {
          color: white;
          background: rgba(0, 106, 78, 0.5); /* AUB Green Color with opacity */
          width: 50px;
          height: 50px;
          border-radius: 50%;
          transform: scale(0.7);
          transition: all 0.3s;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          background: #006a4e;
          transform: scale(0.8);
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #fff;
          opacity: 0.7;
        }
        .swiper-pagination-bullet-active {
          background: #006a4e !important;
          width: 30px;
          border-radius: 10px;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Hero;