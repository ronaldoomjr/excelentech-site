import acer from "@/assets/fabricantes/acer.png";
import apple from "@/assets/fabricantes/apple.png";
import asus from "@/assets/fabricantes/asus.png";
import avell from "@/assets/fabricantes/avell.png";
import dell from "@/assets/fabricantes/dell.png";
import hp from "@/assets/fabricantes/hp.png";
import lenovo from "@/assets/fabricantes/lenovo.png";
import lg from "@/assets/fabricantes/lg.png";
import positivo from "@/assets/fabricantes/positivo.png";
import samsung from "@/assets/fabricantes/samsung.png";
import SEO from "@/components/SEO";

const fabricantes = [
  { nome: "Dell", logo: dell, url: "https://www.dell.com/support/home/pt-br" },
  { nome: "Samsung", logo: samsung, url: "https://www.samsung.com/br/support/user-manuals-and-guide/" },
  { nome: "Acer", logo: acer, url: "https://www.acer.com/br-pt/support/drivers-and-manuals" },
  { nome: "Asus", logo: asus, url: "https://www.asus.com/br/support/" },
  { nome: "Lenovo", logo: lenovo, url: "https://pcsupport.lenovo.com/br/pt/" },
  { nome: "HP", logo: hp, url: "https://support.hp.com/br-pt" },
  { nome: "LG", logo: lg, url: "https://www.lg.com/br/suporte/suporte-ao-producto/manuais/" },
  { nome: "Apple", logo: apple, url: "https://support.apple.com/pt-br" },
  { nome: "Positivo", logo: positivo, url: "https://www.meupositivo.com.br/atendimento/" },
  { nome: "Avell", logo: avell, url: "https://www.avell.com.br/suporte" },
];

const Fabricantes = () => {
  return (
    <>
      <SEO 
        title="Fabricantes Parceiros" 
        description="Acesse o suporte oficial de marcas como Dell, Samsung, Acer, Apple e Asus para drivers e manuais."
        url="/fabricantes"
      />
      <main className="pt-32 pb-20">
        <section id="fabricantes" className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent-foreground bg-accent px-3 py-1 rounded-full">
              Suporte
            </span>
            <h1 className="mt-6 font-display text-4xl lg:text-6xl font-bold leading-[1.05] text-balance">
              Fabricantes <span className="italic text-muted-foreground">parceiros</span>
            </h1>
            <p className="mt-4 text-muted-foreground">
              Acesse o suporte oficial de cada fabricante. Clique na logo para ser redirecionado à página de suporte, drivers e manuais.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {fabricantes.map((f) => (
              <a
                key={f.nome}
                href={f.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Suporte ${f.nome}`}
                className="group relative flex items-center justify-center aspect-square rounded-2xl bg-secondary/40 border border-border hover:border-accent hover:bg-secondary transition-all duration-300 hover:-translate-y-1 p-8"
              >
                <img
                  src={f.logo}
                  alt={`Logo ${f.nome}`}
                  loading="lazy"
                  className="max-h-20 max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="sr-only">{f.nome}</span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Fabricantes;
