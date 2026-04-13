import { useState, useEffect } from "react";

const StickyHeader = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ backgroundColor: "hsl(213 69% 14% / 0.95)", backdropFilter: "blur(8px)" }}
    >
      <div className="max-w-funnel mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-14 md:h-16">
        <span className="font-heading text-lg md:text-xl font-bold text-foreground tracking-tight">
          Automated <span className="text-primary">Marketer</span>
        </span>
        <button
          onClick={scrollToForm}
          className="bg-primary text-primary-foreground font-heading font-bold text-sm md:text-base px-4 md:px-6 py-2 rounded-md hover:brightness-110 transition-all"
        >
          Register Free →
        </button>
      </div>
    </header>
  );
};

export default StickyHeader;
