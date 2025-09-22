import BackgroundElements from "@/components/BackgroundElements";
import HeroSection from "@/components/HeroSection";
import StepsSection from "@/components/StepsSection";
import DreamForm from "@/components/DreamForm";
import FinalSection from "@/components/FinalSection";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Animated background elements */}
      <BackgroundElements />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <StepsSection />
        <DreamForm />
        <FinalSection />
      </main>
    </div>
  );
};

export default Index;
