import { Smartphone, Briefcase, DollarSign, Building2, FileText, Sparkles } from "lucide-react";

const HowItWorks = () => {
  const workerSteps = [
    {
      icon: Smartphone,
      title: "Daftar Pakai HP",
      description: "Isi profil & upload KTP (2 menit!)",
    },
    {
      icon: Briefcase,
      title: "Pilih Skill & Jam Luang",
      description: "Set ketersediaanmu, kami carikan yang cocok",
    },
    {
      icon: DollarSign,
      title: "Dapat Job & Duit!",
      description: "Kerja fleksibel, gajian on-time via transfer",
    },
  ];

  const companySteps = [
    {
      icon: Building2,
      title: "Buat Akun Bisnis",
      description: "Verifikasi perusahaan gratis & cepat",
    },
    {
      icon: FileText,
      title: "Post Job 1 Menit",
      description: "Tulis kebutuhan, atur budget & durasi",
    },
    {
      icon: Sparkles,
      title: "Pilih Kandidat & Mulai!",
      description: "Review profil, interview, hire dalam 24 jam",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4">
          Cara Kerja —{" "}
          <span className="text-primary">Super Gampang!</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16">
          Mulai dalam hitungan menit, bukan jam!
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Worker Card */}
          <div className="relative bg-gradient-to-br from-card to-secondary/5 p-8 lg:p-12 rounded-3xl shadow-lg border-l-4 border-secondary hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-card-foreground mb-2">
                Buat Pekerja
              </h3>
              <p className="text-muted-foreground">
                Dapet income tambahan dengan cara mudah
              </p>
            </div>

            <div className="space-y-6">
              {workerSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex gap-4 items-start group">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-secondary group-hover:text-secondary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-card-foreground mb-1">
                        Step {index + 1}: {step.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {step.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Company Card */}
          <div className="relative bg-gradient-to-br from-card to-primary/5 p-8 lg:p-12 rounded-3xl shadow-lg border-l-4 border-primary hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-card-foreground mb-2">
                Buat Perusahaan
              </h3>
              <p className="text-muted-foreground">
                Rekrut talent berkualitas dengan cepat
              </p>
            </div>

            <div className="space-y-6">
              {companySteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex gap-4 items-start group">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-card-foreground mb-1">
                        Step {index + 1}: {step.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {step.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
