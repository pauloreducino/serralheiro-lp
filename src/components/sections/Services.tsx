"use client";

import { useInView } from "@/hooks/useInView";
import { WHATSAPP_URL } from "@/lib/utils";

const services = [
  {
    icon: "🚪",
    title: "Portões Automáticos",
    description:
      "Portões deslizantes e basculantes com automação completa. Motores de qualidade, controle remoto e sensor de segurança.",
    tags: ["Residencial", "Comercial", "Industrial"],
    popular: true,
  },
  {
    icon: "🔒",
    title: "Grades de Segurança",
    description:
      "Grades em ferro e alumínio para janelas, portas e escadas. Design moderno sem abrir mão da proteção.",
    tags: ["Ferro", "Alumínio", "Sob medida"],
    popular: false,
  },
  {
    icon: "🏗️",
    title: "Estruturas Metálicas",
    description:
      "Coberturas, mezaninos, galpões e estruturas especiais. Projetos robustos com qualidade construtiva.",
    tags: ["Coberturas", "Galpões", "Mezaninos"],
    popular: false,
  },
  {
    icon: "🛡️",
    title: "Guarda-corpos",
    description:
      "Corrimãos e guarda-corpos em aço inox, ferro e vidro temperado. Elegância e segurança em cada detalhe.",
    tags: ["Inox", "Ferro", "Com vidro"],
    popular: false,
  },
  {
    icon: "🚧",
    title: "Escadas Metálicas",
    description:
      "Escadas retas, caracol e flutuantes. Execução impecável com materiais de alta durabilidade.",
    tags: ["Caracol", "Reta", "Flutuante"],
    popular: false,
  },
  {
    icon: "🔧",
    title: "Manutenção & Reforma",
    description:
      "Revisão, pintura anticorrosiva, restauração de portões, grades e estruturas danificadas ou enferrujadas.",
    tags: ["Revisão", "Pintura", "Restauração"],
    popular: false,
  },
];

export default function Services() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-iron relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 metal-texture opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-forge/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-forge" />
            <span className="text-forge text-xs font-bold tracking-[0.3em] uppercase">
              O Que Fazemos
            </span>
            <div className="h-px w-8 bg-forge" />
          </div>
          <h2
            className="font-display text-[clamp(2.5rem,6vw,4.5rem)] text-white leading-[0.95] tracking-wider"
            style={{ fontFamily: "var(--font-display), 'Bebas Neue', impact, sans-serif" }}
          >
            NOSSOS{" "}
            <span className="gradient-text">SERVIÇOS</span>
          </h2>
          <p className="text-steel-400 text-lg mt-4 max-w-xl mx-auto">
            Do projeto à instalação, realizamos trabalhos completos com materiais
            de primeira linha e acabamento impecável.
          </p>
        </div>

        {/* Services grid */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`relative bg-iron-mid border rounded-sm p-7 card-lift group transition-all duration-700 ${
                service.popular
                  ? "border-forge/40 shadow-forge"
                  : "border-iron-border hover:border-forge/20"
              } ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute -top-3 right-5">
                  <span className="bg-forge text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                    + Solicitado
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-xl mb-3 group-hover:text-forge transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-steel-400 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 bg-iron border border-iron-border rounded text-steel-500 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-forge/0 via-forge/60 to-forge/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-steel-400 mb-5 text-base">
            Não encontrou o que precisa? Entre em contato — fazemos projetos
            especiais.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-forge inline-flex items-center gap-3 px-8 py-4 rounded-sm text-base font-bold tracking-wide"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pedir Orçamento Grátis
          </a>
        </div>
      </div>
    </section>
  );
}
