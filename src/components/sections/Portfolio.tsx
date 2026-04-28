"use client";

import Image from "next/image";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { X, ZoomIn } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    src: "/portfolio/house-entrance-japan-building-with-fence.jpg",
    title: "Portão Deslizante Residencial",
    description:
      "Portão deslizante em ferro com automação completa. Motor Ppa, controle por aplicativo e sensor de presença. Acabamento em tinta eletrostática preto fosco.",
    category: "Portões",
    location: "Alphaville, SP",
  },
  {
    id: 2,
    src: "/portfolio/grades-de-protecao-contemporaneas.jpg",
    title: "Grades de Proteção Contemporâneas",
    description:
      "Grades em ferro quadrado com design contemporâneo. Barras verticais espaçadas 10cm para máxima segurança sem perder a estética.",
    category: "Grades",
    location: "Moema, SP",
  },
  {
    id: 3,
    src: "/portfolio/cobertura-metalica-balanco-04.jpg",
    title: "Cobertura Metálica Comercial",
    description:
      "Estrutura metálica para cobertura de estacionamento comercial com 400m². Perfis laminados, telha de policarbonato e calhas integradas.",
    category: "Estruturas",
    location: "Santo André, SP",
  },
  {
    id: 4,
    src: "/portfolio/guarda-corpo-inox-preco-1.jpg",
    title: "Guarda-corpo Inox com Vidro",
    description:
      "Guarda-corpo em aço inox 316 com vidro temperado de 10mm. Fixação por perfil U embutido no piso, sem aparecer os parafusos.",
    category: "Guarda-corpos",
    location: "Higienópolis, SP",
  },
  {
    id: 5,
    src: "/portfolio/portao-de-ferro-industrial.webp",
    title: "Portão Basculante Industrial",
    description:
      "Portão basculante de alta resistência para acesso de veículos pesados. Chapa dobrada 3mm com reforços internos e acionamento pneumático.",
    category: "Portões",
    location: "Guarulhos, SP",
  },
  {
    id: 6,
    src: "/portfolio/escada-caracol.jpg",
    title: "Escada Caracol em Ferro",
    description:
      "Escada caracol em ferro forjado com degraus em madeira maciça de imbuia. Corrimão artesanal em ferro redondo 1 polegada trabalhado à mão.",
    category: "Escadas",
    location: "Perdizes, SP",
  },
  {
    id: 7,
    src: "/portfolio/estrutura-para-area-gourmet.webp",
    title: "Estrutura para Área Gourmet",
    description:
      "Pérgola metálica com treliça articulada para área gourmet de 60m². Perfis de alumínio com abertura motorizada para controle de ventilação.",
    category: "Estruturas",
    location: "Morumbi, SP",
  },
  {
    id: 8,
    src: "/portfolio/Gradil-ornamental-classico.jpg",
    title: "Gradil Ornamental Clássico",
    description:
      "Gradil ornamental em ferro fundido com ponteiras decorativas e portal central de acesso. Inspirado na arquitetura europeia clássica.",
    category: "Grades",
    location: "Jardins, SP",
  },
];

/* ── Lightbox Modal ────────────────────────────────────────────────── */
function Lightbox({
  item,
  onClose,
}: {
  item: (typeof portfolioItems)[0];
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-iron-mid rounded-sm overflow-hidden shadow-steel-lg border border-iron-border"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-iron/80 rounded-sm flex items-center justify-center text-steel-300 hover:text-forge transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="grid lg:grid-cols-[1.4fr_1fr]">
          {/* Image */}
          <div className="relative aspect-video lg:aspect-auto lg:min-h-[400px]">
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
              quality={90}
            />
          </div>
          {/* Info */}
          <div className="p-8 flex flex-col justify-center">
            <span className="text-forge text-xs font-bold tracking-[0.2em] uppercase mb-3">
              {item.category}
            </span>
            <h3 className="text-white font-bold text-2xl mb-4 leading-tight">
              {item.title}
            </h3>
            <p className="text-steel-400 text-sm leading-relaxed mb-6">
              {item.description}
            </p>
            <div className="flex items-center gap-2 text-steel-500 text-xs">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4 text-forge"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {item.location}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Portfolio Card ────────────────────────────────────────────────── */
function PortfolioCard({
  item,
  onClick,
  delay,
}: {
  item: (typeof portfolioItems)[0];
  onClick: () => void;
  delay: string;
}) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`masonry-item portfolio-item relative overflow-hidden rounded-sm cursor-pointer group transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: delay }}
      onClick={onClick}
    >
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={80}
        />

        {/* Overlay */}
        <div className="portfolio-overlay absolute inset-0 flex flex-col justify-end p-5">
          {/* Category badge */}
          <span className="text-xs font-bold text-forge tracking-[0.2em] uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {item.category}
          </span>

          {/* Title */}
          <h3 className="text-white font-bold text-base leading-tight mb-2 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
            {item.title}
          </h3>

          {/* Description - shows on hover */}
          <p className="text-steel-300 text-xs leading-relaxed max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-400">
            {item.description}
          </p>

          {/* Location */}
          <div className="flex items-center gap-1.5 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-3.5 h-3.5 text-forge"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-steel-400 text-xs">{item.location}</span>
          </div>
        </div>

        {/* Zoom icon */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-iron/80 rounded-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ZoomIn className="w-4 h-4 text-forge" />
        </div>
      </div>
    </div>
  );
}

/* ── Portfolio Section ────────────────────────────────────────────── */
export default function Portfolio() {
  const [activeItem, setActiveItem] = useState<
    (typeof portfolioItems)[0] | null
  >(null);

  const categories = [
    "Todos",
    ...Array.from(new Set(portfolioItems.map((i) => i.category))),
  ];
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? portfolioItems
      : portfolioItems.filter((i) => i.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="py-24 lg:py-32 bg-iron-light relative overflow-hidden"
    >
      <div className="absolute inset-0 metal-texture opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-forge" />
            <span className="text-forge text-xs font-bold tracking-[0.3em] uppercase">
              Nosso Trabalho
            </span>
            <div className="h-px w-8 bg-forge" />
          </div>
          <h2
            className="font-display text-[clamp(2.5rem,6vw,4.5rem)] text-white leading-[0.95] tracking-wider mb-4"
            style={{
              fontFamily:
                "var(--font-display), 'Bebas Neue', impact, sans-serif",
            }}
          >
            PORTFÓLIO <span className="gradient-text">DE OBRAS</span>
          </h2>
          <p className="text-steel-400 text-base max-w-lg mx-auto">
            Cada projeto é único. Aqui estão alguns dos trabalhos que mais nos
            orgulhamos — clique para ver os detalhes.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm font-bold tracking-wide rounded-sm transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-forge text-white shadow-forge"
                  : "bg-iron border border-iron-border text-steel-400 hover:border-forge/30 hover:text-forge"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {filtered.map((item, i) => (
            <PortfolioCard
              key={item.id}
              item={item}
              onClick={() => setActiveItem(item)}
              delay={`${(i % 3) * 0.15}s`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeItem && (
        <Lightbox item={activeItem} onClose={() => setActiveItem(null)} />
      )}
    </section>
  );
}
