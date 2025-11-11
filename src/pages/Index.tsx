import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import LatestJobs from "@/components/LatestJobs";
import Documentation from "@/components/Documentation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ValueProposition />
        <HowItWorks />
        <Features />
        <LatestJobs />
        <Documentation />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
