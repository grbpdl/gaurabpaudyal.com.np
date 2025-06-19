import Link from "next/link";
import {
  ArrowRight,
  Code,
  ServerCog,
  Layout,
  ShieldCheck,
  Settings,
  Zap,
  TerminalSquare,
  Container,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { HeroSection } from "@/components/hero-section";
// import { FeaturedProjects } from "@/components/featured-projects";
// import { TestimonialSection } from "@/components/testimonial-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16 pt-24 sm:pt-32">
      <HeroSection />

      {/* Skills overview section */}
      <section className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Core Expertise
          </h2>
          <p className="text-muted-foreground mx-auto max-w-[700px]">
            Specialized skills and knowledge areas that define my professional
            capabilities and approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Scalable Web Development",
              description:
                "Built full-stack apps using Next.js, Express, and Docker to handle production-scale systems.",
              icon: Code,
            },
            {
              title: "System Architecture",
              description:
                "Implemented microservices and monorepo structures for scalable backend systems.",
              icon: ServerCog,
            },
            {
              title: "Frontend Engineering",
              description:
                "Designed modern interfaces using React, Tailwind CSS, and Shadcn UI.",
              icon: Layout,
            },
            {
              title: "Performance Optimization",
              description:
                "Boosted speed, responsiveness, and DB efficiency for real-time platforms.",
              icon: Zap,
            },
            {
              title: "QA & Testing",
              description:
                "Used Selenium to automate testing pipelines and ensure software quality.",
              icon: ShieldCheck,
            },
            {
              title: "DevOps & Containerization",
              description:
                "Containerized apps with Docker and optimized sessions using Redis.",
              icon: Container,
            },
            {
              title: "Secure Auth Systems",
              description:
                "Implemented secure login flows using JWT, Firebase, and Auth best practices.",
              icon: Settings,
            },
            {
              title: "Freelance Delivery",
              description:
                "Delivered client projects with Stripe, REST APIs, and mobile-first designs.",
              icon: TerminalSquare,
            },
          ].map((skill, index) => (
            <Card
              key={index}
              className="border border-border/50 bg-background/50 backdrop-blur hover:bg-background/80 transition-all"
            >
              <CardHeader className="pb-2">
                <skill.icon className="h-6 w-6 mb-2 text-primary" />
                <CardTitle className="text-lg">{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{skill.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="default">
            <Link href="/skills">
              View All Skills <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured projects section */}
      {/* <FeaturedProjects /> */}

      {/* Testimonials section */}
      {/* <TestimonialSection /> */}

      {/* CTA section */}
      <section className="container px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-primary/5 border border-primary/10 px-6 py-12 md:p-16 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Ready to collaborate?
          </h2>
          <p className="text-muted-foreground mx-auto max-w-[700px] mb-8">
            I'm currently available for freelance projects, full-time positions,
            and consulting opportunities. Let's build something amazing
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
