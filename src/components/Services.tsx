import { Card } from "@/components/ui/card";
import { Baby, Shield, Activity, Stethoscope, Pill, Heart } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Baby,
      title: "👶 Newborn & Neonatal Care",
      description: "Specialized care for newborns and premature babies, including management in NICU & PICU, treatment for respiratory distress, jaundice, sepsis, and other critical conditions.",
    },
    {
      icon: Activity,
      title: "📈 Growth & Development Assessment",
      description: "Regular monitoring of your child’s physical and emotional growth, milestone evaluation, nutritional counseling, and personalized guidance to ensure healthy development.",
    },
    {
      icon: Stethoscope,
      title: "💉 Immunization & Vaccination",
      description: "Complete vaccination support following national and international schedules, along with advice on catch‑up vaccines and post‑vaccination care for every age group.",
    },
    {
      icon: Pill,
      title: "🩹 General Pediatrics & Preventive Health",
      description: "Diagnosis and treatment of common childhood illnesses such as infections, allergies, fever, and digestive issues — plus preventive health check‑ups and wellness guidance.",
    },
    {
      icon: Heart,
      title: "💗 Specialized Pediatric Care",
      description: "Expert management of complex or chronic cases, including anemia, sepsis, breathing disorders, and other neonatal and pediatric health concerns.",
    },
    {
      icon: Shield,
      title: "👨‍👩‍👧 Parent Counselling & Education",
      description: "Support and guidance for parents on newborn care, feeding practices, sleep routines, and healthy parenting — helping families feel confident and informed.",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dr. Vimal Kumar provides comprehensive pediatric and neonatal care designed to support every stage of your child’s growth — from newborn to adolescence. His services combine advanced medical expertise with gentle, compassionate attention to children and their families.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
