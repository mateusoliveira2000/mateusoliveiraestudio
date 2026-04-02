/* Página Galeria — Grid responsiva com imagens P&B que ficam coloridas no hover */
/* IMPORTANTE: Imagens em preto e branco, hover revela cores, clique expande com fundo desfocado */
import { useState } from "react";
import { X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

// Importação das imagens da galeria
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

/* Array de imagens com títulos descritivos */
const images = [
  { src: gallery1, alt: "Arquitetura minimalista", w: 800, h: 800 },
  { src: gallery2, alt: "Retrato editorial", w: 700, h: 1000 },
  { src: gallery3, alt: "Natureza serena", w: 1000, h: 700 },
  { src: gallery4, alt: "Detalhes de casamento", w: 800, h: 800 },
  { src: gallery5, alt: "Design de interiores", w: 700, h: 1000 },
  { src: gallery6, alt: "Gastronomia artesanal", w: 800, h: 800 },
];

const Gallery = () => {
  /* Estado para controlar a imagem expandida (lightbox) */
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  /* Fechar lightbox ao clicar fora da imagem */
  const closeLightbox = () => setSelectedImage(null);

  return (
    <main className="pt-24 pb-16">
      {/* Título da página */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <ScrollReveal>
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Portfólio</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="font-signature text-5xl md:text-6xl text-primary">Galeria</h1>
        </ScrollReveal>
      </div>

      {/* Grid responsiva de imagens */}
      <div className="container mx-auto px-6">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((image, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              {/* Item da galeria — clique para expandir */}
              <div
                className="gallery-item break-inside-avoid cursor-pointer overflow-hidden rounded-sm"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.w}
                  height={image.h}
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox — imagem expandida com fundo desfocado */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 lightbox-overlay flex items-center justify-center p-6 animate-fade-in cursor-pointer"
          onClick={closeLightbox}
        >
          {/* Botão fechar */}
          <button
            className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            onClick={closeLightbox}
            aria-label="Fechar"
          >
            <X size={28} />
          </button>

          {/* Imagem expandida — clique na imagem não fecha o lightbox */}
          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
};

export default Gallery;
