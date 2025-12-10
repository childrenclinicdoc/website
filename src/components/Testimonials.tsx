import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "Dr. Vimal Kumar is an exceptional pediatrician. He's patient, thorough, and genuinely cares about my children's well-being. Highly recommended!",
    },
    {
      name: "Rajesh Patel",
      location: "Bangalore",
      rating: 5,
      text: "We've been visiting Dr. Kumar for 3 years now. His expertise and gentle approach make every visit comfortable for our kids. Best pediatrician we've found!",
    },
    {
      name: "Anjali Mehta",
      location: "Delhi",
      rating: 5,
      text: "Dr. Kumar's knowledge and compassion are outstanding. He takes time to explain everything clearly and addresses all our concerns. We trust him completely.",
    },
    {
      name: "Vikram Singh",
      location: "Chennai",
      rating: 5,
      text: "Excellent doctor! My daughter was always scared of doctors, but Dr. Kumar's friendly nature has changed that completely. Thank you for the wonderful care!",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Parents Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Read testimonials from families who trust us with their children's health
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`p-8 md:p-12 transition-all duration-500 ${
                  index === currentIndex
                    ? "opacity-100 block"
                    : "opacity-0 hidden"
                }`}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-lg text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-card hover:bg-muted p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-foreground" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-card hover:bg-muted p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-foreground" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-6" : "bg-muted"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
