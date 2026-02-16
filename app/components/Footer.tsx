import { ArrowRight, Heart } from 'lucide-react';

const Footer = () => (
  <footer className="pt-24 pb-12 bg-black border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 mb-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">Siap Membawa Bisnis Anda ke Level Selanjutnya?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">Website profesional membantu membangun kepercayaan, meningkatkan visibilitas, dan mendorong pertumbuhan bisnis secara berkelanjutan.</p>
          <a href="https://wa.me/6285727346620?text=Halo%20Adi%20Primanto,%20saya%20ingin%20membuat%20website%20untuk%20bisnis%20saya." className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform shadow-2xl" target="_blank" rel="noopener noreferrer">
            Mulai Konsultasi Gratis <ArrowRight size={24} className='hidden md:inline' />
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img src="/adi.webp" alt="Logo" className="w-10 h-10 rounded-full object-cover object-top" />
            <span className="text-xl font-bold tracking-tight text-white font-poppins">ADI <span className="text-blue-500">PRIMANTO</span></span>
          </div>
          <p className="text-gray-500 leading-relaxed max-w-sm mt-2">Membantu bisnis membangun kredibilitas digital melalui website modern yang dioptimasi untuk konversi dan performa.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Navigasi</h4>
          <ul className="space-y-4 text-gray-500">
            <li><a href="#services" className="hover:text-blue-500 transition-colors">Layanan</a></li>
            <li><a href="#portfolio" className="hover:text-blue-500 transition-colors">Portfolio</a></li>
            <li><a href="#process" className="hover:text-blue-500 transition-colors">Proses</a></li>
            <li><a href="#faq" className="hover:text-blue-500 transition-colors">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Sosial Media</h4>
          <ul className="space-y-4 text-gray-500">
            <li><a href="https://www.linkedin.com/in/adi-primanto/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/hi.adiprimanto/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">Instagram</a></li>
            <li><a href="https://www.tiktok.com/@adi_primanto?lang=id-ID" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">Tiktok</a></li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Adi Primanto. All Rights Reserved.</p>
        <div className="flex items-center md:items-start gap-4 md:gap-6 flex-col md:flex-row">
          <span>Yogyakarta, Indonesia</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
