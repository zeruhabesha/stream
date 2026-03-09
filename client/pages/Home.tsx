import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, Info, Search, Bell, User, ChevronRight, TrendingUp, Clock, Star, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const MOVIES = [
  { id: 1, title: "Stranger Things", category: "Trending Now", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop", rating: "9.2", year: "2024" },
  { id: 2, title: "The Batman", category: "Popular on CinemaX", image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=2037&auto=format&fit=crop", rating: "8.8", year: "2024" },
  { id: 3, title: "Dune: Part Two", category: "Trending Now", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop", rating: "9.5", year: "2024" },
  { id: 4, title: "Oppenheimer", category: "Award Winning", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop", rating: "9.3", year: "2023" },
  { id: 5, title: "Spider-Man: Across the Spider-Verse", category: "Popular on CinemaX", image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1935&auto=format&fit=crop", rating: "9.0", year: "2023" },
  { id: 6, title: "The Last of Us", category: "TV Shows", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop", rating: "9.4", year: "2023" },
  { id: 7, title: "Inside Out 2", category: "New Releases", image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070&auto=format&fit=crop", rating: "8.5", year: "2024" },
  { id: 8, title: "Blade Runner 2049", category: "Sci-Fi Hits", image: "https://images.unsplash.com/photo-1620121692029-d088224efc74?q=80&w=1932&auto=format&fit=crop", rating: "8.7", year: "2017" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = Array.from(new Set(MOVIES.map(m => m.category)));

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
      {/* Header */}
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-8 py-4 flex items-center justify-between",
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-zinc-900 py-3" : "bg-gradient-to-b from-black/80 to-transparent py-6"
      )}>
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <Play className="fill-white w-5 h-5" />
            </div>
            <span className="text-xl font-black tracking-tighter italic uppercase">CinemaX</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-bold uppercase tracking-widest italic text-zinc-400">
            <Link to="/home" className="text-white hover:text-primary transition-colors underline decoration-primary underline-offset-8 decoration-2">Home</Link>
            <Link to="#" className="hover:text-white transition-colors">TV Shows</Link>
            <Link to="#" className="hover:text-white transition-colors">Movies</Link>
            <Link to="#" className="hover:text-white transition-colors">Latest</Link>
            <Link to="#" className="hover:text-white transition-colors">My List</Link>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <Search className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer transition-colors" />
          <Bell className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer transition-colors" />
          <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-zinc-700 transition-colors cursor-pointer group">
             <User className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
          </div>
        </div>
      </header>

      {/* Hero Featured Section */}
      <section className="relative h-[90vh] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8) 100%), linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%), url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop')` 
          }}
        />

        <div className="relative z-10 h-full flex flex-col justify-end px-8 md:px-16 pb-24 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
             <div className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest italic flex items-center gap-1.5">
               <TrendingUp className="w-3 h-3" />
               #1 in Movies Today
             </div>
             <div className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest italic flex items-center gap-1.5 border border-zinc-800 px-3 py-1 rounded-full">
               <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
               9.2 Rating
             </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-6 drop-shadow-2xl">
            Stranger <br /> Things
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-300 mb-10 font-medium max-w-xl leading-relaxed drop-shadow-lg">
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" className="h-14 px-10 text-lg font-black rounded-xl group uppercase tracking-widest italic transition-all shadow-2xl">
              <Play className="mr-2 w-6 h-6 fill-white" />
              Watch Now
            </Button>
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-black rounded-xl bg-white/10 hover:bg-white/20 border-white/10 text-white backdrop-blur-md transition-all uppercase tracking-widest italic">
              <Info className="mr-2 w-6 h-6" />
              Details
            </Button>
            <Button size="icon" variant="outline" className="h-14 w-14 rounded-xl bg-black/40 border-zinc-700 hover:border-primary transition-all text-white backdrop-blur-md">
               <Plus className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Movie Lists */}
      <main className="px-8 md:px-16 -mt-20 relative z-20 space-y-16 pb-32">
        {categories.map((category) => (
          <div key={category} className="space-y-6">
            <div className="flex items-center justify-between">
               <h2 className="text-2xl font-black tracking-tighter uppercase italic flex items-center gap-3">
                 <div className="w-1.5 h-8 bg-primary rounded-full" />
                 {category}
               </h2>
               <Link to="#" className="text-xs font-bold uppercase tracking-widest italic text-zinc-500 hover:text-primary transition-colors flex items-center group">
                 Explore All
                 <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {MOVIES.filter(m => m.category === category || category === "Trending Now").slice(0, 5).map((movie) => (
                <div key={movie.id} className="group relative space-y-3 cursor-pointer">
                  <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-zinc-900 group-hover:border-primary/50 transition-all duration-500 shadow-xl group-hover:shadow-primary/20 group-hover:-translate-y-2">
                    <img 
                      src={movie.image} 
                      alt={movie.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out grayscale-[0.2] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/0 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                    
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-[10px] font-bold text-white flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                       <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                       {movie.rating}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                       <Button size="sm" className="w-full h-10 rounded-xl font-bold uppercase tracking-widest italic text-[10px]">
                         <Play className="mr-1.5 w-3 h-3 fill-white" />
                         Play Trailer
                       </Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-1 px-1">
                    <h3 className="font-bold uppercase tracking-tighter italic text-sm truncate group-hover:text-primary transition-colors">{movie.title}</h3>
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest italic text-zinc-500">
                      <div className="flex items-center gap-2">
                         <span>{movie.year}</span>
                         <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                         <span>124 min</span>
                      </div>
                      <div className="border border-zinc-800 px-1.5 py-0.5 rounded text-[8px]">4K</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>

      {/* Floating Bottom Nav for Mobile */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-zinc-950/80 backdrop-blur-2xl border border-zinc-800 px-6 py-4 rounded-3xl flex items-center justify-between z-50 shadow-2xl">
         <Link to="/home" className="text-primary"><TrendingUp className="w-6 h-6" /></Link>
         <Search className="w-6 h-6 text-zinc-500" />
         <Plus className="w-6 h-6 text-zinc-500" />
         <Bell className="w-6 h-6 text-zinc-500" />
         <User className="w-6 h-6 text-zinc-500" />
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 pt-20 pb-12 px-8 md:px-16">
         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
            <div className="col-span-2">
               <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="bg-primary p-1.5 rounded-lg">
                  <Play className="fill-white w-5 h-5" />
                </div>
                <span className="text-xl font-black tracking-tighter italic uppercase">CinemaX</span>
              </Link>
              <p className="text-zinc-500 text-sm max-w-xs mb-8 font-medium">
                The ultimate destination for movie lovers. Experience high-quality streaming of your favorite movies and TV shows anytime, anywhere.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer group">
                  <span className="text-zinc-400 group-hover:text-white font-black italic">f</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer group">
                  <span className="text-zinc-400 group-hover:text-white font-black italic">t</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer group">
                  <span className="text-zinc-400 group-hover:text-white font-black italic">ig</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
               <h4 className="text-xs font-black uppercase tracking-widest italic">Platform</h4>
               <ul className="space-y-4 text-xs font-bold text-zinc-500 uppercase tracking-widest italic">
                 <li><Link to="#" className="hover:text-primary transition-colors">Movies</Link></li>
                 <li><Link to="#" className="hover:text-primary transition-colors">TV Shows</Link></li>
                 <li><Link to="#" className="hover:text-primary transition-colors">New Releases</Link></li>
                 <li><Link to="#" className="hover:text-primary transition-colors">Live Sports</Link></li>
               </ul>
            </div>

            <div className="space-y-6">
               <h4 className="text-xs font-black uppercase tracking-widest italic">Support</h4>
               <ul className="space-y-4 text-xs font-bold text-zinc-500 uppercase tracking-widest italic">
                 <li><Link to="#" className="hover:text-primary transition-colors">Help Center</Link></li>
                 <li><Link to="#" className="hover:text-primary transition-colors">Account</Link></li>
                 <li><Link to="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
                 <li><Link to="#" className="hover:text-primary transition-colors">Devices</Link></li>
               </ul>
            </div>

            <div className="space-y-6 col-span-2">
               <h4 className="text-xs font-black uppercase tracking-widest italic">Subscribe to Newsletter</h4>
               <p className="text-zinc-500 text-xs font-medium uppercase tracking-widest italic">Get the latest updates and movie news.</p>
               <div className="flex gap-2">
                  <input type="email" placeholder="EMAIL ADDRESS" className="bg-zinc-900 border-zinc-800 rounded-xl px-4 py-3 text-[10px] font-bold italic w-full focus:ring-primary focus:border-primary" />
                  <Button size="icon" className="h-12 w-12 rounded-xl shrink-0"><ChevronRight className="w-5 h-5" /></Button>
               </div>
            </div>
         </div>
         
         <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] italic">© 2024 CINEMAX INC. ALL RIGHTS RESERVED.</p>
            <div className="flex items-center gap-8 text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] italic">
               <Link to="#" className="hover:text-white transition-colors">Privacy</Link>
               <Link to="#" className="hover:text-white transition-colors">Terms</Link>
               <Link to="#" className="hover:text-white transition-colors">Cookies</Link>
            </div>
         </div>
      </footer>
    </div>
  );
}
