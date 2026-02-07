import React from "react";

const CampusLifeActivities = () => {
  // ডাটা অবজেক্ট যেখানে সব সেকশনের তথ্য আছে
  const campusData = [
    {
      sectionTitle: "Student Activities",
      items: [
        {
          id: 1,
          title: "Tree Plantation Day at AUB",
          img: "https://aub.ac.bd/assets/images/campus_life/tree_plantation.jpg",
        },
        {
          id: 2,
          title: "Cultural Fest of AUB",
          img: "https://aub.ac.bd/assets/images/campus_life/cultural_fest.jpg",
        },
        {
          id: 3,
          title: "Graduation Ceremony, Class of 2022",
          img: "https://aub.ac.bd/assets/images/campus_life/graduation.jpg",
        },
      ],
    },
    {
      sectionTitle: "AUB Facilities",
      items: [
        { id: 4, title: "Canteen", img: "https://via.placeholder.com/400x250" },
        { id: 5, title: "Hostel", img: "https://via.placeholder.com/400x250" },
        {
          id: 6,
          title: "Transportation",
          img: "https://via.placeholder.com/400x250",
        },
      ],
    },
    {
      sectionTitle: "AUB Sports",
      items: [
        {
          id: 7,
          title: "Football Tournament of International Students",
          img: "https://via.placeholder.com/400x250",
        },
        {
          id: 8,
          title: "Cricket Festival at AUB cricket",
          img: "https://via.placeholder.com/400x250",
        },
        {
          id: 9,
          title: "Indoor Games of AUB",
          img: "https://via.placeholder.com/400x250",
        },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      {/* উপরের ডেসক্রিপশন পার্ট */}
      <div className="text-gray-700 space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="text-gray-400">-</span> Campus Life{" "}
          <span className="text-gray-400">-</span>
        </h2>
        <p className="leading-relaxed text-justify text-[15px]">
          AUB Campus is not just about studying only – students can balance
          learning and personal-life here. Students will have opportunities to
          take up activities like sports and games, debate and presentation,
          community services and moral development and so on. AUB has different
          students' societies/teams/clubs to emphasize the wholeness of the
          university experiences through synchronized development of their body,
          mind and spirit.
        </p>
        <p className="leading-relaxed text-justify text-[15px]">
          Here students get opportunities to develop their interpersonal skills
          by working in groups; they are also able to develop their
          communication, organizational and leadership skills. Through the
          clubs/societies the students can enhance their abilities which can
          make them able to perform their responsibilities properly to become
          competent global citizens.
        </p>
      </div>

      {/* ডাইনামিক সেকশন জেনারেটর (Activities, Facilities, Sports) */}
      {campusData.map((section, index) => (
        <section key={index} className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <span className="text-gray-400">-</span> {section.sectionTitle}{" "}
            <span className="text-gray-400">-</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {section.items.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                {/* ইমেজ বক্স */}
                <div className="overflow-hidden rounded-sm shadow-sm border border-gray-100 aspect-video bg-gray-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* টাইটেল - গ্রিন কালার */}
                <h3 className="mt-4 text-center text-[#00a651] font-bold text-lg leading-snug group-hover:underline px-2">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default CampusLifeActivities;
