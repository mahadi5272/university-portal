import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const EventsSlider = () => {
  const events = [
    {
      id: 1,
      date: "30 Jan 2025",
      title: "ইসলামিক স্টাডিজ বিভাগ, এশিয়ান...",
      image: "https://aub.ac.bd/assets/images/events/event1.jpg", // Replace with real image
    },
    {
      id: 2,
      date: "07 Jan 2025",
      title: "Leadership in Information...",
      image: "https://aub.ac.bd/assets/images/events/event2.jpg",
    },
    {
      id: 3,
      date: "04 Jan 2025",
      title: "এশিয়ান ইউনিভার্সিটি অব বাংলাদেশ-...",
      image: "https://aub.ac.bd/assets/images/events/event3.jpg",
    },
    {
      id: 4,
      date: "17 Dec 2024",
      title: "মহান বিজয় দিবস-২০২৪ উপলক্ষে...",
      image: "https://aub.ac.bd/assets/images/events/event4.jpg",
    },
  ];

  return (
    <section className="bg-[#4a8f8d] py-16 px-4 md:px-10 relative overflow-hidden">
      {/* Decorative Background Patterns (Optional) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,_rgba(255,255,255,0.1)_0%,_transparent_20%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex justify-between items-end mb-8 text-white">
          <div>
            <h2 className="text-4xl font-bold mb-2">Events</h2>
            <p className="text-lg opacity-90">Recent Events to feed your brain.</p>
          </div>
          <button className="border border-white/50 px-6 py-2 rounded-sm text-sm font-bold uppercase hover:bg-white hover:text-[#4a8f8d] transition-all">
            View All
          </button>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-16"
        >
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-lg">
                  {/* Date Tag */}
                  <div className="absolute top-0 left-0 bg-black/60 text-white p-2 text-center z-20 min-w-[60px]">
                    <span className="block text-xs font-bold leading-tight">
                      {event.date.split(" ").slice(0, 2).join(" ")}
                    </span>
                    <span className="block text-[10px] opacity-80">
                      {event.date.split(" ")[2]}
                    </span>
                  </div>

                  {/* Image */}
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-sm p-3 border-t border-white/10">
                    <h3 className="text-white text-sm font-medium truncate">
                      {event.title}
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination Custom CSS */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 25px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default EventsSlider;