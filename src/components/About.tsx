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
              Welcome to STYLISTIC - where passion meets professionalism. I'm a versatile model and content creator with expertise spanning fashion, beauty, and bridal modeling. My journey in the modeling industry has taken me through prestigious fashion weeks and film festivals, allowing me to work with renowned brands and creative teams worldwide.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Beyond traditional modeling, I specialize in UGC (User Generated Content) and content creation, producing authentic and engaging visual stories that resonate with diverse audiences. Whether it's high-fashion editorials, beauty campaigns, or collaborative brand content, I bring dedication, creativity, and professionalism to every project.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My commitment to excellence and my ability to adapt to various creative visions have established me as a trusted collaborator in the fashion and content creation space. I believe in creating meaningful connections through visual storytelling and bringing brands' visions to life with authenticity and style.
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
