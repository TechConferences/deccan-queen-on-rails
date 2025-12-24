import { Train } from "lucide-react";

export const TrainDecoration = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-16 pointer-events-none opacity-20">
      {/* Track lines */}
      <div className="absolute bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-3 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Animated train */}
      <div className="animate-train absolute bottom-6">
        <Train className="h-8 w-8 text-primary" />
      </div>
    </div>
  );
};
