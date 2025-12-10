import { Facebook, Instagram, Youtube, Heart } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Book Appointment", href: "#appointment" },
  ];

  const services = [
    "Newborn Care",
    "Vaccinations",
    "Growth Monitoring",
    "Nutrition Guidance",
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">VK</span>
              </div>
              <div>
                <h3 className="font-bold text-foreground">Dr. Dr. Vimal K Singh</h3>
                <p className="text-xs text-muted-foreground">Pediatrician</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Compassionate pediatric care for your child's healthy growth and development.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:mbbsmdmsmch@gmail.com" className="hover:text-primary transition-colors">
                  mbbsmdmsmch@gmail.com
                </a>
              </li>
              <li>City Medical & Fertility Center</li>
              <li>Tradex Tower, Alpha-I, Block A, Greater Noida, UP 201310</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made by Techmint Solutions
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} Dr. Dr. Vimal K Singh Pediatric Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
