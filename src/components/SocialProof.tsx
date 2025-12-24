import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxDb6kDl_WcuEFGWf1S3Wlv0Jsq_xkkYwrDu1Bg5VkZLvpw07TEIPEeFRqNihpaVfUM/exec";

const avatars = [
  { id: 1, color: "bg-ruby" },
  { id: 2, color: "bg-gold" },
  { id: 3, color: "bg-ruby-light" },
  { id: 4, color: "bg-gold-light" },
  { id: 5, color: "bg-ruby-dark" },
];

interface SocialProofProps {
  className?: string;
}

export const SocialProof = ({ className }: SocialProofProps) => {
  const [count, setCount] = useState<number>(0);

  const fetchCount = async () => {
    try {
      const response = await fetch(`${GOOGLE_APPS_SCRIPT_URL}?action=count`);
      const data = await response.json();
      if (data.success) {
        setCount(data.count);
      }
    } catch (error) {
      console.error("Error fetching waitlist count:", error);
    }
  };

  useEffect(() => {
    fetchCount();

    // Listen for waitlist updates to refetch count
    const handleUpdate = () => fetchCount();
    window.addEventListener("waitlist-updated", handleUpdate);

    return () => window.removeEventListener("waitlist-updated", handleUpdate);
  }, []);

  if (count === 0) return null;

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
