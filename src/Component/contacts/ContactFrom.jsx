import React from "react";
import { FaChevronRight, FaHome } from "react-icons/fa";

const ContactFrom = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-12">
        {/* Get In Touch Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-[#333] mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl leading-relaxed">
            Energistically benchmark vertical channels before visionary
            solutions. Interactively initiate frictionless imperatives vis-a-vis
            unique benefits. Monotonectally actualize turnkey sources after
            extensible processes.
          </p>
        </div>

        {/* Contact Form & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-[#f9fdfb] border border-[#d1e7dd] rounded-md focus:outline-none focus:border-[#00a651] transition-all"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full px-4 py-3 bg-[#f9fdfb] border border-[#d1e7dd] rounded-md focus:outline-none focus:border-[#00a651] transition-all"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-[#f9fdfb] border border-[#d1e7dd] rounded-md focus:outline-none focus:border-[#00a651] transition-all"
              />
              <textarea
                placeholder="Leave a message..."
                rows="6"
                className="w-full px-4 py-3 bg-[#f9fdfb] border border-[#d1e7dd] rounded-md focus:outline-none focus:border-[#00a651] transition-all"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#00a651] text-white font-bold py-3 rounded-md hover:bg-[#008a44] transition-colors shadow-md uppercase text-sm tracking-wide"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-[400px] lg:h-full rounded-lg overflow-hidden shadow-sm border border-gray-200">
            <iframe
              title="AUB Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.3387841199616!2d90.3188!3d23.9304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c2079089201f%3A0xe2f7c0d7...!"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* List Section Title */}
        <div className="mt-16 border-b-2 border-[#00a651] pb-2 inline-block">
          <h3 className="text-xl font-bold text-[#333]">
            Important Contact List
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ContactFrom;
