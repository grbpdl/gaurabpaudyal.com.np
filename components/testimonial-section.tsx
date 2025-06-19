import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function TestimonialSection() {
  const testimonials = [
    {
      quote: "Working with this developer transformed our project. Their technical expertise and commitment to quality are exceptional.",
      author: "Sarah Johnson",
      title: "CEO at TechStart",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      quote: "They delivered a complex application ahead of schedule and exceeded all our expectations on functionality and design.",
      author: "Michael Chen",
      title: "CTO at InnovateCorp",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      quote: "A true professional who combines technical skill with outstanding communication and project management.",
      author: "Alex Rivera",
      title: "Product Manager at DesignHub",
      avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ]

  return (
    <section className="container px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Client Testimonials
        </h2>
        <p className="text-muted-foreground mx-auto max-w-[700px]">
          Don't just take my word for it. Here's what clients and colleagues have to say
          about my work and collaboration style.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border border-border/50 bg-background/50 backdrop-blur hover:bg-background/80 transition-all">
            <CardContent className="p-6">
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <blockquote className="text-lg mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}