import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,0,0,0.1)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg space-y-8">
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="bg-primary p-2 rounded-xl">
            <Play className="fill-white w-8 h-8" />
          </div>
          <span className="text-3xl font-black tracking-tighter italic uppercase">CinemaX</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-8xl font-black tracking-tighter italic text-primary animate-pulse">404</h1>
          <h2 className="text-3xl font-black uppercase tracking-tighter italic leading-none">Lost in the dark?</h2>
          <p className="text-zinc-500 font-medium text-lg italic">
            Even the best movies have deleted scenes. This page isn't in the script.
          </p>
        </div>

        <div className="pt-8">
          <Link to="/">
            <Button size="lg" className="h-16 px-12 text-xl font-black rounded-2xl group uppercase tracking-widest italic transition-all shadow-[0_0_30px_rgba(255,0,0,0.2)]">
              <Home className="mr-3 w-6 h-6" />
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
