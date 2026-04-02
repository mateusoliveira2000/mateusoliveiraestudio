/* Página Galeria — Grid responsiva com imagens P&B que ficam coloridas no hover */
/* IMPORTANTE: Imagens em preto e branco, hover revela cores, clique expande com fundo desfocado */
import { useState } from "react";
import { X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

// ============================================================
// 📸 IMAGENS DA GALERIA
// ============================================================
//
// ✅ OPÇÃO 1 — Usando imagens locais (pasta src/assets/):
//   1. Coloque a imagem na pasta src/assets/
//   2. Adicione um import (ex: import gallery7 from "@/assets/gallery-7.jpg")
//   3. Adicione no array "images": { src: gallery7, alt: "Descrição" }
//
// ✅ OPÇÃO 2 — Usando link do Google Drive:
//   1. Suba a foto no Google Drive
//   2. Clique com botão direito → "Compartilhar" → "Qualquer pessoa com o link"
//   3. Copie o link de compartilhamento. Ele será assim:
//      https://drive.google.com/file/d/XXXXXXX/view?usp=sharing
//   4. Pegue apenas o ID do arquivo (o XXXXXXX no link acima)
//   5. Cole no array "images" usando este formato:
//      { src: "https://drive.google.com/thumbnail?id=SEU_ID_AQUI&sz=w1000", alt: "Descrição" }
//
//   📌 EXEMPLO COMPLETO com link do Drive:
//      O link original: https://drive.google.com/file/d/1aBcDeFgHiJkLmNoPqRsT/view?usp=sharing
//      O ID é: 1aBcDeFgHiJkLmNoPqRsT
//      No array fica: { src: "https://drive.google.com/thumbnail?id=1aBcDeFgHiJkLmNoPqRsT&sz=w1000", alt: "Minha foto" }
//
// O layout da grid se adapta automaticamente — não é necessário alterar nada mais!
// ============================================================

// Imagens locais (do projeto)
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

/*
 * Array de imagens da galeria.
 * Aceita tanto imagens locais (importadas acima) quanto links externos (Google Drive, etc.)
 *
 * ➕ Para adicionar uma imagem do Google Drive, cole assim:
 *    { src: "https://drive.google.com/thumbnail?id=SEU_ID_AQUI&sz=w1000", alt: "Descrição da foto" },
 */
const images = [
  { src: gallery1, alt: "Arquitetura minimalista" },
  { src: gallery2, alt: "Retrato editorial" },
  { src: gallery3, alt: "Natureza serena" },
  { src: gallery4, alt: "Detalhes de casamento" },
  { src: gallery5, alt: "Design de interiores" },
  { src: gallery6, alt: "Gastronomia artesanal" },
  // ➕ Adicione novas imagens aqui (local ou Google Drive):
  // { src: "https://drive.google.com/thumbnail?id=SEU_ID_AQUI&sz=w1000", alt: "Minha nova foto" },
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
