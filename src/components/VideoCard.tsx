import { Play } from "lucide-react";

interface VideoCardProps {
  videoUrl?: string;
  className?: string;
}

export default function VideoCard({ videoUrl, className = "" }: VideoCardProps) {
  if (videoUrl) {
    const separator = videoUrl.includes("?") ? "&" : "?";
    const enrichedUrl = videoUrl.includes("rel=0")
      ? videoUrl
      : `${videoUrl}${separator}rel=0&modestbranding=1`;

    return (
      <div className={`glass rounded-2xl overflow-hidden border border-border/30 ${className}`}>
        <iframe
          src={enrichedUrl}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full aspect-video"
          title="Nuno Tavares — Manus AI"
        />
      </div>
    );
  }

  return (
    <div className={`glass rounded-2xl overflow-hidden border border-border/30 relative group cursor-pointer ${className}`}>
      <div className="w-full aspect-video bg-gradient-to-br from-card via-background to-card flex items-center justify-center relative">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(209_92%_35%/0.08)_0%,transparent_70%)]" />

        {/* Play button */}
        <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-accent/90 animate-pulse-cta shadow-lg glow-red group-hover:scale-110 transition-transform duration-300">
          <Play className="w-8 h-8 text-white fill-white ml-1" />
        </div>

        {/* Bottom label */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="glass-subtle rounded-lg px-3 py-2">
            <p className="text-xs text-muted-foreground font-heading text-center tracking-wide">
              Watch Nuno explain the Manus AI system
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
