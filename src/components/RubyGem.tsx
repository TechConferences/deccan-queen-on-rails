import { cn } from "@/lib/utils";

interface RubyGemProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}

export const RubyGem = ({ className, size = "md", style }: RubyGemProps) => {
  const sizes = {
    sm: "w-8 h-10",
    md: "w-12 h-16",
    lg: "w-20 h-24",
  };

  return (
    <svg
      viewBox="0 0 50 60"
      className={cn(sizes[size], "animate-float", className)}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ruby gem shape */}
      <path
        d="M25 5L45 20L40 55L25 60L10 55L5 20L25 5Z"
        className="fill-ruby"
        stroke="hsl(var(--ruby-dark))"
        strokeWidth="1"
      />
      {/* Top facet */}
      <path
        d="M25 5L45 20L25 25L5 20L25 5Z"
        className="fill-ruby-light"
        opacity="0.8"
      />
      {/* Left facet */}
      <path
        d="M5 20L25 25L25 60L10 55L5 20Z"
        className="fill-ruby"
        opacity="0.9"
      />
      {/* Right facet */}
      <path
        d="M45 20L25 25L25 60L40 55L45 20Z"
        className="fill-ruby-dark"
        opacity="0.7"
      />
      {/* Shine */}
      <path
        d="M15 15L25 10L35 15L25 22L15 15Z"
        fill="white"
        opacity="0.3"
      />
    </svg>
  );
};
