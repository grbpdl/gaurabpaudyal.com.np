import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
