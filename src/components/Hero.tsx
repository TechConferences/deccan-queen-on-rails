import { WaitlistForm } from "./WaitlistForm";
import { SocialProof } from "./SocialProof";
import { CountdownTimer } from "./CountdownTimer";
import { RubyGem } from "./RubyGem";
import { MapPin, Calendar, Sparkles } from "lucide-react";

export const Hero = () => {
  // Set conference date to March 2026
  const conferenceDate = new Date("2026-03-15T09:00:00");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden bg-gradient-hero">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating gems */}
        <RubyGem className="absolute top-20 left-[10%] opacity-20" size="sm" />
        <RubyGem className="absolute top-40 right-[15%] opacity-15" size="md" style={{ animationDelay: "1s" }} />
        <RubyGem className="absolute bottom-32 left-[20%] opacity-10" size="lg" style={{ animationDelay: "2s" }} />
        <RubyGem className="absolute bottom-48 right-[10%] opacity-15" size="sm" style={{ animationDelay: "0.5s" }} />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-soft mb-8 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium text-muted-foreground">Ruby Conference • Pune, India</span>
        </div>

        {/* Main heading */}
        <h1 
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up leading-tight"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-gradient-ruby">coming</span>{" "}
          <span className="text-foreground">soon</span>
        </h1>

        {/* Subtitle */}
        <p 
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in-up leading-relaxed"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="font-semibold text-foreground">Deccan Queen on Rails</span> is a one-of-a-kind conference set in the heart of history at{" "}
          <span className="font-semibold text-primary">Pune</span>. Bringing together thinkers, builders, and creators, the conference celebrates ideas that move fast—just like the Deccan Queen.
        </p>

        {/* Event details */}
{/* Date and location hidden for now
        <div
          className="flex flex-wrap items-center justify-center gap-6 mb-10 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="font-medium">March 15-16, 2026</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="font-medium">Pune, Maharashtra</span>
          </div>
        </div>
*/}

        {/* Countdown */}
        <div 
          className="mb-12 opacity-0 animate-scale-in"
          style={{ animationDelay: "0.6s" }}
        >
          <CountdownTimer targetDate={conferenceDate} />
        </div>

        {/* Waitlist form */}
        <div 
          className="mb-8 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.7s" }}
        >
          <WaitlistForm />
        </div>

        {/* Social proof */}
        <div 
          className="flex justify-center opacity-0 animate-fade-in"
          style={{ animationDelay: "0.9s" }}
        >
          <SocialProof />
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-dark/50 to-transparent pointer-events-none" />
    </section>
  );
};
