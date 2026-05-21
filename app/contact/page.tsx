import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Mail, MapPin, Phone } from "lucide-react";
import { LocalBusinessSchema } from "@/components/local-business-schema";

export const metadata: Metadata = {
  title: "Contact | Gaurab Paudyal",
  description:
    "Get in touch with Gaurab Paudyal for project inquiries, collaborations, or business opportunities. Email, phone, and location details provided.",
  keywords: [
    "Contact",
    "Email",
    "Get in Touch",
    "Collaboration",
    "Business Inquiry",
  ],
  openGraph: {
    title: "Contact | Gaurab Paudyal",
    description:
      "Reach out for project inquiries, freelance work, or collaborations.",
    type: "website",
    url: "https://gaurabpaudyal.com.np/contact",
  },
  twitter: {
    card: "summary",
    title: "Contact | Gaurab Paudyal",
    description:
      "Get in touch with Gaurab Paudyal for collaborations and project opportunities.",
  },
  alternates: {
    canonical: "https://gaurabpaudyal.com.np/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <LocalBusinessSchema />
      <div className="flex flex-col gap-12 pb-16 pt-24 sm:pt-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg mx-auto max-w-[700px]">
              Have a project in mind or want to discuss potential
              collaborations? I'd love to hear from you. Fill out the form below
              or reach out directly.
            </p>
          </div>
        </div>

        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="text-base font-semibold">Email</h3>
                      <p className="text-muted-foreground">
                        <a
                          href="mailto:paudyal.gaurab11@gmail.com"
                          className="hover:text-primary transition-colors"
                        >
                          paudyal.gaurab11@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="text-base font-semibold">Phone</h3>
                      <p className="text-muted-foreground">
                        <a
                          href="tel:+9779812905882"
                          className="hover:text-primary transition-colors"
                        >
                          +977 9812905882
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="text-base font-semibold">Location</h3>
                      <p className="text-muted-foreground">Kathmandu, Nepal</p>
                      <p className="text-muted-foreground">
                        Available for remote work worldwide
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-6">Connect</h2>
                  <p className="text-muted-foreground mb-4">
                    Follow me on social media to see my latest projects and
                    updates.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/grbpdl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                      aria-label="GitHub"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/gaurabpaudyal/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
