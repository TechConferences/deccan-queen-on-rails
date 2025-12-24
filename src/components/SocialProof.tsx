import { cn } from "@/lib/utils";

const avatars = [
  { id: 1, color: "bg-ruby" },
  { id: 2, color: "bg-gold" },
  { id: 3, color: "bg-ruby-light" },
  { id: 4, color: "bg-gold-light" },
  { id: 5, color: "bg-ruby-dark" },
];

interface SocialProofProps {
  count?: number;
  className?: string;
}

export const SocialProof = ({ count = 134, className }: SocialProofProps) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex -space-x-3">
        {avatars.map((avatar, index) => (
          <div
            key={avatar.id}
            className={cn(
              "w-10 h-10 rounded-full border-2 border-card flex items-center justify-center text-sm font-medium shadow-soft",
              avatar.color,
              "animate-fade-in"
            )}
            style={{ 
              animationDelay: `${index * 100}ms`,
              zIndex: avatars.length - index 
            }}
          >
            <span className="text-primary-foreground text-xs font-bold">
              {String.fromCharCode(65 + index)}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-2xl font-bold text-primary">{count}+</span>
        <span className="text-muted-foreground text-sm">on the waitlist</span>
      </div>
    </div>
  );
};
