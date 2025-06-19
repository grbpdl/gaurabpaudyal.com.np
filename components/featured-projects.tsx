import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function FeaturedProjects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online shopping platform with product management, user authentication, and payment processing.",
      image: "https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      link: "/projects/e-commerce-platform",
    },
    {
      title: "Content Management System",
      description:
        "A customizable CMS built for content creators and small businesses, featuring a visual editor and SEO tools.",
      image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Node.js", "MongoDB", "GraphQL"],
      link: "/projects/cms",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time data visualization dashboard for monitoring business metrics and user behavior patterns.",
      image: "https://images.pexels.com/photos/7947401/pexels-photo-7947401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "D3.js", "Firebase", "Material UI"],
      link: "/projects/analytics-dashboard",
    },
  ]

  return (
    <section className="container px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Featured Projects
        </h2>
        <p className="text-muted-foreground mx-auto max-w-[700px]">
          A selection of my most recent and impactful work. Each project demonstrates
          my approach to problem-solving and technical implementation.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Link 
            key={index} 
            href={project.link}
            className="group relative flex flex-col overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md"
          >
            <div className="aspect-video relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all z-10" />
              <img 
                src={project.image} 
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col p-6 flex-1">
              <h3 className="text-xl font-semibold tracking-tight mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="text-sm font-medium text-primary group-hover:underline flex items-center gap-1">
                View Project <ArrowRight className="h-3.5 w-3.5 ml-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <Button asChild variant="outline">
          <Link href="/projects">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}