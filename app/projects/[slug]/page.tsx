import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { projectsData } from "@/data/projects"

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.detailLink.split('/').pop(),
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projectsData.find(
    (p) => p.detailLink.split('/').pop() === params.slug
  )
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }
  
  return {
    title: `${project.title} | Professional Portfolio`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find(
    (p) => p.detailLink.split('/').pop() === params.slug
  )
  
  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
        </Button>
      </div>
    )
  }
  
  return (
    <div className="flex flex-col gap-12 pb-16 pt-24 sm:pt-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild className="mb-4">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
              </Link>
            </Button>
            
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <p className="text-muted-foreground text-lg mb-6">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              {project.liveLink && (
                <Button asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
              <Button variant="outline" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  Source Code <Github className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="overflow-hidden rounded-lg border mb-12">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover aspect-video"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-muted-foreground mb-4">
                  This project aimed to create a comprehensive solution for [specific industry/need]. 
                  It addressed key challenges in [area] while providing an intuitive user experience 
                  and robust functionality.
                </p>
                <p className="text-muted-foreground">
                  The development process involved extensive research, prototyping, and iterative 
                  testing to ensure the final product met all client requirements and user needs.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-muted-foreground">
                  The main challenges involved creating a system that could handle [specific technical challenge], 
                  while maintaining excellent performance and an intuitive interface. Additionally, 
                  the solution needed to be scalable to accommodate [future needs/growth].
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                <p className="text-muted-foreground mb-4">
                  I implemented a [specific approach/architecture] that addressed all key requirements. 
                  This included [specific feature 1], [specific feature 2], and [specific feature 3], 
                  all working together to create a cohesive and powerful solution.
                </p>
                <p className="text-muted-foreground">
                  The technology stack was carefully chosen to ensure optimal performance, 
                  maintainability, and future extensibility.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Feature 1 with detailed explanation of functionality and impact</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Feature 2 with technical details and user benefits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Feature 3 with implementation approach and outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Feature 4 with unique selling points and advantages</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">The Outcome</h2>
                <p className="text-muted-foreground mb-4">
                  The final product successfully met all objectives and has resulted in [specific positive outcomes]. 
                  Users have reported [positive feedback] and the client has seen [specific benefits] since implementation.
                </p>
                <p className="text-muted-foreground">
                  This project showcases my ability to [specific skills] and deliver high-quality solutions 
                  that address complex requirements while maintaining an excellent user experience.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Client</h4>
                    <p>Client Name/Industry</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Timeline</h4>
                    <p>3 months (Q1 2024)</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">My Role</h4>
                    <p>Lead Developer & Designer</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-4">Related Projects</h3>
                <div className="space-y-4">
                  {projectsData.filter(p => p.title !== project.title).slice(0, 3).map((relatedProject, index) => (
                    <Link 
                      key={index} 
                      href={relatedProject.detailLink} 
                      className="block group"
                    >
                      <div className="flex gap-3 items-center">
                        <div className="h-12 w-12 rounded overflow-hidden flex-shrink-0">
                          <img
                            src={relatedProject.image}
                            alt={relatedProject.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-1">
                            {relatedProject.title}
                          </h4>
                          <p className="text-xs text-muted-foreground line-clamp-1">
                            {relatedProject.tags.slice(0, 2).join(", ")}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}