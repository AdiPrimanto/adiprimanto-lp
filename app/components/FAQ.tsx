'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button 
        className="w-full py-6 flex justify-between items-center text-left" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        {isOpen ? <Minus size={20} className="text-blue-500" /> : <Plus size={20} className="text-gray-500" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Berapa lama proses pembuatan website?", a: "Durasi pengerjaan menyesuaikan dengan tingkat kompleksitas website. Untuk landing page standar, proses pengerjaan umumnya memakan waktu 7–14 hari kerja sejak kebutuhan disepakati." },
    { q: "Apakah saya bisa mengedit konten website sendiri nantinya?", a: "Fleksibilitas pengelolaan konten selalu disesuaikan dengan kebutuhan Anda. Anda bisa memilih website dengan CMS untuk kontrol penuh, atau website statis yang lebih ringan dengan dukungan perubahan konten dari saya kapan pun dibutuhkan." },
    { q: "Apakah website-nya sudah termasuk SEO?", a: "Ya. Setiap website dibangun dengan struktur SEO-ready, meliputi penggunaan heading yang tepat, meta tag teroptimasi, serta praktik teknis yang sesuai dengan standar terbaru Google." },
    { q: "Apakah ada biaya maintenance tahunan?", a: "Tidak ada biaya maintenance bulanan atau tahunan. Anda hanya perlu memperpanjang domain dan hosting setiap tahun. Selain itu, saya juga menyediakan bantuan teknis minor gratis selama 3 bulan pertama setelah website online." },
  ];

  return (
    <section id="faq" className="py-24 bg-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-12 italic underline decoration-blue-500 underline-offset-8">Pertanyaan yang Sering Diajukan</h2>
        <div className="space-y-2">
          {faqs.map((f, i) => <FAQItem key={i} question={f.q} answer={f.a} />)}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
