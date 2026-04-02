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
  { src: "https://drive.google.com/thumbnail?id=1XwTAvAm19T5zFkJVJ3E6jxA1y56nJ9Rc&sz=w1000", alt: "Foto 1" },
  { src: "https://drive.google.com/thumbnail?id=1wzJVcU27jaY6B014xg_-ZznKIS1kCVp6&sz=w1000", alt: "Foto 2" },
  { src: "https://drive.google.com/thumbnail?id=1cp5xH9iNN2fK8ICFPDswt7zi2XIB9pvx&sz=w1000", alt: "Foto 3" },
  { src: "https://drive.google.com/thumbnail?id=1rOgH44YFyopA8ai9GBGeUKb0OcF3Tj7b&sz=w1000", alt: "Foto 4" },
  { src: "https://drive.google.com/thumbnail?id=1slyYgx_uU59FcdJZV2AvKgq8laXwMq_z&sz=w1000", alt: "Foto 5" },
  { src: "https://drive.google.com/thumbnail?id=1SlV4VXunejSpPuABBtDNS8NZDMFASroV&sz=w1000", alt: "Foto 6" },
  { src: "https://drive.google.com/thumbnail?id=106rJpbgjSV9U-Dvy6fTylsv_fNVGt4kz&sz=w1000", alt: "Foto 7" },
  { src: "https://drive.google.com/thumbnail?id=1kxls26rnSleUyObe9dPHHWcAid2VPyxS&sz=w1000", alt: "Foto 8" },
  { src: "https://drive.google.com/thumbnail?id=1BnOzED0Hp4BP1E8m1BzsrGFo_qnVnTOn&sz=w1000", alt: "Foto 9" },
  { src: "https://drive.google.com/thumbnail?id=12Q9SYWzagL747hEahutDEAkt74HPyC51&sz=w1000", alt: "Foto 10" },
  { src: "https://drive.google.com/thumbnail?id=1sKsygQbEsffDavn1tYpQW41XUBYFKpkn&sz=w1000", alt: "Foto 11" },
  { src: "https://drive.google.com/thumbnail?id=1SPqGzHOBxb2q4NlFQ0GTybD-HEsJYQro&sz=w1000", alt: "Foto 12" },
  { src: "https://drive.google.com/thumbnail?id=1bFcl32LYnzrcZYK4FSMAODKXxhhrH__o&sz=w1000", alt: "Foto 13" },
  { src: "https://drive.google.com/thumbnail?id=1aacGso1GlA4O_Swr2f2QHSicW2HPKaxN&sz=w1000", alt: "Foto 14" },
  { src: "https://drive.google.com/thumbnail?id=1M_mLpogij9VooyllvINdEJloD7RDMhBb&sz=w1000", alt: "Foto 15" },
  { src: "https://drive.google.com/thumbnail?id=1KaSkfBkWsFBREB8fl-bMJK2mjtksOOQ7&sz=w1000", alt: "Foto 16" },
  { src: "https://drive.google.com/thumbnail?id=1ei-8EER0S8o-NNAsrAyl1JUXnb5QMIDv&sz=w1000", alt: "Foto 17" },
  { src: "https://drive.google.com/thumbnail?id=1U_2kkhyhZqDocbKu7L4DBx6nqhBOihvu&sz=w1000", alt: "Foto 18" },
  { src: "https://drive.google.com/thumbnail?id=1eW4Pfbw_oHmpXNFJdjrgg62UflLlwzrD&sz=w1000", alt: "Foto 19" },
  { src: "https://drive.google.com/thumbnail?id=1N97E1TJ6UReLAhCEQxYjhLUnPT-BGqQj&sz=w1000", alt: "Foto 20" },
  { src: "https://drive.google.com/thumbnail?id=1mkOd5uDMHCUAXh6Hk-Xl1f4Rc70tuov0&sz=w1000", alt: "Foto 21" },
  { src: "https://drive.google.com/thumbnail?id=1TQVImTQs5u52XByoRXGpa0GpEFrnac5O&sz=w1000", alt: "Foto 22" },
  { src: "https://drive.google.com/thumbnail?id=1QS4LPIS5bRDH2UMRGXLY1ScQy9vGkubU&sz=w1000", alt: "Foto 23" },
  { src: "https://drive.google.com/thumbnail?id=1yuYmwmt5PKo6G48gt_gnRhCpLGPvCik9&sz=w1000", alt: "Foto 24" },
  { src: "https://drive.google.com/thumbnail?id=1u-QGdWo9GFILqoqfpJsndyj6vK_fLSMy&sz=w1000", alt: "Foto 25" },
  { src: "https://drive.google.com/thumbnail?id=1A01Ql5l59l3WR7uqgWWZCl_wK01ta8_k&sz=w1000", alt: "Foto 26" },
  { src: "https://drive.google.com/thumbnail?id=10wZOT9AzQPQv5U85TRKDTEvdgEBBDil1&sz=w1000", alt: "Foto 27" },
  { src: "https://drive.google.com/thumbnail?id=117nL3nP1mHh4QukfVp8qS1C39tIu3X_4&sz=w1000", alt: "Foto 28" },
  { src: "https://drive.google.com/thumbnail?id=1f9UHBMtHP3pM_1vX04xhw_qOcF9PrdHe&sz=w1000", alt: "Foto 29" },
  // ➕ Adicione novas imagens aqui (Google Drive):
  // { src: "https://drive.google.com/thumbnail?id=SEU_ID_AQUI&sz=w1000", alt: "Descrição" },
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
