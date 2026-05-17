import { Star } from "lucide-react"

const Depoimentos = () => {
  return (
    <section
      id="depoimentos"
      className="relative py-20 lg:py-32 bg-secondary/40"
    >
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent-foreground bg-accent px-3 py-1 rounded-full">
            Depoimentos
          </span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05] text-balance">
            O que dizem nossos{" "}
            <span className="italic text-muted-foreground">clientes?</span>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-accent text-accent" />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">
              Avaliações reais do Google
            </span>
          </div>
        </div>

        {/* Widget Elfsight - Google Reviews (plano free: 200 visualizações/mês) */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div
            className="elfsight-app-cdd6c9da-03d4-484a-a14a-b1beab1641ff"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  )
}

export default Depoimentos
