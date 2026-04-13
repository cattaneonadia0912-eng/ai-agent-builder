import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate?: string; // ISO string for date countdown
  minutes?: number; // For minute-based countdown (upsell)
  className?: string;
  labelClassName?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate, minutes, className = "", labelClassName = "" }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [endTime] = useState(() => {
    if (targetDate) return new Date(targetDate).getTime();
    if (minutes) return Date.now() + minutes * 60 * 1000;
    return Date.now();
  });

  useEffect(() => {
    const calculate = () => {
      const now = Date.now();
      const diff = Math.max(0, endTime - now);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, [endTime]);

  const blocks = targetDate
    ? [
        { value: timeLeft.days, label: "Days" },
        { value: timeLeft.hours, label: "Hours" },
        { value: timeLeft.minutes, label: "Minutes" },
        { value: timeLeft.seconds, label: "Seconds" },
      ]
    : [
        { value: timeLeft.minutes, label: "Min" },
        { value: timeLeft.seconds, label: "Sec" },
      ];

  return (
    <div className={`flex items-center justify-center gap-2 md:gap-4 ${className}`}>
      {blocks.map((block, i) => (
        <div key={block.label} className="flex items-center gap-2 md:gap-4">
          <div className="flex flex-col items-center">
            <span className="font-heading-alt text-3xl md:text-5xl lg:text-6xl font-bold text-primary tabular-nums leading-none">
              {String(block.value).padStart(2, "0")}
            </span>
            <span className={`text-xs md:text-sm mt-1 uppercase tracking-wider ${labelClassName || "text-brand-muted"}`}>
              {block.label}
            </span>
          </div>
          {i < blocks.length - 1 && (
            <span className="text-primary text-2xl md:text-4xl font-bold -mt-4 md:-mt-5">:</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
