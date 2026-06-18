function Features() {

  const features = [
    {
      title: "Mock Interviews",
      desc: "Practice real interview scenarios."
    },
    {
      title: "Resume Reviews",
      desc: "Improve your resume instantly."
    },
    {
      title: "HR Questions",
      desc: "Prepare for common HR rounds."
    },
    {
      title: "Technical Prep",
      desc: "Java, Python, SQL and more."
    }
  ];

  return (
    <section className="px-10 pb-20">

      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Features
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        {features.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-3">
              {item.title}
            </h3>

            <p className="text-slate-300">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Features;