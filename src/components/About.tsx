const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Elevating Fashion,
              <br />
              One Model at a Time
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              STYLISTIC is a premier model agency dedicated to discovering and nurturing exceptional talent. We represent the world's most sought-after models, connecting them with leading fashion brands, designers, and creative visionaries.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With years of industry expertise, we've established ourselves as a trusted partner in the fashion world, known for our commitment to excellence and our ability to launch successful modeling careers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">
                Models Represented
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">
                Successful Campaigns
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">
                Fashion Brands
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
