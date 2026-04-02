/* Página Inicial — Hero section elegante com animações suaves */
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <main>
      {/* Hero Section — Imagem de fundo com overlay elegante */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Imagem de fundo */}
        <img
          src={heroBg}
          alt="Fotografia minimalista elegante"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        {/* Overlay suave */}
        <div className="absolute inset-0 bg-background/40" />

        {/* Conteúdo do hero */}
        <div className="relative z-10 text-center px-6">
          <h1 className="font-signature text-6xl md:text-8xl lg:text-9xl text-primary animate-fade-up">
            Estúdio
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/80 font-light tracking-widest uppercase animate-fade-up-delay-1">
            Fotografia &amp; Arte Visual
          </p>
          <Link
            to="/galeria"
            className="inline-block mt-10 px-8 py-3 border border-primary text-primary text-sm tracking-widest uppercase font-light 
              hover:bg-primary hover:text-primary-foreground transition-all duration-500 animate-fade-up-delay-2"
          >
            Ver Galeria
          </Link>
        </div>
      </section>

      {/* Seção de introdução */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <ScrollReveal>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Bem-vindo</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-signature text-4xl md:text-5xl text-primary mb-8">
              Capturando momentos eternos
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-muted-foreground font-light leading-relaxed text-lg">
              Cada imagem conta uma história. Com um olhar sensível e atento aos detalhes,
              transformamos momentos efêmeros em memórias que transcendem o tempo.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Divisor decorativo */}
      <div className="flex justify-center">
        <div className="w-16 h-px bg-primary/30" />
      </div>

      {/* CTA final */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-signature text-3xl md:text-4xl text-primary mb-8">
              Vamos criar algo especial juntos
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <Link
              to="/contato"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-light 
                hover:bg-primary/90 transition-all duration-500"
            >
              Entre em Contato
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Index;
