const Stats = () => {
  const data = [
    { label: "PROFESSIONAL TEACHER", value: "225" },
    { label: "ACADEMIC DEPARTMENTS", value: "13" },
    { label: "TOTAL PROGRAMS", value: "23" },
    { label: "REGISTERED STUDENTS", value: "103,934" }
  ];

  return (
    <div className="bg-[#2d2d2d] py-16 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {data.map((item, i) => (
          <div key={i} className="text-center">
            <h3 className="text-4xl md:text-5xl font-black mb-2">{item.value}</h3>
            <p className="text-[10px] md:text-xs uppercase tracking-[3px] opacity-60 font-bold">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;