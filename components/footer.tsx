import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Full Stack Web Developer and Computer Engineering graduate,
              specializing in building scalable web applications backend
              architectures and responsive and dynamic user interfaces.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/grbpdl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/gaurabpaudyal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </Link>
              <Link href="mailto:paudyal.gaurab11@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Navigations
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/skills"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </Link>
              <Link
                href="/blog"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Work/Hire
              </Link>
              <p className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                <a
                  href="tel:+9779812905882"
                  className="hover:text-primary transition-colors"
                >
                  +977 9812905882
                </a>
              </p>
              <Link
                href="mailto:contact@example.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                paudyal.gaurab11@gmail.com
              </Link>
              <p className="text-sm text-muted-foreground">Imadol,Lalitpur</p>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Gaurab Paudyal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
