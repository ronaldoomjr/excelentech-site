// import { Instagram } from "lucide-react";
// import { SITE_DATA } from "@/config/site-data";

const RedesSociais = () => {
  return (
    <section id="redes" className="relative py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent-foreground bg-accent px-3 py-1 rounded-full">
            Conecte-se
          </span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl font-bold text-balance">
            Acompanhe nossas{" "}
            <span className="italic text-muted-foreground">redes sociais</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Dicas, bastidores e novidades — fique por dentro do nosso trabalho.
          </p>
        </div>

        {/* Widget Elfsight - Instagram Feed (plano free: 200 visualizações/mês) */}
        <div className="mt-12">
          <div
            className="elfsight-app-3a27875b-dca0-498a-bb47-93c6ebe2593f"
            data-elfsight-app-lazy
          />
        </div>

        {/*
          Fallback: card simples com link para o Instagram.
          Descomente este bloco (e os imports no topo) caso o limite mensal
          do widget Elfsight seja atingido.

          <div className="mt-12 flex justify-center">
            <a
              href={SITE_DATA.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 hover:border-foreground hover:shadow-elevate transition-all w-full max-w-sm"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-accent/0 group-hover:bg-accent/20 blur-2xl transition-all" />
              <div className="relative flex items-center gap-4 justify-center">
                <div className="h-12 w-12 rounded-xl bg-foreground text-background flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Instagram className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display font-bold">Instagram</div>
                  <div className="text-sm text-muted-foreground">@excelentech.info</div>
                </div>
              </div>
            </a>
          </div>
        */}
      </div>
    </section>
  )
}

export default RedesSociais
