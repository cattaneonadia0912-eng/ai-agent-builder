const GoldSeal = ({ text = "100% Guaranteed", size = "md" }: { text?: string; size?: "sm" | "md" | "lg" }) => {
  const sizeClasses = {
    sm: "w-24 h-24 text-xs",
    md: "w-32 h-32 text-sm",
    lg: "w-40 h-40 text-base",
  };

  return (
    <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border-2 border-brand-spindle/30" />
      {/* Inner ring */}
      <div className="absolute inset-2 rounded-full border border-primary/40" />
      {/* Center fill — glass */}
      <div className="absolute inset-4 rounded-full glass border-brand-silver/20" />
      {/* Text */}
      <div className="relative z-10 text-center px-4">
        <div className="text-primary font-heading font-bold leading-tight">{text}</div>
        <div className="text-brand-spindle/60 text-[10px] mt-0.5 font-heading-alt">★ ★ ★</div>
      </div>
    </div>
  );
};

export default GoldSeal;
