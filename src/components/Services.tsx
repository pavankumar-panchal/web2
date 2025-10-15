import { Camera, Video } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Modelling",
      description: "Fashion, Beauty, Bridal, Fashion Weeks, and Film Festivals - Professional modeling for all occasions.",
      items: ["Fashion", "Beauty", "Bridal", "Fashion Weeks", "Film Festivals"]
    },
    {
      icon: Video,
      title: "UGC & Content Creation",
      description: "All collaboration videos & photos - Creating engaging content that resonates with your audience.",
      items: ["Collaboration Videos", "Social Media Content", "Brand Photography"]
    },
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional modeling and content creation services tailored to bring your brand vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg border border-border hover:border-primary bg-card transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 parallel-anim"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <service.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              {service.items && (
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
