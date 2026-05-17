import { Download, ExternalLink } from "lucide-react";
import SEO from "@/components/SEO";

const downloads = [
  {
    nome: "CertiSign Downloads",
    description: "Drivers, gerenciadores e utilitários para tokens e certificados digitais CertiSign.",
    url: "https://certisign.com.br/suporte/download",
  },
];

const Tokens = () => {
  return (
    <>
      <SEO 
        title="Tokens e Certificados" 
        description="Downloads oficiais de drivers e utilitários para certificados digitais CertiSign."
        url="/tokens-e-certificados"
      />
      <main className="pt-32 pb-20">
        <section id="tokens" className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent-foreground bg-accent px-3 py-1 rounded-full">
              Suporte
            </span>
            <h1 className="mt-6 font-display text-4xl lg:text-6xl font-bold leading-[1.05] text-balance">
              Tokens e <span className="italic text-muted-foreground">Certificados</span>
            </h1>
            <p className="mt-4 text-muted-foreground">
              Acesse os downloads oficiais para instalação e configuração do seu certificado digital.
            </p>
          </div>

          <div className="mt-14 max-w-2xl mx-auto grid gap-4">
            {downloads.map((d) => (
              <a
                key={d.nome}
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-6 rounded-2xl bg-secondary/40 border border-border hover:border-accent hover:bg-secondary transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-background border border-border group-hover:border-accent transition-colors">
                  <Download className="h-6 w-6 text-foreground" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h2 className="font-display text-lg font-semibold tracking-tight">{d.nome}</h2>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{d.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Tokens;
