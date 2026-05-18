import { ExternalLink } from "lucide-react";
import lenovoLogo from "@/assets/garantia/lenovo.png";
import SEO from "@/components/SEO";

const fabricantes = [
  {
    nome: "Lenovo",
    description: "Consulte e solicite garantia de produtos Lenovo diretamente no portal oficial.",
    url: "https://support.lenovo.com/br/pt/warranty-lookup#/",
    logo: lenovoLogo,
  },
];

const Garantia = () => {
  return (
    <>
      <SEO 
        title="Garantia" 
        description="Consulte e solicite a garantia oficial de fabricantes como a Lenovo."
        url="/garantia"
      />
      <main className="pt-32 pb-20">
        <section id="garantia" className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent-foreground bg-accent px-3 py-1 rounded-full">
              Suporte
            </span>
            <h1 className="mt-6 font-display text-4xl lg:text-6xl font-bold leading-[1.05] text-balance">
              Solicitar <span className="italic text-muted-foreground">Garantia</span>
            </h1>
            <p className="mt-4 text-muted-foreground">
              Acesse o portal oficial do fabricante para consultar e solicitar a garantia do seu produto.
            </p>
          </div>

          <div className="mt-14 max-w-2xl mx-auto grid gap-4">
            {fabricantes.map((f) => (
              <a
                key={f.nome}
                href={f.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-6 rounded-2xl bg-secondary/40 border border-border hover:border-accent hover:bg-secondary transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-background border border-border group-hover:border-accent transition-colors overflow-hidden p-2">
                  <img src={f.logo} alt={`Logo ${f.nome}`} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h2 className="font-display text-lg font-semibold tracking-tight">{f.nome}</h2>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{f.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Garantia;
