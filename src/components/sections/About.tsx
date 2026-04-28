"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { Shield, Award, Clock, Wrench } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    label: "Qualidade Garantida",
    desc: "Materiais de primeira linha com garantia de 1 ano em todos os serviços.",
  },
  {
    icon: Award,
    label: "+15 Anos de Expertise",
    desc: "Décadas de experiência no mercado, com centenas de clientes satisfeitos.",
  },
  {
    icon: Clock,
    label: "Prazo Cumprido",
    desc: "Respeitamos seu tempo. Entregamos no prazo combinado, sempre.",
  },
  {
    icon: Wrench,
    label: "Sob Medida",
    desc: "Cada projeto é único. Criamos soluções personalizadas para você.",
  },
];

export default function About() {
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.2 });
  const { ref: imgRef, isInView: imgInView } = useInView({ threshold: 0.2 });
  const { ref: cardsRef, isInView: cardsInView } = useInView({ threshold: 0.1 });

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-iron-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-forge/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-forge/3 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 metal-texture opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image side */}
          <div
            ref={imgRef as React.RefObject<HTMLDivElement>}
            className={`relative transition-all duration-900 ${
              imgInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Main photo */}
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-steel-lg">
              <Image
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=85"
                alt="Carlos Silva - Serralheiro profissional trabalhando"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-iron/60 to-transparent" />

              {/* Name badge on image */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-iron/90 backdrop-blur-sm border border-white/10 rounded-sm px-5 py-4">
                  <div className="text-white font-bold text-lg">Carlos Silva</div>
                  <div className="text-forge text-sm font-medium">
                    Fundador & Mestre Serralheiro
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-forge/40 rounded-sm" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-forge/40 rounded-sm" />

            {/* Experience badge */}
            <div className="absolute -right-5 top-1/3 bg-forge rounded-sm p-5 shadow-forge text-center hidden lg:block">
              <div
                className="font-display text-4xl text-white leading-none"
                style={{ fontFamily: "var(--font-display), 'Bebas Neue', impact, sans-serif" }}
              >
                15+
              </div>
              <div className="text-white/80 text-xs font-bold tracking-wide uppercase mt-1">
                Anos
              </div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <div
              ref={titleRef as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-700 ${
                titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Label */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-forge" />
                <span className="text-forge text-xs font-bold tracking-[0.3em] uppercase">
                  Nossa História
                </span>
              </div>

              {/* Title */}
              <h2
                className="font-display text-[clamp(2.5rem,5vw,4rem)] text-white leading-[0.95] tracking-wider mb-6"
                style={{ fontFamily: "var(--font-display), 'Bebas Neue', impact, sans-serif" }}
              >
                MAIS DE UMA DÉCADA{" "}
                <span className="gradient-text">FORJANDO</span>{" "}
                QUALIDADE
              </h2>

              {/* Story paragraphs */}
              <div className="space-y-4 text-steel-300 leading-relaxed text-base">
                <p>
                  Comecei na serralheria aos 16 anos, como aprendiz do meu pai.
                  Aprendi que trabalho com metal exige paciência, precisão e
                  respeito pelo material. Cada solda, cada dobra, cada acabamento
                  conta a história de quem o fez.
                </p>
                <p>
                  Depois de mais de 15 anos trabalhando em grandes obras e
                  projetos residenciais pela Grande São Paulo, fundei a{" "}
                  <span className="text-forge font-semibold">
                    Ferro Forte Serralheria
                  </span>{" "}
                  com um único propósito: entregar trabalhos que resistem ao
                  tempo e superam expectativas.
                </p>
                <p>
                  Hoje, atendo famílias e empresas que valorizam qualidade real —
                  não a mais barata, mas a melhor relação entre custo, durabilidade
                  e beleza.
                </p>
              </div>
            </div>

            {/* Highlight cards */}
            <div
              ref={cardsRef as React.RefObject<HTMLDivElement>}
              className={`grid grid-cols-2 gap-4 mt-10 transition-all duration-700 ${
                cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {highlights.map((item, i) => (
                <div
                  key={item.label}
                  className="bg-iron-mid border border-iron-border rounded-sm p-5 card-lift group"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="w-10 h-10 bg-forge/10 border border-forge/20 rounded-sm flex items-center justify-center mb-3 group-hover:bg-forge/20 transition-colors">
                    <item.icon className="w-5 h-5 text-forge" />
                  </div>
                  <div className="text-white font-bold text-sm mb-1">
                    {item.label}
                  </div>
                  <div className="text-steel-500 text-xs leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
