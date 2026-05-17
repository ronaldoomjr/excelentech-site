import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/excelentech-logo.png";
import { SITE_DATA } from "@/config/site-data";

const Footer = () => {
  return (
    <footer className="relative bg-foreground text-background pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 pb-12 border-b border-background/10">
          <div>
            <Link to="/" className="inline-block transition-transform hover:scale-105">
              <img src={logo} alt="Excelentech Informática e Tecnologia" className="h-24 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-background/60 max-w-xs leading-relaxed">
              {SITE_DATA.description}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={SITE_DATA.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-9 w-9 rounded-lg border border-background/15 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-accent">Contatos</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <a href={`tel:+${SITE_DATA.contact.whatsapp}`} className="text-background/80 hover:text-background">{SITE_DATA.contact.whatsappDisplay}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <a href={`mailto:${SITE_DATA.contact.email}`} className="text-background/80 hover:text-background break-all">
                  {SITE_DATA.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <span className="text-background/80">{SITE_DATA.contact.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-accent">Áreas atendidas</h3>
            <ul className="mt-5 space-y-2 text-sm text-background/80">
              {SITE_DATA.contact.areas.map(area => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 text-center text-xs text-background/50">
          Todos os direitos reservados © 2026 | Excelentech Informática | Olinda-PE Brasil
        </div>
      </div>
    </footer>
  );
};

export default Footer;
