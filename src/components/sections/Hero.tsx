"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";
import { useCountUp, useInView } from "@/hooks/useInView";

/* ── Spark particle ───────────────────────────────────────────────── */
function SparkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      life: number;
      maxLife: number;
      color: string;
    }

    const particles: Particle[] = [];
    const colors = ["#f97316", "#fb923c", "#fdba74", "#fed7aa", "#ffd7a0"];

    const spawnParticle = () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.5 + Math.random() * 2;
      particles.push({
        x: canvas.width * 0.5 + (Math.random() - 0.5) * 200,
        y: canvas.height * 0.6 + (Math.random() - 0.5) * 100,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        size: 1 + Math.random() * 3,
        opacity: 0.8,
        life: 0,
        maxLife: 80 + Math.random() * 60,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    };

    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (frame % 3 === 0) spawnParticle();
      frame++;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.03;
        p.life++;
        p.opacity = (1 - p.life / p.maxLife) * 0.7;

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 opacity-60"
      aria-hidden
    />
  );
}

/* ── Animated stat ────────────────────────────────────────────────── */
function Stat({
  value,
  suffix,
  label,
  isInView,
}: {
  value: number;
  suffix: string;
  label: string;
  isInView: boolean;
}) {
  const count = useCountUp(value, 2000, isInView);
  return (
    <div className="text-center">
      <div className="stat-number text-4xl sm:text-5xl leading-none">
        {count}
        {suffix}
      </div>
      <div className="text-steel-400 text-xs sm:text-sm mt-1 font-medium tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
}

/* ── Hero Section ─────────────────────────────────────────────────── */
export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const { ref: inViewRef, isInView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Merge refs
  const setRefs = (el: HTMLDivElement | null) => {
    statsRef.current = el;
    (inViewRef as React.RefObject<HTMLElement | null>).current = el;
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-iron"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/serralheiro-hero-img.webp"
          alt="Serralheiro trabalhando com metal"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-iron/80 via-iron/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-iron/80 via-transparent to-iron/30" />
        <div className="absolute inset-0 metal-texture" />
      </div>

      {/* Spark particles */}
      <SparkCanvas />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 border border-forge/30 rounded-full mb-6 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            <span className="w-2 h-2 rounded-full bg-forge animate-pulse" />
            <span className="text-xs font-semibold text-forge tracking-[0.2em] uppercase">
              +15 Anos de Experiência
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className={`transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <span
              className="block font-display text-[clamp(3rem,9vw,7rem)] text-white leading-[0.9] tracking-wider"
              style={{ fontFamily: "var(--font-display), 'Bebas Neue', impact, sans-serif" }}
            >
              FERRO E AÇO
            </span>
            <span
              className="block font-display text-[clamp(3rem,9vw,7rem)] leading-[0.9] tracking-wider gradient-text text-glow"
              style={{ fontFamily: "var(--font-display), 'Bebas Neue', impact, sans-serif" }}
            >
              COM PRECISÃO
            </span>
            <span
              className="block font-display text-[clamp(3rem,9vw,7rem)] text-white leading-[0.9] tracking-wider"
              style={{ fontFamily: "var(--font-display), 'Bebas Neue', impact, sans-serif" }}
            >
              E QUALIDADE.
            </span>
          </h1>

          {/* Animated divider */}
          <div
            className={`mt-6 mb-6 h-px bg-gradient-to-r from-forge via-forge/50 to-transparent transition-all duration-1000 ${
              loaded ? "w-64 opacity-100" : "w-0 opacity-0"
            }`}
            style={{ transitionDelay: "0.5s" }}
          />

          {/* Subtitle */}
          <p
            className={`text-white text-lg sm:text-xl max-w-lg leading-relaxed font-light transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.4s", textShadow: "0 1px 12px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.7)" }}
          >
            Portões automáticos, grades de segurança e estruturas metálicas
            feitas sob medida para proteger e valorizar sua propriedade em São
            Paulo e região.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mt-8 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.55s" }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-forge flex items-center justify-center gap-3 px-8 py-4 rounded-sm text-base font-bold tracking-wide"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Solicitar Orçamento Grátis
            </a>
            <button
              onClick={() => {
                document
                  .querySelector("#portfolio")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-ghost flex items-center justify-center gap-2 px-8 py-4 rounded-sm text-base font-bold tracking-wide"
            >
              Ver Nossos Trabalhos
            </button>
          </div>

          {/* Trust signals */}
          <div
            className={`flex flex-wrap items-center gap-6 mt-10 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.7s" }}
          >
            {[
              "✓ Garantia de 1 Ano",
              "✓ Atendimento em 24h",
              "✓ Instalação Inclusa",
            ].map((item) => (
              <span
                key={item}
                className="text-sm text-steel-400 font-medium flex items-center gap-1"
              >
                <span className="text-forge font-bold">{item.split(" ")[0]}</span>
                <span>{item.slice(2)}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        ref={setRefs}
        className="relative z-20 border-t border-white/[0.06] bg-iron/80 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <Stat value={15} suffix="+" label="Anos de Experiência" isInView={isInView} />
            <Stat value={800} suffix="+" label="Obras Concluídas" isInView={isInView} />
            <Stat value={98} suffix="%" label="Clientes Satisfeitos" isInView={isInView} />
            <Stat value={50} suffix="km" label="Raio de Atendimento" isInView={isInView} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs tracking-[0.3em] text-steel-400 uppercase">
          Rolar
        </span>
        <ChevronDown className="w-4 h-4 text-steel-400 animate-bounce" />
      </div>
    </section>
  );
}
