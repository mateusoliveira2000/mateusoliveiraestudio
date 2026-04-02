/* Rodapé elegante e minimalista */
const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="font-signature text-2xl text-primary mb-2">Estúdio</p>
        <p className="text-sm text-muted-foreground font-light tracking-wide">
          © {new Date().getFullYear()} — Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
