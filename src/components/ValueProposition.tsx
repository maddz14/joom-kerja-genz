import { Zap, CheckCircle, Target } from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      icon: Zap,
      iconColor: "text-secondary",
      title: "Daftar 30 Detik Doang!",
      description: "Verifikasi instan via WhatsApp. Langsung bisa cari job!",
    },
    {
      icon: CheckCircle,
      iconColor: "text-primary",
      title: "Pekerja Udah Diverifikasi & Berbakat",
      description: "Setiap talent sudah melewati screening ketat & ada rating real!",
    },
    {
      icon: Target,
      iconColor: "text-accent",
      title: "Dari Kafe Sampai Startup!",
      description: "500+ kategori pekerjaan. Ada yang cocok buat kamu!",
    },
  ];

  return (
    <section className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
          Kenapa{" "}
          <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            JOOMKERJA!?
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 lg:p-12 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-neutral-gray to-neutral-light rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-8 h-8 ${value.iconColor}`} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
