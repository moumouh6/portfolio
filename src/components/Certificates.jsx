function Certificates() {
  const certificates = [
    {
      title: "Learn Bioinformatics - Beginner to Master Through Projects",
      company: "Udemy",
      date: "2025",
    },
  ];

  return (
    <section id="certificates" className="text-white py-20 px-6">
      <h2 className="text-4xl font-bold mb-10 text-center">Certificates</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-[#11172b] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2">{cert.title}</h3>
            <p className="text-gray-300">
              {cert.company} — {cert.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
