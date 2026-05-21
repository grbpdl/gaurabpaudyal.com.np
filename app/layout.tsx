import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { JsonLdSchema } from "@/components/json-ld-schema";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gaurab Paudyal | Full Stack Developer",
  description: `Full Stack Web Developer and Computer Engineering graduate, specializing in 
building scalable web applications backend architectures and responsive and dynamic 
user interfaces.`,
  authors: [
    { name: "Gaurab Paudyal", url: "https://www.gaurabpaudyal.com.np" },
  ],
  creator: "Gaurab Paudyal <paudyal.gaurab11@gmail.com>",
  keywords: [
    "Gaurab Paudyal",
    "Full Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Next.js",
    "Tailwind CSS",
    "Software Engineer",
    "Developer Portfolio",
    "Personal Website",
  ],
  metadataBase: new URL("https://gaurabpaudyal.com.np"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gaurabpaudyal.com.np",
    siteName: "Gaurab Paudyal | Full Stack Developer",
    title: "Gaurab Paudyal | Full Stack Developer",
    description:
      "Full Stack Engineer with 3+ years of experience building scalable systems, microservices, and responsive web applications. DevOps expertise with Docker, CI/CD, and cloud deployment.",
    images: [
      {
        url: "https://res.cloudinary.com/dazmdsylh/image/upload/v1748617116/convocation_myjibz.jpg",
        width: 1200,
        height: 630,
        alt: "Gaurab Paudyal - Full Stack Engineer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@paudyal_gaurab",
    title: "Gaurab Paudyal | Full Stack Developer",
    description:
      "Full Stack Engineer with 3+ years of experience. Expert in NestJS, Next.js, GraphQL, DevOps, and scalable systems.",
    images: [
      "https://res.cloudinary.com/dazmdsylh/image/upload/v1748617116/convocation_myjibz.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://gaurabpaudyal.com.np",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLdSchema />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
