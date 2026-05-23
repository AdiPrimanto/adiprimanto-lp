"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Asih Angger Fotografi",
    category: "Landing Page",
    impact: "Konversi & Penjualan Meningkat 50%",
    tags: ["Next.js", "Tailwind"],
    image: "/portfolio/porto1.png",
    url: null,
  },
  {
    title: "Nicofaart Furniture",
    category: "Landing Page",
    impact: "Brand Lebih Profesional & Lead Naik 50%",
    tags: ["Vue.js", "Nuxt"],
    image: "/portfolio/porto2.png",
    url: null,
  },
  {
    title: "SMPIPK — Muhammadiyah Delanggu",
    category: "Company Profile",
    impact: "Peningkatan Kunjungan Website",
    tags: ["WordPress", "SEO"],
    image: "/portfolio/porto3.webp",
    url: null,
  },
];

const Portfolio = () => (
  <section
    id="portfolio"
    className="section-padding"
    style={{
      background: "var(--color-bg)",
      borderTop: "1px solid var(--color-border)",
    }}
  >
    <div
      style={{ width: "78%", margin: "0 auto" }}
      className="max-lg:w-[88%] max-md:w-[92%]"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <div className="section-eyebrow">
            04 <span className="eyebrow-sep">/</span> PORTFOLIO
          </div>
          <h2
            className="font-display font-black tracking-[-0.02em] leading-[1.05] mt-3 mb-3"
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              color: "var(--color-white)",
            }}
          >
            Hasil Kerja Nyata.
          </h2>
          <p
            className="text-sm font-light"
            style={{ color: "var(--color-muted)" }}
          >
            Hasil kerja yang dirancang untuk mencapai tujuan bisnis, bukan
            sekadar tampil menarik.
          </p>
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <a
          href="https://portfolio-adiprimanto.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 shrink-0 transition-all duration-300"
          style={{ textDecoration: "none" }}
        >
          <span
            className="font-code text-[10px] tracking-[0.08em] px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(43,127,255,0.12)",
              border: "1px solid rgba(43,127,255,0.25)",
              color: "var(--color-primary-2)",
            }}
          >
            20+ Projects
          </span>
          <span
            className="inline-flex items-center gap-2 font-display font-semibold text-sm px-4 py-2 rounded-full transition-all duration-300"
            style={{
              border: "1px solid var(--color-border-2)",
              background: "var(--color-surface)",
              color: "var(--color-white)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(43,127,255,0.5)";
              e.currentTarget.style.background = "rgba(43,127,255,0.08)";
              e.currentTarget.style.color = "var(--color-primary-2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-border-2)";
              e.currentTarget.style.background = "var(--color-surface)";
              e.currentTarget.style.color = "var(--color-white)";
            }}
          >
            Lihat Semua Portfolio
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </a>
      </div>

      {/* Grid */}
      <div
        className="grid md:grid-cols-3"
        style={{
          gap: "2px",
          background: "var(--color-border)",
          border: "1px solid var(--color-border)",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        {projects.map((p, i) => (
          <div
            key={i}
            className="flex flex-col transition-all duration-300 group"
            style={{ background: "var(--color-bg)", cursor: "default" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--color-bg-3)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--color-bg)")
            }
          >
            {/* Image */}
            <div
              className="relative overflow-hidden"
              style={{
                aspectRatio: "16/10",
                background: "var(--color-surface)",
              }}
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top group-hover:scale-[1.06] transition-transform duration-500"
                style={{ filter: "brightness(0.9)" }}
              />

              {/* Category badge */}
              <div
                className="absolute top-3 left-3 font-code text-[10px] tracking-[0.06em] z-10"
                style={{
                  padding: "4px 10px",
                  background: "rgba(12, 12, 14, 0.85)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid var(--color-border-2)",
                  borderRadius: "100px",
                  color: "var(--color-primary-2)",
                }}
              >
                {p.category}
              </div>
            </div>

            {/* Info */}
            <div
              className="flex flex-col gap-2 flex-1"
              style={{
                padding: "20px 20px 24px",
                borderTop: "1px solid var(--color-border)",
              }}
            >
              <h4
                className="font-display font-bold leading-[1.3] tracking-[-0.01em]"
                style={{ fontSize: "15px", color: "var(--color-white)" }}
              >
                {p.title}
              </h4>
              <p
                className="text-xs leading-[1.6] font-light"
                style={{ color: "var(--color-muted)" }}
              >
                {p.impact}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-code text-[10px] tracking-[0.04em] px-2.5 py-0.5 rounded-full"
                    style={{
                      background: "var(--color-primary-subtle)",
                      border: "1px solid rgba(43, 127, 255, 0.15)",
                      color: "var(--color-primary-2)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
