"use client";
import { motion } from "framer-motion";
import {
  Code2,
  Coffee,
  Rocket,
  MapPin,
  Briefcase,
  Calendar,
} from "lucide-react";

const techStack = [
  { name: "React", color: "from-blue-400 to-blue-700" },
  { name: "Next.js", color: "from-blue-400 to-blue-700" },
  { name: "Vue.js", color: "from-blue-400 to-blue-700" },
  { name: "Nuxt.js", color: "from-blue-400 to-blue-700" },
  { name: "TypeScript", color: "from-blue-400 to-blue-700" },
  { name: "JavaScript", color: "from-blue-400 to-blue-700" },
  { name: "Tailwind CSS", color: "from-blue-400 to-blue-700" },
  { name: "HTML/CSS", color: "from-blue-400 to-blue-700" },
  { name: "Wordpress", color: "from-blue-400 to-blue-700" },
  // { name: 'React', color: 'from-cyan-400 to-blue-500' },
  // { name: 'Next.js', color: 'from-gray-400 to-gray-600' },
  // { name: 'Vue.js', color: 'from-green-400 to-emerald-500' },
  // { name: 'Nuxt.js', color: 'from-green-500 to-teal-500' },
  // { name: 'TypeScript', color: 'from-blue-400 to-blue-600' },
  // { name: 'JavaScript', color: 'from-yellow-400 to-orange-500' },
  // { name: 'Tailwind CSS', color: 'from-cyan-400 to-teal-500' },
  // { name: 'HTML/CSS', color: 'from-orange-400 to-red-500' },
  // { name: 'Wordpress', color: 'from-blue-400 to-blue-600' },
];

const stats = [
  { icon: <Calendar size={20} />, value: "5+", label: "Tahun Pengalaman" },
  { icon: <Briefcase size={20} />, value: "20+", label: "Proyek Selesai" },
  { icon: <Code2 size={20} />, value: "50K+", label: "Baris Kode" },
];

const funFacts = [
  { icon: <Coffee size={18} />, text: "Vue & React enthusiast" },
  { icon: <Code2 size={18} />, text: "CSS adalah seni, bukan sekadar styling" },
  {
    icon: <Rocket size={18} />,
    text: "Selalu mikir: “gimana caranya website ini bantu bisnis?”",
  },
];

const About = () => (
  <section id="about" className="py-24 relative overflow-hidden">
    {/* Background Effects */}
    <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] -z-10" />
    <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] -z-10" />

    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-blue-500 font-semibold text-sm tracking-wider uppercase">
          Tentang Saya
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
          Orang di Balik Layar
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Photo & Stats */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Photo Container */}
          <div className="relative max-w-md mx-auto lg:mx-0">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-blue-500/30 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl -z-10" />

            {/* Photo Placeholder - Replace dengan foto asli */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-800 to-gray-900 aspect-[4/5]">
              {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
                <div className="w-32 h-32 rounded-full bg-gray-700 mb-4 flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
                <p className="text-sm">Foto Anda di sini</p>
              </div> */}
              {/* Uncomment dan ganti path ketika foto sudah ada */}
              <img
                src="/adi.webp"
                alt="Adi Primanto"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Location Badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gray-900 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 shadow-xl">
              <MapPin size={16} className="text-blue-500 shrink-0" />
              <span className="text-white text-sm font-medium">
                Yogyakarta, Indonesia
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 rounded-xl bg-white/5 border border-white/5"
              >
                <div className="text-blue-500 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs md:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Halo! Saya{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">
                Adi Primanto
              </span>
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Seorang <strong className="text-white">Software Engineer</strong>{" "}
              dengan pengalaman lebih dari{" "}
              <strong className="text-blue-400">5 tahun</strong> membangun
              website dan aplikasi web yang tidak hanya cantik, tapi juga
              fungsional dan performant.
            </p>
          </div>

          <p className="text-gray-400 leading-relaxed">
            Saat ini bekerja di salah satu startup di Yogyakarta, saya terbiasa
            menghadapi tantangan membangun produk digital dari nol hingga
            digunakan ribuan pengguna. Pengalaman ini mengajarkan saya
            pentingnya kode yang bersih, performa yang optimal, dan user
            experience yang seamless.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Di luar jam kerja, saya menyalurkan passion saya untuk membantu UMKM
            dan bisnis lokal hadir secara profesional di dunia digital melalui
            website yang didesain khusus untuk kebutuhan mereka.
          </p>

          {/* Tech Stack */}
          <div className="pt-4">
            <h4 className="text-white font-semibold mb-4">
              Tech Stack Favorit:
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${tech.color} text-white shadow-lg`}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Fun Facts */}
          <div className="pt-4">
            <h4 className="text-white font-semibold mb-4">Fun Facts:</h4>
            <div className="space-y-3">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <span className="text-blue-400">{fact.icon}</span>
                  <span>{fact.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
