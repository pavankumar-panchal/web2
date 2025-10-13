import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-up">
        <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 text-muted-foreground">
          Welcome To
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
          STYLISTIC
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 uppercase tracking-wider font-light">
          A Professional Model Agency
        </p>
        <Button
          variant="hero"
          size="xl"
          onClick={scrollToContact}
          className="animate-scale-in"
        >
          Become A Model
        </Button>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
