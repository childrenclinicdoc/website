import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      title: "Essential Vaccinations for Your Child",
      excerpt: "A comprehensive guide to the recommended vaccination schedule and why each immunization is important for your child's health.",
      date: "March 15, 2024",
      category: "Immunization",
    },
    {
      title: "Nutrition Tips for Growing Children",
      excerpt: "Learn about balanced diets, essential nutrients, and healthy eating habits to support your child's growth and development.",
      date: "March 10, 2024",
      category: "Nutrition",
    },
    {
      title: "Common Childhood Illnesses & Prevention",
      excerpt: "Understanding frequent childhood ailments, their symptoms, and preventive measures to keep your child healthy.",
      date: "March 5, 2024",
      category: "Health Tips",
    },
  ];

  return (
    <section id="blog" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Health Articles & Tips
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert advice and insights on child health and parenting
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {article.date}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <Button variant="link" className="p-0 h-auto group">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
