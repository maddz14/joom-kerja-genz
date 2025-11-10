import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Briefcase } from "lucide-react";

const LatestJobs = () => {
  const jobs = [
    {
      title: "Barista Part-Time",
      company: "Kopi Kenangan",
      salary: "Rp 25K/jam",
      duration: "4-6 jam",
      location: "Jakarta Selatan",
      tags: ["Remote", "Weekdays"],
      logo: "☕",
    },
    {
      title: "Kurir Makanan",
      company: "GoFood",
      salary: "Rp 30K/jam",
      duration: "Fleksibel",
      location: "Jakarta Pusat",
      tags: ["Flexible", "Daily"],
      logo: "🛵",
    },
    {
      title: "Content Creator",
      company: "Startup Digital",
      salary: "Rp 50K/jam",
      duration: "3-5 jam",
      location: "Remote",
      tags: ["Remote", "Creative"],
      logo: "📱",
    },
    {
      title: "Tutor Bahasa Inggris",
      company: "EduTech",
      salary: "Rp 40K/jam",
      duration: "2-3 jam",
      location: "Jakarta Barat",
      tags: ["Weekend", "Education"],
      logo: "📚",
    },
    {
      title: "Event Staff",
      company: "Event Organizer",
      salary: "Rp 35K/jam",
      duration: "8 jam",
      location: "Jakarta Utara",
      tags: ["Weekend", "Event"],
      logo: "🎪",
    },
    {
      title: "Desain Grafis",
      company: "Creative Studio",
      salary: "Rp 45K/jam",
      duration: "Fleksibel",
      location: "Remote",
      tags: ["Remote", "Design"],
      logo: "🎨",
    },
  ];

  const tagColors = [
    "bg-primary/20 text-primary hover:bg-primary/30",
    "bg-secondary/20 text-secondary hover:bg-secondary/30",
    "bg-accent/20 text-accent-foreground hover:bg-accent/30",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Job Terkini —{" "}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Lagi Hits!
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ribuan lowongan baru setiap hari!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-border"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl flex-shrink-0">{job.logo}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-xl text-card-foreground mb-1 truncate">
                    {job.title}
                  </h3>
                  <p className="text-muted-foreground">{job.company}</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="w-4 h-4 text-secondary" />
                  <span className="font-semibold text-secondary">{job.salary}</span>
                  <span className="text-muted-foreground">|</span>
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{job.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    variant="secondary"
                    className={tagColors[tagIndex % tagColors.length]}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-all duration-300">
                <Briefcase className="w-4 h-4 mr-2" />
                Lamar Sekarang
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground hover:scale-105 transition-all duration-300"
          >
            Lihat Semua Job
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;
