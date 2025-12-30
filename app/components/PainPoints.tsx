import { Zap, Layout, Smartphone } from 'lucide-react';

const PainPoints = () => {
  const points = [
    {
      title: "Lambat & Tidak Optimal",
      desc: "Lebih dari 70% pengunjung meninggalkan website yang membutuhkan waktu loading lebih dari 3 detik.",
      icon: <Zap className="text-orange-500" />
    },
    {
      title: "Tampilan Tidak Meyakinkan",
      desc: "Desain yang kurang rapi membuat brand terlihat tidak profesional dan menurunkan kepercayaan calon pelanggan.",
      icon: <Layout className="text-purple-500" />
    },
    {
      title: "Belum Mobile-Friendly",
      desc: "Mayoritas pengguna mengakses website lewat smartphone. Tanpa tampilan mobile yang baik, potensi pasar ikut hilang.",
      icon: <Smartphone className="text-green-500" />
    }
  ];

  return (
    <section className="py-20 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins text-white italic underline decoration-blue-500 underline-offset-8">
            Website Anda Sudah Membantu Bisnis, atau Justru Menghambatnya?
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-black border border-white/5 hover:border-blue-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{point.title}</h3>
              <p className="text-gray-400 leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
