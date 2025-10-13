import { Sparkles, Camera, TrendingUp, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Editorial & Runway",
      description: "Top-tier models for fashion shows, magazine editorials, and high-fashion campaigns.",
    },
    {
      icon: Sparkles,
      title: "Commercial Modeling",
      description: "Versatile talent for advertising, e-commerce, and brand campaigns.",
    },
    {
      icon: TrendingUp,
      title: "Career Development",
      description: "Comprehensive training, portfolio development, and career management services.",
    },
    {
      icon: Users,
      title: "Talent Booking",
      description: "Seamless booking process connecting brands with the perfect model match.",
    },
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive modeling solutions for both aspiring models and leading brands seeking exceptional talent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg border border-border hover:border-primary bg-card transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 parallel-anim"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <service.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
