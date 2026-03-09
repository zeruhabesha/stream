import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight, Play, Eye, EyeOff, Mail, Phone, Lock } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sign up
    navigate("/onboarding");
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-white flex flex-col items-center justify-center p-4">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-8 py-6 md:px-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg">
            <Play className="fill-white w-5 h-5" />
          </div>
          <span className="text-xl font-black tracking-tighter italic uppercase">CinemaX</span>
        </Link>
      </nav>

      <div className="w-full max-w-md z-10 space-y-8 bg-zinc-950/50 backdrop-blur-2xl p-8 md:p-12 rounded-3xl border border-zinc-900 shadow-2xl">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-black tracking-tight leading-none uppercase italic">Create your account</h1>
          <p className="text-zinc-500">Join the future of streaming today</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2 relative">
            <Label htmlFor="contact" className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">Email or Phone</Label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600 group-focus-within:text-primary transition-colors" />
              <Input 
                id="contact"
                type="text" 
                placeholder="you@example.com" 
                className="h-14 pl-12 bg-black border-zinc-800 focus:ring-primary focus:border-primary rounded-xl"
                required
              />
            </div>
          </div>

          <div className="space-y-2 relative">
             <Label htmlFor="password" className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">Password</Label>
             <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600 group-focus-within:text-primary transition-colors" />
              <Input 
                id="password"
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                className="h-14 pl-12 pr-12 bg-black border-zinc-800 focus:ring-primary focus:border-primary rounded-xl"
                required
              />
              <button 
                type="button" 
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-white transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2 pt-2">
            <Checkbox id="terms" className="border-zinc-800 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-400"
            >
              I agree to the <span className="text-white hover:underline cursor-pointer">Terms of Service</span> and <span className="text-white hover:underline cursor-pointer">Privacy Policy</span>
            </label>
          </div>

          <Button type="submit" size="lg" className="h-14 w-full text-lg font-bold rounded-xl group uppercase tracking-widest italic transition-all active:scale-95 shadow-[0_0_20px_rgba(255,0,0,0.2)]">
            Create Account
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>

        <div className="text-center pt-4">
           <p className="text-zinc-500">
             Already a member? <Link to="/" className="text-white hover:text-primary transition-colors font-bold uppercase tracking-tighter italic">Sign in</Link>
           </p>
        </div>
      </div>
    </div>
  );
}
