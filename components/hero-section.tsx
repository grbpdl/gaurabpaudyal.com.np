"use client";

import Link from "next/link";
import Image from "next/image";
import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: 3, label: "Years Experience" },
    { number: 25, label: "Projects Completed" },
    { number: 10, label: "Happy Clients" },
    { number: 5, label: "Certifications & Awards" },
  ];

  return (
    <section className="container px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <span className="inline-block text-primary font-medium">
            Namaste, I'm
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Gaurab Paudyal
          </h1>
          <h2 className="text-2xl text-muted-foreground">Computer Engineer</h2>
          <p className="text-lg text-muted-foreground max-w-[600px]">
            A passionate developer specializing in creating beautiful,
            functional, and user-centered digital experiences. Available for
            freelance projects and exciting opportunities.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                Hire Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link
                href="https://drive.google.com/file/d/1UN85zBUG7wn7mf0lMix6hOlYQf9oHh5v/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-square rounded-full overflow-hidden border-4 border-primary/10"
        >
          <Image
            src="https://res.cloudinary.com/dazmdsylh/image/upload/v1748617116/convocation_myjibz.jpg"
            alt="Gaurab Paudyal"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      <div
        ref={ref}
        className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-3xl font-bold mb-1">
              {inView && <CountUp end={stat.number} duration={2} suffix="+" />}
            </div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
