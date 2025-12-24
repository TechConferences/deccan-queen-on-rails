import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TimeUnit {
  value: number;
  label: string;
}

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

export const CountdownTimer = ({ targetDate, className }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([]);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft([
          { value: days, label: "Days" },
          { value: hours, label: "Hours" },
          { value: minutes, label: "Minutes" },
          { value: seconds, label: "Seconds" },
        ]);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={cn("flex items-center justify-center gap-2 sm:gap-4", className)}>
      {timeLeft.map((unit, index) => (
        <div key={unit.label} className="flex items-center gap-2 sm:gap-4">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-card border-2 border-border flex items-center justify-center shadow-soft">
                <span className="text-2xl sm:text-3xl font-display font-bold text-primary">
                  {String(unit.value).padStart(2, "0")}
                </span>
              </div>
              <div className="absolute -inset-1 bg-primary/5 rounded-xl -z-10 blur-sm" />
            </div>
            <span className="text-xs sm:text-sm text-muted-foreground mt-2 font-medium">
              {unit.label}
            </span>
          </div>
          {index < timeLeft.length - 1 && (
            <span className="text-2xl sm:text-3xl text-primary/40 font-light mb-6">:</span>
          )}
        </div>
      ))}
    </div>
  );
};
