const Footer = () => (
  <footer className="glass-subtle py-8 border-t border-brand-silver/10">
    <div className="max-w-funnel mx-auto px-4 md:px-6 lg:px-8 text-center">
      <p className="text-muted-foreground text-sm font-body">
        © 2026 Automated Marketer | Rapid Active Marketing. All Rights Reserved.
      </p>
      <div className="flex items-center justify-center gap-4 mt-3">
        <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300">Privacy Policy</a>
        <span className="text-brand-silver/30">|</span>
        <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default Footer;
