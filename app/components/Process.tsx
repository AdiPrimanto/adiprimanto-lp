'use client';

const steps = [
  {
    num: '01',
    title: 'Brief & Analisis',
    desc: 'Diskusi awal untuk memahami tujuan bisnis, target audiens, dan kebutuhan website agar solusi yang dibuat benar-benar relevan.',
  },
  {
    num: '02',
    title: 'Desain & Perencanaan',
    desc: 'Menyusun struktur halaman, alur pengguna, dan desain visual yang modern, mudah digunakan, serta selaras dengan brand Anda.',
  },
  {
    num: '03',
    title: 'Pengembangan Website',
    desc: 'Proses pengembangan website dengan standar performa tinggi, SEO-friendly, responsif, dan aman di semua perangkat.',
  },
  {
    num: '04',
    title: 'Launch & Support',
    desc: 'Website diuji, diluncurkan, dan siap digunakan. Saya juga menyediakan dukungan teknis serta panduan penggunaan setelah website online.',
  },
];

const Process = () => (
  <section id="process" className="section-padding" style={{ background: 'var(--color-bg-2)', borderTop: '1px solid var(--color-border)' }}>
    <div style={{ width: '78%', margin: '0 auto' }} className="max-lg:w-[88%] max-md:w-[92%]">

      {/* Eyebrow */}
      <div className="section-eyebrow">
        05 <span className="eyebrow-sep">/</span> PROSES KERJA
      </div>

      <h2
        className="font-display font-black tracking-[-0.02em] leading-[1.05] mb-3"
        style={{ fontSize: 'clamp(32px, 4vw, 52px)', color: 'var(--color-white)' }}
      >
        Transparan &amp; <span className="gradient-text">Terstruktur.</span>
      </h2>
      <p className="text-sm font-light mb-16 max-w-md" style={{ color: 'var(--color-muted)' }}>
        Proses yang jelas membantu proyek berjalan lancar, tepat waktu, dan sesuai ekspektasi sejak awal.
      </p>

      {/* Steps grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5"
        style={{ background: 'var(--color-border)', border: '1px solid var(--color-border)', borderRadius: '16px', overflow: 'hidden' }}
      >
        {steps.map((s, i) => (
          <div
            key={i}
            className="flex flex-col gap-5 transition-all duration-300 group"
            style={{ background: 'var(--color-bg)', padding: '32px 28px' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-bg-3)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--color-bg)')}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
              style={{ background: 'var(--color-bg-2)', border: '1px solid var(--color-border)' }}
            >
              <span className="font-display font-black text-xl gradient-text">{s.num}</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3
                className="font-display font-bold leading-[1.2] tracking-[-0.01em]"
                style={{ fontSize: '16px', color: 'var(--color-white)' }}
              >
                {s.title}
              </h3>
              <p className="text-xs leading-[1.75] font-light" style={{ color: 'var(--color-muted)' }}>
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
