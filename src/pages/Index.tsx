import Hero from "@/components/landing/Hero";
import Sobre from "@/components/landing/Sobre";
import Clientes from "@/components/landing/Clientes";
import Depoimentos from "@/components/landing/Depoimentos";
import RedesSociais from "@/components/landing/RedesSociais";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO />
      <Hero />
      <Sobre />
      <Clientes />
      <Depoimentos />
      <RedesSociais />
    </>
  );
};

export default Index;
