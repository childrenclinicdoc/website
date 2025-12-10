import { Card } from "@/components/ui/card";
import { Award, Heart, Users, Star } from "lucide-react";
import doctorProfile from "@/assets/dr-vimal-kumar-pediatrician-2.jpg";

const About = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Patients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Heart, value: "100%", label: "Care & Compassion" },
    { icon: Star, value: "4.9", label: "Average Rating" },
  ];

  return (
    
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">-
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Dr. Vimal K Singh
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Dr. Vimal K Singh is renowned for his compassionate care, precise diagnosis, and commitment to nurturing healthy childhood development.
              </p>
              <p className="text-lg leading-relaxed">He is currently affiliated with Apollo Cradle Children's Hospital in Greater Noida, part of a leading healthcare network. Previously, he has served at several prestigious hospitals, including Felix Hospital, Noida and Yatharth Super Speciality Hospital, Noida Extension.</p>
              


              <p className="text-lg leading-relaxed">
                Dr. Kumar specializes in the management of all newborns, including those requiring advanced neonatal interventions such as therapeutic hypothermia, high-frequency oscillatory ventilation (HFO), and care for preterm infants. He is also experienced in handling critically ill older children requiring Pediatric Intensive Care (PICU) support.

              </p>
              <p className="text-lg leading-relaxed">
                Dr. Vimal’s  expertise spans from newborn intensive care to childhood growth monitoring, immunization, and complex pediatric conditions. His approach combines the latest advancements in medical science with a deeply empathetic understanding of young patients and their families.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">Education & Qualifications
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    MBBS – Maulana Azad Medical College, University of Delhi (2008)

                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    MD – Pediatrics – University of Delhi (2012)
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Fellowship in Neonatology (FNNF) – National Neonatology Forum, India

                  </li>


                </ul>
                <div style={{ border: '1px solid #333', padding: '4px 12px', marginTop: '15px', marginBottom: '25px' }}>
                  <h3><b>Medical Registration:</b> Delhi Medical Council – Reg. No. DMC/R/04733</h3>
                </div>

                <section aria-labelledby="clinical-exp">

                  <h3 className="text-xl font-semibold text-foreground mb-3" id="clinical-exp">Clinical Experience</h3>
                  <p>
                    With a strong academic foundation and years of hands-on clinical practice,
                    Dr. Kumar has been part of several prestigious hospitals across India, where
                    he has successfully managed complex pediatric and neonatal cases.
                  </p>

                  <h4 className="text-l font-semibold text-foreground mb-3" style={{marginTop: '10px'}}>Professional Journey</h4>
                  <ul className="experience">
                    <li style={{marginBottom: '10px'}}> <span className="text-primary mr-2">•</span>
                      <strong>Senior Consultant – Neonatology & Pediatrics</strong><br />
                      Apollo Cradle &amp; Children’s Hospital, Greater Noida
                    </li>

                    <li  style={{marginBottom: '10px'}}>
                       <span className="text-primary mr-2">•</span>
                      <strong>Consultant Pediatrician</strong><br />
                      Felix Hospital, Noida
                    </li>

                    <li  style={{marginBottom: '10px'}}>
                       <span className="text-primary mr-2">•</span>
                      <strong>Consultant Pediatrician</strong><br />
                      Yatharth Super Speciality Hospital, Noida Extension
                    </li>

                    <li  style={{marginBottom: '10px'}}>
                       <span className="text-primary mr-2">•</span>
                      <strong>Senior Resident</strong><br />
                      Kalawati Saran Children Hospital, Lady Hardinge Medical College, New Delhi
                    </li>

                    <li  style={{marginBottom: '10px'}}>
                       <span className="text-primary mr-2">•</span>
                      <strong>Junior Resident</strong><br />
                      Lok Nayak Jaiprakash Hospital, Maulana Azad Medical College, New Delhi
                    </li>
                  </ul>
                </section>

              </div>




            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20 blur-lg" />
              <img
                src={doctorProfile}
                alt="Dr. Vimal K Singh"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
