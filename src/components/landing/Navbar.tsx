import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import logo from "@/assets/excelentech-logo.png"
import { SITE_DATA } from "@/config/site-data"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [supportOpen, setSupportOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    if (isHomePage) {
      e.preventDefault()
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0A0A0A] text-white border-b border-white/10">
      <div className="container flex h-20 md:h-24 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 group shrink-0"
          aria-label="Excelentech - Início"
        >
          <img
            src={logo}
            alt="Excelentech Informática e Tecnologia"
            className="h-16 md:h-20 w-auto"
          />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            <li>
              <a
                href={SITE_DATA.contact.store}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-white/10 transition-colors block"
              >
                Loja
              </a>
            </li>
            {SITE_DATA.navigation.main.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.sectionId)}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-white/10 transition-colors block"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li
              className="relative"
              onMouseEnter={() => setSupportOpen(true)}
              onMouseLeave={() => setSupportOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-white/10 transition-colors">
                Suporte
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className={cn(
                  "absolute top-full left-0 pt-2 transition-all duration-200",
                  supportOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-1 pointer-events-none",
                )}
              >
                <ul className="min-w-[220px] rounded-xl border border-white/10 bg-[#0A0A0A] shadow-elevate p-2">
                  {SITE_DATA.navigation.support.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        className="block px-3 py-2 rounded-lg text-sm text-white hover:bg-white/10 transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </nav>

        <a
          href={`https://wa.me/${SITE_DATA.contact.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-white text-[#0A0A0A] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-all"
        >
          Fale conosco
        </a>

        <button
          className="md:hidden p-2 rounded-lg text-white hover:bg-white/10"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0A0A0A]">
          <nav className="container py-4">
            <ul className="space-y-1">
              <li className="font-semibold text-sm px-3 pt-2 pb-1 text-white/60 uppercase tracking-wider">
                Suporte
              </li>
              {SITE_DATA.navigation.support.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="block px-3 py-2 rounded-lg text-sm text-white hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {SITE_DATA.navigation.main.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.sectionId)}
                    className="block px-3 py-2 rounded-lg text-sm font-medium text-white hover:bg-white/10"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={SITE_DATA.contact.store}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 rounded-lg text-sm font-medium text-white hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  Loja
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={`https://wa.me/${SITE_DATA.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-white text-[#0A0A0A] px-5 py-3 rounded-full text-sm font-semibold"
                >
                  Fale conosco
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
