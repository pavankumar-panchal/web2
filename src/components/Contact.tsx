import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll be in touch soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Start Your Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to take the next step? Get in touch with us today to discuss modeling opportunities or talent booking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="bg-card border-border"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-card border-border"
              />
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="bg-card border-border"
              />
            </div>
            <div>
              <Textarea
                placeholder="Tell us about yourself or your project..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={5}
                className="bg-card border-border resize-none"
              />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">
              Send Message
            </Button>
          </form>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div className="p-8 rounded-lg border border-border bg-card hover:border-primary transition-all duration-300">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-muted-foreground">
                info@stylisticagency.com
                <br />
                bookings@stylisticagency.com
              </p>
            </div>

            <div className="p-8 rounded-lg border border-border bg-card hover:border-primary transition-all duration-300">
              <Phone className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-muted-foreground">
                +1 (555) 123-4567
                <br />
                Mon-Fri: 9AM - 6PM EST
              </p>
            </div>

            <div className="p-8 rounded-lg border border-border bg-card hover:border-primary transition-all duration-300">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-muted-foreground">
                123 Fashion Avenue
                <br />
                New York, NY 10001
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
