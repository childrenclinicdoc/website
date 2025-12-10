import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Expertise = () => {
  const expertiseAreas = [
    "Neonatal Care & NICU Management",
    "Pediatric Intensive Care (PICU) Management",
    "Growth and Development Assessment",
    "Childhood Immunization & Vaccination",
    "Newborn Care & Premature Infant Management",
    "Anemia, Sepsis, and Breathing Disorders in Newborns",
    "General Pediatrics & Preventive Child Health",
    "Childhood Infectious Diseases",
    "Asthma & Allergy Management",
    "Nutritional Disorders & Growth Issues",
    // "Preventive Pediatric Care",
    // "Behavioral & Developmental Concerns",
    // "Chronic Disease Management",
  ];

  return (
    <section id="expertise" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Areas of Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {/* Specialized knowledge and experience in various aspects of child health and development */}
            Dr. Vimal Kumar offers comprehensive care across the full spectrum of pediatric and neonatal health, including:
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-6">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 group"
              >
                <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-foreground font-medium">{area}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Expertise;
