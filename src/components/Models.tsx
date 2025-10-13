import { Card } from "@/components/ui/card";

const Models = () => {
  const models = [
    { name: "Emma Sterling", specialty: "Runway & Editorial", height: "5'10\"" },
    { name: "Marcus Chen", specialty: "Commercial & Print", height: "6'2\"" },
    { name: "Sofia Rodriguez", specialty: "High Fashion", height: "5'11\"" },
    { name: "James Anderson", specialty: "Fitness & Sports", height: "6'1\"" },
    { name: "Zara Williams", specialty: "Editorial & Runway", height: "5'9\"" },
    { name: "David Kim", specialty: "Commercial", height: "6'0\"" },
  ];

  return (
    <section id="models" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Elite Portfolio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the exceptional talent that defines STYLISTIC. Each model brings unique style, professionalism, and charisma to every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-muted to-secondary relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-muted-foreground/20">
                  {model.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                <p className="text-sm text-primary mb-1">{model.specialty}</p>
                <p className="text-sm text-muted-foreground">{model.height}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models;
