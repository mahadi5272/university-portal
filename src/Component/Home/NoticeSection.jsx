import { FaRegCalendarAlt, FaArrowRight } from "react-icons/fa";

const NoticeSection = () => {
  const notices = [
    { date: "25 Oct", title: "Registration of AUB CSE Carnival 2025 is now open" },
    { date: "12 Oct", title: "Spring 2025 Exam Routine Schedule - Check Your Portal" },
  ];

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-3xl font-bold border-l-8 border-[#006a4e] pl-4 mb-8 text-gray-800 uppercase">Notices</h2>
        <div className="space-y-4">
          {notices.map((n, i) => (
            <div key={i} className="flex items-center gap-6 p-4 bg-white shadow-sm border border-gray-100 rounded-xl hover:shadow-md transition-all group">
              <div className="bg-[#006a4e] text-white p-3 rounded-lg text-center min-w-[80px]">
                <span className="block text-xl font-bold">{n.date.split(' ')[0]}</span>
                <span className="text-xs uppercase">{n.date.split(' ')[1]}</span>
              </div>
              <p className="font-semibold text-gray-700 group-hover:text-[#006a4e] transition-colors">{n.title}</p>
            </div>
          ))}
        </div>
        <button className="mt-6 flex items-center gap-2 text-[#006a4e] font-bold hover:underline">See All <FaArrowRight /></button>
      </div>

      <div className="bg-green-50 rounded-2xl p-8 flex flex-col justify-center border-2 border-dashed border-green-200">
        <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-2">
           <FaRegCalendarAlt className="text-yellow-600"/> গুরুত্বপূর্ণ তারিখ
        </h3>
        <ul className="space-y-4 text-gray-600">
          <li className="flex justify-between border-b pb-2"><span>ভর্তির শেষ তারিখ:</span> <b>২০ ডিসেম্বর</b></li>
          <li className="flex justify-between border-b pb-2"><span>ক্লাস শুরু:</span> <b>০১ জানুয়ারি</b></li>
        </ul>
      </div>
    </div>
  );
};

export default NoticeSection;