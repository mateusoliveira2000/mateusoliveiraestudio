/* Página Sobre — Foto + descrição com animações elegantes no texto */
import aboutPortrait from "@/assets/about-portrait.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const About = () => {
  return (
    <main className="pt-24 pb-16">
      {/* Título da página */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <ScrollReveal>
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Conheça</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="font-signature text-5xl md:text-6xl text-primary">Sobre Nós</h1>
        </ScrollReveal>
      </div>

      {/* Layout: foto à esquerda, texto à direita */}
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-5xl mx-auto">
          {/* Foto com moldura sutil */}
          <ScrollReveal>
            <div className="overflow-hidden rounded-sm">
              <img
                src={aboutPortrait}
                alt="Fotógrafa profissional em estúdio"
                width={800}
                height={1000}
                loading="lazy"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </ScrollReveal>

          {/* Descrição com animações em cada parágrafo */}
          <div className="space-y-6">
            <ScrollReveal delay={150}>
              <p className="font-signature text-3xl text-primary mb-2">Helena Costa</p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <p className="text-muted-foreground font-light leading-relaxed">
                Com mais de uma década de experiência, dedico meu trabalho a capturar a essência
                de cada momento. Minha abordagem minimalista e sensível busca revelar a beleza
                que existe nos detalhes mais sutis do cotidiano.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <p className="text-muted-foreground font-light leading-relaxed">
                Formada em Artes Visuais, especializei-me em fotografia de retratos, casamentos
                e projetos editoriais. Cada projeto é tratado com cuidado artesanal, garantindo
                resultados únicos e autênticos.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={450}>
              <div className="pt-4">
                <div className="w-12 h-px bg-primary/40 mb-4" />
                <p className="text-sm text-muted-foreground font-light italic">
                  "A fotografia é a arte de tornar visível o invisível."
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
