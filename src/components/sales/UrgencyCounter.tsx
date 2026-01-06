import { useState, useEffect } from "react";
import { Clock, AlertTriangle } from "lucide-react";

export const UrgencyCounter = () => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 30,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        // Reset to 30min when reaches 0
        return { minutes: 30, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 sm:p-6">
      <div className="flex items-center justify-center gap-2 mb-3">
        <AlertTriangle className="w-5 h-5 text-destructive animate-pulse" />
        <span className="text-destructive font-semibold text-sm sm:text-base">
          OFERTA ESPECIAL POR TIEMPO LIMITADO
        </span>
        <AlertTriangle className="w-5 h-5 text-destructive animate-pulse" />
      </div>
      
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="bg-card border border-border rounded-lg px-3 py-2 sm:px-4 sm:py-3">
            <span className="text-xl sm:text-3xl font-bold text-foreground font-mono">
              {formatNumber(timeLeft.minutes)}
            </span>
            <span className="block text-[10px] sm:text-xs text-muted-foreground uppercase">Min</span>
          </div>
          <span className="text-2xl font-bold text-primary">:</span>
          <div className="bg-card border border-border rounded-lg px-3 py-2 sm:px-4 sm:py-3">
            <span className="text-xl sm:text-3xl font-bold text-foreground font-mono">
              {formatNumber(timeLeft.seconds)}
            </span>
            <span className="block text-[10px] sm:text-xs text-muted-foreground uppercase">Seg</span>
          </div>
        </div>
      </div>
      
      <p className="text-center text-xs sm:text-sm text-muted-foreground mt-3">
        Después de este tiempo, el precio volverá al valor original
      </p>
    </div>
  );
};
