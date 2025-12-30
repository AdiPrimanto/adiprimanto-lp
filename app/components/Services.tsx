import { ArrowRight, Globe, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Landing Page",
      desc: "Fokus pada satu produk atau layanan untuk memaksimalkan konversi, baik leads maupun penjualan dengan struktur yang terbukti efektif.",
      icon: <ArrowRight className="text-blue-500" />
    },
    {
      title: "Company Profile",
      desc: "Website profesional untuk membangun kredibilitas brand, memperkuat kepercayaan, dan menyampaikan identitas bisnis secara elegan.",
      icon: <Globe className="text-blue-500" />
    },
    {
      title: "E-Commerce / Online Shop",
      desc: "Solusi toko online yang cepat, aman, dan mudah dikelola — dirancang untuk memberikan pengalaman belanja yang nyaman bagi pelanggan.",
      icon: <Zap className="text-blue-500" />
    },
    {
      title: "Custom Website",
      desc: "Pengembangan sistem web khusus seperti dashboard, SaaS, atau CRM yang disesuaikan sepenuhnya dengan kebutuhan dan alur bisnis Anda.",
      icon: <ShieldCheck className="text-blue-500" />
    },
    {
      title: "AI & Automation",
      desc: "Integrasi teknologi AI untuk mengotomatisasi proses bisnis, meningkatkan respons pelanggan, dan menghemat waktu operasional.",
      icon: <ShieldCheck className="text-blue-500" />
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Solusi Digital <br/><span className="text-blue-500">Tanpa Kompromi.</span></h2>
            <h5 className="text-white italic font-bold mb-4">Dirancang untuk Performa, Kepercayaan, dan Pertumbuhan Bisnis.</h5>
            <p className="text-gray-400 text-lg mb-8">Setiap website dibangun dengan pendekatan strategis dan tech-stack modern agar tidak hanya terlihat bagus, tapi juga bekerja untuk bisnis Anda.</p>
            <div className="space-y-4">
              {['Optimasi SEO Terintegrasi', 'Responsive di Semua Perangkat', 'Performa Tinggi & Keamanan Terjaga', 'Konsultasi & Support Berkelanjutan'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 size={20} className="text-blue-500" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            {services.map((s, i) => (
              <div key={i} className="relative group p-6 rounded-2xl border border-white/5 hover:bg-white/5 transition-all">
                <div className="absolute -top-4 -left-4 w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full">
                  {i + 1}
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{s.title}</h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">{s.icon}</div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
