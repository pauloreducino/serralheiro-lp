"use client";

import { useInView } from "@/hooks/useInView";
import { WHATSAPP_URL, INSTAGRAM_URL, EMAIL } from "@/lib/utils";
import { Mail, MapPin, Clock, Phone } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(11) 99999-9999",
    href: WHATSAPP_URL,
    color: "#25D366",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@ferroforteserralheria.com.br",
    href: `mailto:${EMAIL}`,
    color: "#f97316",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Rua das Ferragens, 123 – Santo André, SP",
    href: "https://maps.google.com/?q=Santo+Andre+SP",
    color: "#f97316",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Seg–Sex: 07h30–18h | Sáb: 07h30–13h",
    href: null,
    color: "#f97316",
  },
];

export default function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="contato"
      className="py-24 lg:py-32 bg-iron-light relative overflow-hidden"
    >
      <div className="absolute inset-0 metal-texture opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-forge/5 blur-3xl pointer-events-none" />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-forge" />
            <span className="text-forge text-xs font-bold tracking-[0.3em] uppercase">
              Fale Conosco
            </span>
            <div className="h-px w-8 bg-forge" />
          </div>
          <h2
            className="font-display text-[clamp(2.5rem,6vw,4.5rem)] text-white leading-[0.95] tracking-wider"
            style={{ fontFamily: "var(--font-display), 'Bebas Neue', impact, sans-serif" }}
          >
            NOSSOS <span className="gradient-text">CONTATOS</span>
          </h2>
          <p className="text-steel-400 text-base mt-4 max-w-lg mx-auto">
            Estamos prontos para atender você. Escolha o canal mais conveniente.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10">
          {/* Left: contact cards + social */}
          <div
            className={`space-y-4 transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {contactItems.map((item, i) => (
              <div key={item.label} style={{ transitionDelay: `${i * 0.1}s` }}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-start gap-4 p-5 bg-iron-mid border border-iron-border rounded-sm card-lift group"
                  >
                    <div
                      className="w-11 h-11 rounded-sm flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}
                    >
                      <item.icon
                        className="w-5 h-5"
                        style={{ color: item.color }}
                      />
                    </div>
                    <div>
                      <div className="text-steel-500 text-xs font-medium uppercase tracking-wide mb-0.5">
                        {item.label}
                      </div>
                      <div className="text-white text-sm font-medium group-hover:text-forge transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-5 bg-iron-mid border border-iron-border rounded-sm">
                    <div className="w-11 h-11 bg-forge/10 border border-forge/20 rounded-sm flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-forge" />
                    </div>
                    <div>
                      <div className="text-steel-500 text-xs font-medium uppercase tracking-wide mb-0.5">
                        {item.label}
                      </div>
                      <div className="text-white text-sm font-medium">
                        {item.value}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Social links */}
            <div className="p-5 bg-iron-mid border border-iron-border rounded-sm">
              <div className="text-steel-500 text-xs font-medium uppercase tracking-wide mb-4">
                Redes Sociais
              </div>
              <div className="flex gap-3">
                {/* Instagram */}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 flex-1 p-3 bg-iron border border-iron-border rounded-sm hover:border-forge/30 group transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-sm bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white text-xs font-bold">
                      Instagram
                    </div>
                    <div className="text-steel-500 text-xs">
                      @ferroforteserralheria
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 flex-1 p-3 bg-iron border border-iron-border rounded-sm hover:border-[#25D366]/30 group transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-sm bg-[#25D366] flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white text-xs font-bold">WhatsApp</div>
                    <div className="text-steel-500 text-xs">
                      Resposta rápida
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div
            className={`transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="map-container h-full min-h-[400px] lg:min-h-[520px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58556.453009994466!2d-46.5869!3d-23.6548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce42a64ebbb7f7%3A0xa8a62e7e6e2db44d!2sSanto%20Andr%C3%A9%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Ferro Forte Serralheria"
                className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />

              {/* Map overlay CTA */}
              <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none">
                <div className="bg-iron/90 backdrop-blur-sm border border-iron-border rounded-sm px-5 py-3 flex items-center justify-between pointer-events-auto">
                  <div>
                    <div className="text-white font-bold text-sm">
                      Ferro Forte Serralheria
                    </div>
                    <div className="text-steel-500 text-xs">
                      R. das Ferragens, 123 – Santo André, SP
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Santo+Andre+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-forge hover:underline ml-4 whitespace-nowrap"
                  >
                    Ver no Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
