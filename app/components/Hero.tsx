'use client';

import Image from 'next/image';
import { MessageCircle, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const avatars: string[] = [
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1719603785926-84d214438120?q=80&w=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542178243-bc20204b769f?q=80&w=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1700126761911-84f19978e8bb?q=80&w=80&auto=format&fit=crop',
];

const Hero = () => (
  <section id="home" className="relative pt-24 pb-20 md:pb-24 overflow-hidden">
    {/* Glow Effects */}
    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[150px] -z-10" />

    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-sm font-semibold mb-6">
          Web Development Specialist
        </span>
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 font-poppins text-white">
          Ubah Pengunjung Menjadi <span className="text-blue-500">Pelanggan Setia.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed font-inter max-w-lg">
          Saya membantu bisnis membangun website cepat, profesional, dan teroptimasi agar pengunjung tidak hanya datang tapi juga melakukan aksi.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/6285727346620?text=Halo%20Adi%20Primanto,%20saya%20ingin%20membuat%20website%20untuk%20bisnis%20saya." target="_blank" rel="noopener noreferrer" className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-3">
            Konsultasi Gratis <MessageCircle className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#portfolio" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full text-lg font-bold transition-all text-center">
            Lihat Hasil Kerja
          </a>
        </div>
        
        <div className="mt-12 flex items-center gap-4 text-gray-500 border-t border-white/5 pt-8">
          <div className="flex -space-x-3">
            {avatars.map((avatar, index) => (
              <Image 
                key={index} 
                src={avatar} 
                alt={`Client ${index + 1}`} 
                width={40} 
                height={40} 
                className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 object-cover"
                unoptimized
              />
            ))}
          </div>
          <p className="flex-1 text-sm font-medium">Dipercaya oleh <span className="text-white">20+ Klien</span> dari berbagai industri</p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        {/* Project Screenshot */}
        <div className="relative z-10 rounded-2xl border border-white/10 shadow-2xl overflow-hidden group">
          <Image 
            src="/project-screenshot.png" 
            alt="Asih Angger Fotografi - Featured Project" 
            width={600}
            height={400}
            priority
            className="w-full h-auto md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        
        {/* Metric Overlays */}
        {/* Page Speed - Top Right */}
        <div className="absolute -top-4 md:top-12 -right-4 bg-black/90 backdrop-blur-xl border border-white/10 px-4 py-2.5 rounded-xl shadow-2xl z-20 flex items-center gap-2">
          <Zap size={18} className="text-yellow-400" />
          <div>
            <p className="text-xs text-gray-400">Page Speed</p>
            <p className="text-sm font-bold text-white">98+</p>
          </div>
        </div>

        {/* Conversion - Bottom Right */}
        <div className="absolute -bottom-4 -right-4 bg-black/90 backdrop-blur-xl border border-white/10 px-4 py-2.5 rounded-xl shadow-2xl z-20 flex items-center gap-2">
          <span className="text-green-400 text-lg">📈</span>
          <div>
            <p className="text-xs text-gray-400">Conversion</p>
            <p className="text-sm font-bold text-green-400">↑ 32%</p>
          </div>
        </div>

        {/* SEO Score - Bottom Left */}
        <div className="absolute -bottom-4 -left-4 bg-black/90 backdrop-blur-xl border border-white/10 px-4 py-2.5 rounded-xl shadow-2xl z-20 flex items-center gap-2">
          <span className="text-blue-400 text-lg">🔍</span>
          <div>
            <p className="text-xs text-gray-400">SEO Score</p>
            <p className="text-sm font-bold text-blue-400">A</p>
          </div>
        </div>

        {/* Tech Stack - Top Left */}
        {/* <div className="absolute -top-4 md:top-12 -left-4 bg-black/90 backdrop-blur-xl border border-white/10 px-4 py-2.5 rounded-xl shadow-2xl z-20 block">
          <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1.5">Tech Stack</p>
          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded">Vue</span>
            <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs font-medium rounded">Nuxt</span>
            <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded">Tailwind</span>
            <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs font-medium rounded">TS</span>
          </div>
        </div> */}
      </motion.div>
    </div>
  </section>
);

export default Hero;
