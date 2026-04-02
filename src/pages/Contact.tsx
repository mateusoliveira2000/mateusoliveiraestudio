/* Página Contato — Formulário elegante com campos nome, email e mensagem */
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  /* Estado do formulário */
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  /* Envio do formulário — exibe toast de confirmação */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="pt-24 pb-16">
      {/* Título da página */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <ScrollReveal>
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Fale conosco</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="font-signature text-5xl md:text-6xl text-primary">Contato</h1>
        </ScrollReveal>
      </div>

      {/* Formulário centralizado */}
      <div className="container mx-auto px-6 max-w-lg">
        <ScrollReveal delay={200}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo Nome */}
            <div>
              <label htmlFor="name" className="block text-sm text-muted-foreground font-light tracking-wide mb-2">
                Nome
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 text-foreground font-light 
                  focus:border-primary focus:outline-none transition-colors duration-300 placeholder:text-muted-foreground/40"
                placeholder="Seu nome"
              />
            </div>

            {/* Campo Email */}
            <div>
              <label htmlFor="email" className="block text-sm text-muted-foreground font-light tracking-wide mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 text-foreground font-light 
                  focus:border-primary focus:outline-none transition-colors duration-300 placeholder:text-muted-foreground/40"
                placeholder="seu@email.com"
              />
            </div>

            {/* Campo Mensagem */}
            <div>
              <label htmlFor="message" className="block text-sm text-muted-foreground font-light tracking-wide mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 text-foreground font-light resize-none
                  focus:border-primary focus:outline-none transition-colors duration-300 placeholder:text-muted-foreground/40"
                placeholder="Sua mensagem..."
              />
            </div>

            {/* Botão de envio com hover elegante */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-light
                  hover:bg-primary/90 transition-all duration-500"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </main>
  );
};

export default Contact;
