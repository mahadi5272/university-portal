import React from 'react';

const InfoSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Content Area */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Why AUB Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why AUB?</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                An unique seat of best quality international standard higher education in Bangladesh. 
                Led by Prof. Dr. Shahjahan Khan, an internationally renowned Australian Academic, 
                scientist and Emeritus Professor as Vice Chancellor.
              </p>
              <a href="#" className="text-[#00a651] font-bold hover:underline uppercase text-sm tracking-wider">
                Read More
              </a>
            </div>

            {/* Campus Life Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Campus life</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                AUB Campus is not just about studying only – students can balance learning and 
                personal-life here. Students will have opportunities to take up activities like 
                sports and games, debate and presentation, community services and mo...
              </p>
              <a href="#" className="text-[#00a651] font-bold hover:underline uppercase text-sm tracking-wider">
                Read More
              </a>
            </div>
          </div>

          {/* Right Side: Study at AUB Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#00a651] rounded-sm p-10 text-center text-white shadow-xl relative overflow-hidden">
              {/* Decorative Corner Lines (Optional matching the image) */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/30"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/30"></div>

              {/* Logo/Icon Area */}
              <div className="mb-6 flex justify-center">
                <img 
                  src="https://aub.ac.bd/assets/images/logo/logo.png" 
                  alt="AUB Logo" 
                  className="h-24 w-auto brightness-0 invert" // এটি লোগোকে সাদা করে দেখাবে
                />
              </div>

              <h3 className="text-3xl font-serif font-bold mb-10">Study at AUB</h3>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button className="w-full py-4 px-6 border border-white/40 bg-white/10 hover:bg-white/20 transition-all font-semibold rounded-sm tracking-wide">
                  Search Result
                </button>
                <button className="w-full py-4 px-6 border border-white/40 bg-white/10 hover:bg-white/20 transition-all font-semibold rounded-sm tracking-wide">
                  Undergraduate Programs
                </button>
                <button className="w-full py-4 px-6 border border-white/40 bg-white/10 hover:bg-white/20 transition-all font-semibold rounded-sm tracking-wide">
                  Post Graduate Programs
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;