import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { projectsData } from "@/data/projects";

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsData.map((project, index) => (
        <Card key={index} className="overflow-hidden flex flex-col h-full">
          <div className="aspect-video relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full"
            />
          </div>

          <CardContent className="p-6 flex-1">
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-normal">
                  {tag}
                </Badge>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">
              {project.description}
            </p>
          </CardContent>

          <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
            <Link
              href={project.liveLink}
              className="text-sm font-medium text-primary hover:underline flex items-center"
            >
              View on Github
            </Link>
            {project.liveLink && (
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground hover:text-primary flex items-center"
              >
                Live Demo <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
