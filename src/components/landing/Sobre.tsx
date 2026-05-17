import { ArrowRight, MessageCircle, Award, Eye, ShieldCheck, Zap, Users } from "lucide-react";
import { SITE_DATA } from "@/config/site-data";

const WHATSAPP_URL = `https://wa.me/${SITE_DATA.contact.whatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.`;

const items = [
  { icon: Award, title: "Técnicos experientes e capacitados", desc: "Profissionais com anos de mercado e treinamento contínuo." },
  { icon: Eye, title: "Diagnóstico claro e sem surpresas", desc: "Você sabe exatamente o que precisa ser feito antes de aprovar." },
  { icon: ShieldCheck, title: "Garantia em todos os serviços", desc: "Trabalhamos com responsabilidade do início ao fim." },
  { icon: Zap, title: "Atendimento rápido e personalizado", desc: "Cada cliente é único — e seu tempo é prioridade." },
  { icon: Users, title: "Suporte para pessoas físicas e empresas", desc: "Atendemos demandas residenciais e corporativas." },
];

const Sobre = () => {
  return (
    <section id="sobre" className="relative py-20 lg:py-32 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent-foreground bg-accent px-3 py-1 rounded-full">
              Sobre Nós
            </span>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05] text-balance">
              Confiança, transparência e <span className="italic text-muted-foreground">resultado</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Na <span className="font-semibold text-foreground">{SITE_DATA.name}</span>, seu equipamento é tratado com o máximo cuidado.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 group inline-flex items-center gap-2 bg-foreground text-background px-7 py-4 rounded-full font-semibold shadow-card hover:bg-accent hover:text-accent-foreground hover:shadow-yellow transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              Solicite seu orçamento
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <ul className="lg:col-span-7 space-y-3">
            {items.map(({ icon: Icon, title, desc }, i) => (
              <li
                key={title}
                className="group relative flex gap-5 p-6 rounded-2xl border border-border bg-card hover:border-accent hover:shadow-card transition-all"
              >
                <div className="shrink-0 h-12 w-12 rounded-xl bg-secondary group-hover:bg-accent flex items-center justify-center transition-colors">
                  <Icon className="h-5 w-5 group-hover:text-accent-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display font-bold text-lg">{title}</h3>
                    <span className="font-display text-sm text-muted-foreground tabular-nums">0{i + 1}</span>
                  </div>
                  <p className="mt-1 text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
