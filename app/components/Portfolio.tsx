import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    { title: "Asih Angger Fotografi", category: "Fotografi", impact: "Konversi & Penjualan Meningkat 50%", badge: "Landing Page", image: "/portfolio/porto1.png" },
    { title: "Nicofaart Furniture", category: "Furniture", impact: "Brand Terlihat Lebih Profesional & Lead Naik 50%", badge: "Landing Page", image: "/portfolio/porto2.png" },
    { title: "SMPIPK - Muhammadiyah Delanggu", category: "Company Profile", impact: "Peningkatan Kunjungan Website", badge: "Company Profile", image: "/portfolio/porto3.webp" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Karya Terpilih</h2>
            <p className="text-gray-400 max-w-md">Hasil kerja yang dirancang untuk mencapai tujuan bisnis, bukan sekadar tampil menarik.</p>
          </div>
          <a 
            href="https://portfolio-adiprimanto.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500 font-bold hover:underline"
          >
            Jelajahi Seluruh Portfolio <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/10">
                <Image 
                  src={p.image} 
                  alt={p.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-fit object-contain group-hover:scale-110 transition-transform duration-500" 
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                   <p className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-1">{p.category}</p>
                   <h4 className="text-white text-xl font-bold">{p.title}</h4>
                </div> */}
              </div>
              <div className="flex justify-between items-center px-2">
                <div>
                  <h4 className="text-white font-bold">{p.title}</h4>
                  <p className="text-blue-500 text-sm font-medium">{p.impact}</p>
                  {/* <p className={`${i === 0 ? 'text-orange-500' : i === 1 ? 'text-purple-500' : i === 2 ? 'text-green-500' : 'text-gray-500'} border border-white/10 px-2 py-1 rounded-md w-fit text-xs font-medium mt-2`}>{p.badge}</p> */}
                  <p className="text-gray-500 border border-white/10 px-2 py-1 rounded-md w-fit text-xs font-medium mt-2">{p.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-gray-500 text-sm">
          Cuplikan project terpilih — lihat detail lengkap di halaman portfolio.
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
