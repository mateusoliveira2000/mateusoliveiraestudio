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

const images = [
  { src: "https://lh3.googleusercontent.com/d/1XwTAvAm19T5zFkJVJ3E6jxA1y56nJ9Rc", alt: "Foto 1" },
  { src: "https://lh3.googleusercontent.com/d/1wzJVcU27jaY6B014xg_-ZznKIS1kCVp6", alt: "Foto 2" },
  { src: "https://lh3.googleusercontent.com/d/1cp5xH9iNN2fK8ICFPDswt7zi2XIB9pvx", alt: "Foto 3" },
  { src: "https://lh3.googleusercontent.com/d/1rOgH44YFyopA8ai9GBGeUKb0OcF3Tj7b", alt: "Foto 4" },
  { src: "https://lh3.googleusercontent.com/d/1slyYgx_uU59FcdJZV2AvKgq8laXwMq_z", alt: "Foto 5" },
  { src: "https://lh3.googleusercontent.com/d/1SlV4VXunejSpPuABBtDNS8NZDMFASroV", alt: "Foto 6" },
  { src: "https://lh3.googleusercontent.com/d/106rJpbgjSV9U-Dvy6fTylsv_fNVGt4kz", alt: "Foto 7" },
  { src: "https://lh3.googleusercontent.com/d/1kxls26rnSleUyObe9dPHHWcAid2VPyxS", alt: "Foto 8" },
  { src: "https://lh3.googleusercontent.com/d/1BnOzED0Hp4BP1E8m1BzsrGFo_qnVnTOn", alt: "Foto 9" },
  { src: "https://lh3.googleusercontent.com/d/12Q9SYWzagL747hEahutDEAkt74HPyC51", alt: "Foto 10" },
  { src: "https://lh3.googleusercontent.com/d/1sKsygQbEsffDavn1tYpQW41XUBYFKpkn", alt: "Foto 11" },
  { src: "https://lh3.googleusercontent.com/d/1SPqGzHOBxb2q4NlFQ0GTybD-HEsJYQro", alt: "Foto 12" },
  { src: "https://lh3.googleusercontent.com/d/1bFcl32LYnzrcZYK4FSMAODKXxhhrH__o", alt: "Foto 13" },
  { src: "https://lh3.googleusercontent.com/d/1aacGso1GlA4O_Swr2f2QHSicW2HPKaxN", alt: "Foto 14" },
  { src: "https://lh3.googleusercontent.com/d/1M_mLpogij9VooyllvINdEJloD7RDMhBb", alt: "Foto 15" },
  { src: "https://lh3.googleusercontent.com/d/1KaSkfBkWsFBREB8fl-bMJK2mjtksOOQ7", alt: "Foto 16" },
  { src: "https://lh3.googleusercontent.com/d/1ei-8EER0S8o-NNAsrAyl1JUXnb5QMIDv", alt: "Foto 17" },
  { src: "https://lh3.googleusercontent.com/d/1U_2kkhyhZqDocbKu7L4DBx6nqhBOihvu", alt: "Foto 18" },
  { src: "https://lh3.googleusercontent.com/d/1eW4Pfbw_oHmpXNFJdjrgg62UflLlwzrD", alt: "Foto 19" },
  { src: "https://lh3.googleusercontent.com/d/1N97E1TJ6UReLAhCEQxYjhLUnPT-BGqQj", alt: "Foto 20" },
  { src: "https://lh3.googleusercontent.com/d/1mkOd5uDMHCUAXh6Hk-Xl1f4Rc70tuov0", alt: "Foto 21" },
  { src: "https://lh3.googleusercontent.com/d/1TQVImTQs5u52XByoRXGpa0GpEFrnac5O", alt: "Foto 22" },
  { src: "https://lh3.googleusercontent.com/d/1QS4LPIS5bRDH2UMRGXLY1ScQy9vGkubU", alt: "Foto 23" },
  { src: "https://lh3.googleusercontent.com/d/1yuYmwmt5PKo6G48gt_gnRhCpLGPvCik9", alt: "Foto 24" },
  { src: "https://lh3.googleusercontent.com/d/1u-QGdWo9GFILqoqfpJsndyj6vK_fLSMy", alt: "Foto 25" },
  { src: "https://lh3.googleusercontent.com/d/1A01Ql5l59l3WR7uqgWWZCl_wK01ta8_k", alt: "Foto 26" },
  { src: "https://lh3.googleusercontent.com/d/10wZOT9AzQPQv5U85TRKDTEvdgEBBDil1", alt: "Foto 27" },
  { src: "https://lh3.googleusercontent.com/d/117nL3nP1mHh4QukfVp8qS1C39tIu3X_4", alt: "Foto 28" },
  { src: "https://lh3.googleusercontent.com/d/1f9UHBMtHP3pM_1vX04xhw_qOcF9PrdHe", alt: "Foto 29" },
  // ➕ Para adicionar novas imagens do Google Drive, use:
  // { src: "https://lh3.googleusercontent.com/d/SEU_ID_AQUI", alt: "Descrição" },
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
