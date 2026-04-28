"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useInView } from "@/hooks/useInView";
import { WHATSAPP_URL } from "@/lib/utils";
import { CheckCircle, AlertCircle } from "lucide-react";

/* ── Form Schema ──────────────────────────────────────────────────── */
const formSchema = z.object({
  name: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(60, "Nome muito longo"),
  phone: z
    .string()
    .min(10, "Telefone inválido")
    .max(15, "Telefone inválido")
    .regex(/^[\d\s()\-+]+$/, "Apenas números permitidos"),
  service: z.string().min(1, "Selecione um serviço"),
  message: z.string().max(500, "Mensagem muito longa").optional(),
});

type FormData = z.infer<typeof formSchema>;

const services = [
  "Portão Automático",
  "Grades de Segurança",
  "Estrutura Metálica",
  "Guarda-corpo / Corrimão",
  "Escada Metálica",
  "Manutenção / Reforma",
  "Outro",
];

/* ── CTA Section ──────────────────────────────────────────────────── */
export default function CTA() {
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitState("loading");

    // Build WhatsApp message
    const msg = `*Solicitação de Orçamento - Site*\n\n*Nome:* ${data.name}\n*Telefone:* ${data.phone}\n*Serviço:* ${data.service}${data.message ? `\n*Mensagem:* ${data.message}` : ""}`;
    const waUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`;

    // Simulate brief loading
    await new Promise((r) => setTimeout(r, 800));

    setSubmitState("success");
    reset();

    // Open WhatsApp after 1s
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 1000);
  };

  return (
    <section
      id="orcamento"
      className="py-24 lg:py-32 bg-iron relative overflow-hidden"
    >
      {/* Background: dark with orange glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-iron via-iron-light to-iron" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-forge/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-forge/5 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 metal-texture opacity-30" />

      {/* Diagonal accent line */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden
      >
        <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-forge/30 to-transparent" />
        <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-forge/30 to-transparent" />
      </div>

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          {/* Left — Impact copy */}
          <div
            className={`transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-forge" />
              <span className="text-forge text-xs font-bold tracking-[0.3em] uppercase">
                Solicite Agora
              </span>
            </div>

            <h2
              className="font-display text-[clamp(2.8rem,6vw,5rem)] text-white leading-[0.9] tracking-wider mb-6"
              style={{ fontFamily: "var(--font-display), 'Bebas Neue', impact, sans-serif" }}
            >
              PRONTO PARA{" "}
              <span className="gradient-text text-glow">TRANSFORMAR</span>{" "}
              SUA OBRA?
            </h2>

            <p className="text-steel-300 text-lg leading-relaxed mb-8">
              Preencha o formulário ao lado e receba um orçamento personalizado
              em até <span className="text-forge font-bold">24 horas</span>.
              Sem compromisso, sem enrolação.
            </p>

            {/* Vantagens */}
            <ul className="space-y-4 mb-10">
              {[
                "Orçamento 100% gratuito e sem compromisso",
                "Atendimento em até 24h pelo WhatsApp",
                "Visita técnica gratuita na Grande SP",
                "Projeto, fornecimento e instalação",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-forge/15 border border-forge/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-forge" />
                  </span>
                  <span className="text-steel-300 text-base">{item}</span>
                </li>
              ))}
            </ul>

            {/* Alternate CTA */}
            <div className="p-5 bg-iron-mid border border-iron-border rounded-sm">
              <p className="text-steel-400 text-sm mb-3">
                Prefere falar diretamente?
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white font-bold hover:text-forge transition-colors group"
              >
                <div className="w-10 h-10 bg-[#25D366]/15 border border-[#25D366]/30 rounded-sm flex items-center justify-center group-hover:bg-[#25D366]/25 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    fill="#25D366"
                    className="w-5 h-5"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-steel-500 font-normal">
                    WhatsApp
                  </div>
                  <div className="text-white font-bold">(11) 99999-9999</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div
            className={`transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="bg-iron-mid border border-iron-border rounded-sm p-8 lg:p-10 relative overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-forge/20 rounded-sm" />

              <h3 className="text-white font-bold text-2xl mb-1">
                Solicitar Orçamento
              </h3>
              <p className="text-steel-500 text-sm mb-8">
                Resposta garantida em até 24 horas.
              </p>

              {/* Success state */}
              {submitState === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-white font-bold text-xl mb-2">
                    Mensagem enviada!
                  </h4>
                  <p className="text-steel-400 text-sm">
                    Abrindo o WhatsApp para você finalizar o contato...
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                  noValidate
                >
                  {/* Name */}
                  <div>
                    <label className="block text-steel-300 text-sm font-medium mb-2">
                      Seu nome <span className="text-forge">*</span>
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="João da Silva"
                      className={`input-dark w-full px-4 py-3 rounded-sm text-sm ${
                        errors.name ? "border-red-500/60" : ""
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-steel-300 text-sm font-medium mb-2">
                      WhatsApp / Telefone <span className="text-forge">*</span>
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="(11) 99999-9999"
                      className={`input-dark w-full px-4 py-3 rounded-sm text-sm ${
                        errors.phone ? "border-red-500/60" : ""
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-steel-300 text-sm font-medium mb-2">
                      Serviço de interesse <span className="text-forge">*</span>
                    </label>
                    <select
                      {...register("service")}
                      className={`input-dark w-full px-4 py-3 rounded-sm text-sm bg-iron-mid appearance-none ${
                        errors.service ? "border-red-500/60" : ""
                      }`}
                    >
                      <option value="">Selecione o serviço...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-steel-300 text-sm font-medium mb-2">
                      Descreva seu projeto{" "}
                      <span className="text-steel-600">(opcional)</span>
                    </label>
                    <textarea
                      {...register("message")}
                      rows={3}
                      placeholder="Ex: Portão de 4m de largura para entrada de garagem..."
                      className="input-dark w-full px-4 py-3 rounded-sm text-sm resize-none"
                    />
                  </div>

                  {/* Error state */}
                  {submitState === "error" && (
                    <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-sm">
                      <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <p className="text-red-400 text-xs">
                        Erro ao enviar. Tente pelo WhatsApp direto.
                      </p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitState === "loading"}
                    className="btn-forge w-full flex items-center justify-center gap-3 py-4 rounded-sm text-base font-bold tracking-wide disabled:opacity-70"
                  >
                    {submitState === "loading" ? (
                      <>
                        <span className="spinner" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Enviar pelo WhatsApp
                      </>
                    )}
                  </button>

                  <p className="text-steel-600 text-xs text-center">
                    Ao enviar, você será direcionado para o WhatsApp.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
