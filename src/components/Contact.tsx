import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed Successfully!",
      description: "You'll receive our health tips and updates.",
    });
    setEmail("");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9263231349"],
      action: "tel:+91 9263231349",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["mbbsmdmsmch@gmail.com"],
      action: "mailto:mbbsmdmsmch@gmail.com",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["City Medical & Fertility Center", "Shop No- 203 & 204, Tradex Tower, 1, Alpha-I Commercial Belt, Block A, Alpha I, Greater Noida, Uttar Pradesh 201310"],
      action: null,
    },
    {
      icon: Clock,
      title: "Clinic Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 2:00 PM"],
      action: null,
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact us for appointments, inquiries, or emergencies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">
                        {info.action ? (
                          <a
                            href={info.action}
                            className="hover:text-primary transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Google Maps & Newsletter */}
          <div className="space-y-6">
            {/* Map */}
            <Card className="overflow-hidden">
              <div className="h-64 bg-muted">

                <iframe
  src="https://www.google.com/maps?q=Shop+No-+203+%26+204,+Tradex+Tower,+1,+Alpha-I+Commercial+Belt,+Block+A,+Alpha+I,+Greater+Noida,+Uttar+Pradesh+201310&output=embed"
   width="100%"
                  height="100%"
  style={{ border: 0 }}
   allowFullScreen
  loading="lazy"
   referrerPolicy="no-referrer-when-downgrade"
   title="Clinic Location"
   >
</iframe>

                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8607798145857!2d77.60063431482161!3d12.972442490861339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Location"
                /> */}
              </div>
            </Card>

            {/* Newsletter */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-muted-foreground mb-4">
                Get health tips and updates delivered to your inbox
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" variant="hero">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
