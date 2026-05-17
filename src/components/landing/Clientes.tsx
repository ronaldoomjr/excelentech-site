import {
  Cpu,
  Building2,
  Stethoscope,
  GraduationCap,
  ShoppingBag,
  Briefcase,
  Utensils,
  Scale,
} from "lucide-react"
import { SITE_DATA } from "@/config/site-data"

const clientes = [
  { nome: "NovaTech", icon: Cpu },
  { nome: "Construtora Vértice", icon: Building2 },
  { nome: "Clínica Vitalle", icon: Stethoscope },
  { nome: "Colégio Saber+", icon: GraduationCap },
  { nome: "Mercado Bom Preço", icon: ShoppingBag },
  { nome: "Advocacia Lima & Cia", icon: Scale },
  { nome: "Restaurante Sabor Real", icon: Utensils },
  { nome: "Contabilidade Prisma", icon: Briefcase },
]

const Clientes = () => {
  return (
    <section
      id="clientes"
      className="relative py-20 lg:py-28 bg-background border-y border-border"
    >
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent-foreground bg-accent px-3 py-1 rounded-full">
            Clientes
          </span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl font-bold leading-[1.05] text-balance">
            Empresas que confiam na{" "}
            <span className="italic text-muted-foreground">
              {SITE_DATA.name}
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Atendemos pequenos e grandes negócios, escritórios e instituições{" "}
            {/*SITE_DATA.contact.areas.join(", ")*/}.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {clientes.map(({ nome, icon: Icon }) => (
            <div
              key={nome}
              className="group relative flex items-center justify-center gap-3 px-5 py-8 rounded-2xl bg-secondary/50 border border-border hover:border-accent hover:bg-secondary transition-all duration-300 hover:-translate-y-1"
            >
              <Icon
                className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors"
                strokeWidth={1.5}
              />
              <span className="font-display font-semibold text-foreground tracking-tight">
                {nome}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clientes
