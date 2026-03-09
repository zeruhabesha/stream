import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ChevronRight, Play } from "lucide-react";

export default function Landing() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Background Hero */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60 scale-105"
        style={{ 
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,1) 100%), url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop')` 
        }}
      />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 md:px-16">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg">
            <Play className="fill-white w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tighter italic uppercase">CinemaX</span>
        </div>
        <Link to="/signup">
          <Button variant="ghost" className="text-white hover:text-primary transition-colors font-medium">
            Sign In
          </Button>
        </Link>
      </nav>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4 pt-32 pb-20 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-none">
          Unlimited movies, <br />
          <span className="text-primary italic">TV shows</span>, and more
        </h1>
        <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-2xl">
          Watch anywhere. Cancel anytime. Ready to dive into the world of entertainment?
        </p>

        <div className="w-full max-w-lg flex flex-col sm:flex-row gap-3 items-center">
          <Input 
            type="email" 
            placeholder="Email address" 
            className="h-14 bg-black/40 border-zinc-700 text-lg px-6 rounded-xl backdrop-blur-md focus:ring-primary focus:border-primary transition-all"
          />
          <Link to="/signup" className="w-full sm:w-auto">
            <Button size="lg" className="h-14 px-8 text-lg font-bold rounded-xl w-full group">
              Get Started
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <p className="mt-8 text-sm text-zinc-500">
          Already a member? <Link to="/signup" className="text-white hover:underline">Sign in to your account</Link>
        </p>
      </main>

      {/* Featured Blur Decor */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-red-900/20 rounded-full blur-[128px] pointer-events-none" />
    </div>
  );
}
