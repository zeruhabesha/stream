import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight, Play, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const GENRES = [
  { id: "action", name: "Action", icon: "🔥", color: "bg-red-500/20 text-red-500 border-red-500/30" },
  { id: "comedy", name: "Comedy", icon: "😂", color: "bg-yellow-500/20 text-yellow-500 border-yellow-500/30" },
  { id: "horror", name: "Horror", icon: "👻", color: "bg-purple-500/20 text-purple-500 border-purple-500/30" },
  { id: "scifi", name: "Sci-Fi", icon: "🚀", color: "bg-blue-500/20 text-blue-500 border-blue-500/30" },
  { id: "romance", name: "Romance", icon: "💖", color: "bg-pink-500/20 text-pink-500 border-pink-500/30" },
  { id: "documentary", name: "Documentary", icon: "🌍", color: "bg-green-500/20 text-green-500 border-green-500/30" },
  { id: "drama", name: "Drama", icon: "🎭", color: "bg-orange-500/20 text-orange-500 border-orange-500/30" },
  { id: "mystery", name: "Mystery", icon: "🔍", color: "bg-indigo-500/20 text-indigo-500 border-indigo-500/30" },
  { id: "thriller", name: "Thriller", icon: "🤫", color: "bg-zinc-500/20 text-zinc-500 border-zinc-500/30" },
  { id: "animation", name: "Animation", icon: "🎨", color: "bg-cyan-500/20 text-cyan-500 border-cyan-500/30" },
];

export default function Onboarding() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleGenre = (id: string) => {
    setSelectedGenres(prev => 
      prev.includes(id) ? prev.filter(g => g !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    if (selectedGenres.length > 0) {
      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col p-8 md:p-16">
      <nav className="flex items-center justify-between mb-20">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg">
            <Play className="fill-white w-5 h-5" />
          </div>
          <span className="text-xl font-black tracking-tighter italic uppercase">CinemaX</span>
        </div>
        <div className="text-zinc-500 font-bold uppercase tracking-widest text-xs italic">Step 1 of 2</div>
      </nav>

      <div className="max-w-4xl mx-auto w-full flex-grow flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none mb-4">
          Personalize your experience
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl font-medium">
          Select at least 3 genres you love. We'll curate the perfect movie collection just for you.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full">
          {GENRES.map((genre) => (
            <button
              key={genre.id}
              onClick={() => toggleGenre(genre.id)}
              className={cn(
                "group relative p-6 rounded-3xl border-2 transition-all duration-300 flex flex-col items-center gap-3 overflow-hidden active:scale-95 shadow-xl shadow-black",
                selectedGenres.includes(genre.id) 
                  ? "bg-primary border-primary scale-105" 
                  : "bg-zinc-950 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900"
              )}
            >
              <span className="text-3xl">{genre.icon}</span>
              <span className={cn(
                "font-bold uppercase tracking-tighter italic text-xs",
                selectedGenres.includes(genre.id) ? "text-white" : "text-zinc-400"
              )}>
                {genre.name}
              </span>
              
              {selectedGenres.includes(genre.id) && (
                <div className="absolute top-2 right-2 bg-white/20 p-1 rounded-full backdrop-blur-md">
                   <Check className="w-3 h-3 text-white" />
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-4">
           <Button 
            onClick={handleNext}
            disabled={selectedGenres.length < 3}
            size="lg" 
            className="h-16 px-12 text-xl font-black rounded-2xl group uppercase tracking-widest italic transition-all shadow-[0_0_30px_rgba(255,0,0,0.3)] disabled:opacity-50 disabled:shadow-none"
          >
            Finish Onboarding
            <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-zinc-600 text-sm font-bold uppercase tracking-widest italic">
            {selectedGenres.length < 3 ? `Select ${3 - selectedGenres.length} more genres` : "Ready to go!"}
          </p>
        </div>
      </div>
    </div>
  );
}
