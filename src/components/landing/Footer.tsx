const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-muted/50 border-t border-border/50">
      <div className="container max-w-4xl text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Todos os direitos reservados
        </p>
        <p className="text-muted-foreground text-xs mt-2">
          Este produto é digital. Após a confirmação do pagamento, você receberá acesso por e-mail.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
