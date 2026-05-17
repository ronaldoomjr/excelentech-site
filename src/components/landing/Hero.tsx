import {
  ArrowRight,
  MessageCircle,
  Laptop,
  Monitor,
  Cpu,
  ShieldCheck,
} from "lucide-react"
import heroImage from "@/assets/hero-tech.jpg"

import { SITE_DATA } from "@/config/site-data"

const WHATSAPP_URL = `https://wa.me/${SITE_DATA.contact.whatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.`

const Hero = () => {
  return (
    <section className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 bg-gradient-hero text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden />
      <div
        className="absolute top-1/2 -right-32 w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl animate-float-slow"
        aria-hidden
      />

      <div className="container relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Disponível agora — Atendimento rápido
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] text-balance">
            Suporte Técnico em Informática
            <span className="block mt-3 text-base sm:text-lg lg:text-xl font-sans font-normal text-primary-foreground/70">
              Reparamos: Notebooks, Desktops e All-In-One
            </span>
            <span className="block mt-6 text-accent text-2xl sm:text-3xl lg:text-4xl font-display font-semibold">
              Atendimento presencial e remoto{" "}
              {/* {SITE_DATA.contact.areas.join(" | ")} */}
            </span>
          </h1>

          <p className="mt-8 text-lg lg:text-xl text-primary-foreground/75 max-w-xl leading-relaxed">
            Problemas com lentidão, vírus, tela quebrada ou computador que não
            liga?
            <span className="block mt-2 text-primary-foreground">
              Nós resolvemos para você com transparência e eficiência.
            </span>
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-yellow text-accent-foreground px-8 py-4 rounded-full font-semibold text-base shadow-yellow hover:scale-[1.03] transition-transform"
            >
              <MessageCircle className="h-5 w-5" />
              Solicite seu orçamento
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              <span
                className="absolute inset-0 rounded-full animate-pulse-ring"
                aria-hidden
              />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/20 px-8 py-4 rounded-full font-medium text-base hover:bg-primary-foreground/5 transition-colors"
            >
              Conheça a ExcelenTech
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
            {[
              { icon: Laptop, label: "Notebooks" },
              { icon: Monitor, label: "Desktops" },
              { icon: Cpu, label: "All-In-One" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 p-3 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5"
              >
                <Icon className="h-6 w-6 text-accent" />
                <span className="text-xs font-medium text-primary-foreground/80">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="lg:col-span-5 relative animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-elevate border border-primary-foreground/10">
            <img
              src={heroImage}
              alt="Técnico especializado realizando reparo em notebook"
              width={1280}
              height={1280}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 -left-6 bg-background text-foreground rounded-2xl p-4 shadow-elevate flex items-center gap-3 max-w-[240px]">
            <div className="h-10 w-10 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
              <ShieldCheck className="h-5 w-5 text-accent-foreground" />
            </div>
            <div>
              <div className="font-display font-bold text-sm">
                Garantia total
              </div>
              <div className="text-xs text-muted-foreground">
                em todos os serviços
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
