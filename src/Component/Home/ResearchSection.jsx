import React from 'react';

const ResearchSection = () => {
  const researchData = [
    {
      id: 1,
      title: "A cost-effective ECG monitoring in rural areas: leveraging artificial neural networks for efficient healthcare solutions",
      author: "Md. Obaidur Rahaman (Associate Professor, Dept. of CSE, AUB), M. A. Kashem",
      journal: "Bulletin of Electrical Engineering and Informatics",
      date: "Thursday 06 Feb, 2025",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_L3jVjRk0vYpT6S9m8iT6Zt6S9m8iT6Zt6S9m8iT6Zt6S", // Placeholder ECG image
    },
    {
      id: 2,
      title: "Bangla Speech Emotion Detection using Machine Learning Ensemble Methodst research",
      author: "Roy D Gregori Ayon, Md. Sanaullah Rabbi, Umme Habiba, Maoyejatun Hasana (Assistant Professor, Dept of CSE, AUB)...",
      date: "Thursday 02 Jan, 2025",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6S9m8iT6Zt6S9m8iT6Zt6S9m8iT6Zt6S9m8iT6Zt6S", // Placeholder Speech image
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Published Researches */}
          <div className="lg:col-span-7">
            <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-tight">Published Researches</h2>
                <p className="text-gray-500 text-sm mt-1 italic">Recent research activities of AUB</p>
              </div>
              <button className="text-[10px] font-bold border border-gray-300 px-3 py-1 rounded hover:bg-gray-50 transition-all uppercase">
                View All
              </button>
            </div>

            <div className="space-y-8">
              {researchData.map((item) => (
                <div key={item.id} className="flex flex-col md:flex-row gap-5 group cursor-pointer">
                  <div className="md:w-1/3 h-32 overflow-hidden rounded shadow-sm">
                    <img 
                      src={item.image} 
                      alt="research" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-sm md:text-[15px] font-bold text-[#003d2b] leading-snug group-hover:text-[#00a651] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 mt-2">
                      <span className="font-semibold">Author:</span> {item.author}
                    </p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-[10px] text-gray-400 flex items-center gap-1">
                        📅 {item.date}
                      </span>
                      <button className="text-[#00a651] font-bold text-[11px] hover:underline">Read More</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Empirical Research Project */}
          <div className="lg:col-span-5">
            <div className="mb-6 border-b border-gray-100 pb-4">
              <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-tight">Empirical Research Project</h2>
              <p className="text-gray-500 text-sm mt-1">A Pioneering Drive to Enhance Research Activities at AUB</p>
            </div>

            <div className="relative bg-gray-50 p-2 rounded-lg shadow-inner">
              {/* Collage Image Area */}
              <div className="grid grid-cols-2 gap-2 overflow-hidden rounded">
                <img src="https://via.placeholder.com/200x150" className="w-full h-24 object-cover" alt="event1" />
                <img src="https://via.placeholder.com/200x150" className="w-full h-24 object-cover" alt="event2" />
                <img src="https://via.placeholder.com/200x150" className="w-full h-24 object-cover" alt="event3" />
                <img src="https://via.placeholder.com/200x150" className="w-full h-24 object-cover" alt="event4" />
              </div>
              
              {/* Overlay Tags */}
              <div className="mt-4 flex justify-center gap-3 text-[9px] font-bold text-gray-400 uppercase tracking-widest border-t border-gray-200 pt-3">
                <span>Funding</span> | <span>Seminar</span> | <span>Publications</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#f3f7f5] border-l-4 border-[#00a651]">
                <p className="text-xs text-gray-600 leading-relaxed italic">
                    "AUB encourages faculty and students to engage in meaningful research that impacts society locally and globally."
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResearchSection;