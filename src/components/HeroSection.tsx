import { Button } from "@/components/ui/button";
import { Search, Users } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] pt-32 pb-20 overflow-hidden bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Kerja Santai,{" "}
                <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
                  Duit Nambah!
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-medium">
                Cari side hustle atau rekrut tim fleksibel — dalam 3 menit!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <Search className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Cari Job Gampang
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Rekrut Tim Keren
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-8 pt-4">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">10K+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Pekerja Aktif</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-secondary">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Perusahaan</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-accent">5K+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Job Tersedia</div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <img
                src={heroImage}
                alt="Gen Z workers in various part-time roles"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-2xl shadow-lg font-bold animate-bounce-slow">
              🎉 Trending!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
