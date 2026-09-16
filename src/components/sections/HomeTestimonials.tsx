import { testimonials, reviewsStats } from "@/data/testimonials";
import { Star } from "lucide-react";

export function HomeTestimonials() {
  const displayTestimonials = testimonials.slice(0, 3);

  return (
    <section className="py-10 md:py-16 lg:py-20 bg-background border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-primary mb-4">
              Client Trust
            </h2>
            <p className="text-lg text-muted-foreground">
              What our clients say about our professional services and approach.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end bg-secondary/50 p-4 rounded-sm border border-border">
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
              <span className="ml-2 font-bold text-primary">{reviewsStats.rating} / 5</span>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {reviewsStats.platform} — {reviewsStats.totalReviews}+ Verified
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayTestimonials.map((item) => (
            <div key={item.id} className="flex flex-col border-t border-border pt-8 transition-colors hover:border-accent">
              <div className="mb-6 flex">
                <div className="h-10 w-10 bg-secondary rounded-sm flex items-center justify-center text-primary font-bold font-heading">
                  {item.name.charAt(0)}
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-8 flex-grow text-sm">
                "{item.testimonial}"
              </p>
              <div className="mt-auto">
                <h4 className="font-bold text-primary">{item.name}</h4>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-1">
                  {item.designation}, {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
