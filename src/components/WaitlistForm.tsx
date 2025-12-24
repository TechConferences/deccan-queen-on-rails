import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Loader2 } from "lucide-react";

const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxDb6kDl_WcuEFGWf1S3Wlv0Jsq_xkkYwrDu1Bg5VkZLvpw07TEIPEeFRqNihpaVfUM/exec";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setIsLoading(true);

    try {
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      toast({
        title: "You're on the list!",
        description: "We'll notify you when tickets are available.",
      });
      setEmail("");

      // Trigger refetch of waitlist count
      window.dispatchEvent(new CustomEvent("waitlist-updated"));
    } catch (error) {
      console.error("Error submitting to waitlist:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 h-14 text-base"
        />
        <Button
          type="submit"
          variant="hero"
          disabled={isLoading}
          className="h-14 px-6 group"
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              Join Waitlist
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
};
