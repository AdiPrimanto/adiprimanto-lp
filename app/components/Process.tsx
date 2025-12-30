const Process = () => {
  const steps = [
    { title: "Brief & Analisis", desc: "Diskusi awal untuk memahami tujuan bisnis, target audiens, dan kebutuhan website agar solusi yang dibuat benar-benar relevan." },
    { title: "Desain & Perencanaan", desc: "Menyusun struktur halaman, alur pengguna, dan desain visual yang modern, mudah digunakan, serta selaras dengan brand Anda." },
    { title: "Pengembangan Website", desc: "Proses pengembangan website dengan standar performa tinggi, SEO-friendly, responsif, dan aman di semua perangkat." },
    { title: "Launch & Support", desc: "Website diuji, diluncurkan, dan siap digunakan. Saya juga menyediakan dukungan teknis serta panduan penggunaan setelah website online." },
  ];

  return (
    <section id="process" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-20 leading-tight">Proses Kerja <span className="text-blue-500">Transparan & Terstruktur.</span></h2>
        <div className="relative">
          {/* Desktop Line */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-white/10 -z-10" />
          
          <div className="grid md:grid-cols-4 gap-12">
            {steps.map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl group-hover:shadow-blue-600/20">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-center mt-16 text-gray-500 text-sm">
          Proses yang jelas membantu proyek berjalan lancar, tepat waktu, dan sesuai ekspektasi sejak awal.
        </p>
      </div>
    </section>
  );
};

export default Process;
