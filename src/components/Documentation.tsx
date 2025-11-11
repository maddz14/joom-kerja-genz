import { Play, Eye, ThumbsUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import baristaImg from "@/assets/doc-barista.jpg";
import deliveryImg from "@/assets/doc-delivery.jpg";
import designerImg from "@/assets/doc-designer.jpg";
import tutorImg from "@/assets/doc-tutor.jpg";
import eventImg from "@/assets/doc-event.jpg";
import teamImg from "@/assets/doc-team.jpg";

const Documentation = () => {
  const photos = [
    { src: baristaImg, alt: "Gen Z barista selfie at cafe" },
    { src: deliveryImg, alt: "Delivery rider with aesthetic helmet" },
    { src: designerImg, alt: "Designer at coworking space" },
    { src: tutorImg, alt: "Tutor teaching enthusiastically" },
    { src: eventImg, alt: "Event staff team photo" },
    { src: teamImg, alt: "JOOMKERJA team at office" },
  ];

  return (
    <section className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-text-dark">
            Behind the Scene &{" "}
            <span className="bg-gradient-to-r from-coral to-teal bg-clip-text text-transparent">
              Video Keren
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[60%_40%] gap-8 lg:gap-12 items-start">
          {/* Left: Photo Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover aspect-[4/3] group-hover:scale-110 group-hover:brightness-110 transition-all duration-500"
                />
                <div className="absolute bottom-2 right-2 text-[10px] text-white/50 font-medium">
                  © JOOMKERJA!
                </div>
              </div>
            ))}
          </div>

          {/* Right: Video Promo Mockup */}
          <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
            <div className="relative aspect-video bg-gradient-to-br from-coral/20 to-teal/20 flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-coral/10 to-teal/10"></div>
              <Button
                size="lg"
                className="relative z-10 bg-yellow text-text-dark hover:bg-yellow/90 hover:scale-110 transition-all duration-300 rounded-full w-20 h-20 animate-pulse group-hover:animate-none"
              >
                <Play className="w-8 h-8 fill-current" />
              </Button>
              <div className="absolute bottom-4 left-4 right-4 text-center px-2">
                <p className="text-sm sm:text-base lg:text-lg font-bold text-text-dark bg-background/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg inline-block">
                  Dapat Job Part-Time dalam 3 Menit!
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-6 space-y-4">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  25.8K views
                </span>
                <span className="flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4" />
                  1.2K likes
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  89
                </span>
              </div>

              <p className="text-text-medium leading-relaxed">
                JOOMKERJA! bantu ribuan Gen Z dapet side income! Lihat gimana
                platform kami menghubungkan talent berbakat dengan perusahaan
                keren.
              </p>

              <Button className="w-full bg-teal hover:bg-teal/90 text-white">
                Tonton Sekarang
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
