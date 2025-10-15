const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              About Me
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm an entrepreneur and fashion professional with an international modeling background and over eight years of experience in the agency business. This journey has shaped my perspective on both the creative and business sides of fashion, allowing me to experience the industry from every angle.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I specialize in high-quality, visually aesthetic content that blends creativity with strategy, focusing on fashion, beauty and lifestyle on Instagram. Beyond digital collaborations, I work with select projects in modeling, fashion and TV.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As a true animal lover and proud cat mama, I enjoy life's simple moments as much as its big adventures.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-primary mb-2">8+</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">
                Projects Completed
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">
                Brand Collaborations
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">
                Content Created
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
