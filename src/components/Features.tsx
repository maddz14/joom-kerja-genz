import { Target, Star, MessageSquare } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "Filter Cerdas",
      description: "Cari berdasarkan lokasi, jam kerja, skill, bahkan vibe tempat kerja!",
      gradient: "from-primary/10 to-primary/5",
    },
    {
      icon: Star,
      title: "Profil Lengkap",
      description: "Profil detail + rating bintang + badge 'Top Talent' untuk yang terbaik!",
      gradient: "from-accent/10 to-accent/5",
    },
    {
      icon: MessageSquare,
      title: "Review Jujur",
      description: "Baca review dari pekerja & perusahaan sebelum apply atau hire!",
      gradient: "from-secondary/10 to-secondary/5",
    },
  ];

  return (
    <section className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4">
          Fitur Keren yang{" "}
          <span className="text-primary">Bikin Hidup Lebih Mudah</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16">
          Teknologi yang dirancang untuk Gen Z yang dinamis
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${feature.gradient} backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:scale-105 hover:shadow-2xl transition-all duration-300 group overflow-hidden`}
              >
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-card/60 backdrop-blur-md rounded-2xl" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-card to-neutral-gray rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
