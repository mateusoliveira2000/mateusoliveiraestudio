/* Página Serviços — Cards elegantes com hover e layout limpo */
import { Camera, Heart, Image, Palette } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

/* Lista de serviços oferecidos */
const services = [
  {
    icon: Camera,
    title: "Retratos",
    description:
      "Sessões fotográficas personalizadas que capturam sua essência com sensibilidade e elegância.",
  },
  {
    icon: Heart,
    title: "Casamentos",
    description:
      "Cobertura completa do seu grande dia, com olhar artístico para cada detalhe e emoção.",
  },
  {
    icon: Image,
    title: "Editorial",
    description:
      "Projetos editoriais para marcas e publicações, com estética refinada e contemporânea.",
  },
  {
    icon: Palette,
    title: "Fine Art",
    description:
      "Trabalhos artísticos exclusivos, impressos em materiais nobres para decoração e coleção.",
  },
];

const Services = () => {
  return (
    <main className="pt-24 pb-16">
      {/* Título da página */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <ScrollReveal>
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">O que fazemos</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="font-signature text-5xl md:text-6xl text-primary">Serviços</h1>
        </ScrollReveal>
      </div>

      {/* Grid de cards de serviço */}
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              {/* Card com hover elegante */}
              <div className="service-card p-8 md:p-10 border border-border rounded-sm bg-card">
                {/* Ícone do serviço */}
                <service.icon
                  size={28}
                  className="text-primary mb-6"
                  strokeWidth={1.5}
                />
                {/* Título do serviço */}
                <h3 className="text-lg font-light tracking-wide text-foreground mb-3">
                  {service.title}
                </h3>
                {/* Descrição do serviço */}
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
