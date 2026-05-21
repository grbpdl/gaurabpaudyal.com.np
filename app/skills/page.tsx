import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Gaurab Paudyal",
  description: "Explore my technical skills, tools, and areas of expertise",
};

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", proficiency: 95 },
      { name: "TypeScript", proficiency: 90 },
      { name: "Python", proficiency: 80 },
      { name: "Go Lang", proficiency: 75 },
      { name: "HTML5 / CSS3", proficiency: 95 },
      { name: "SQL", proficiency: 85 },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React / Next.js", proficiency: 95 },
      { name: "Tailwind CSS", proficiency: 90 },
      { name: "Redux", proficiency: 85 },
      { name: "Responsive Design", proficiency: 95 },
      { name: "Webpack / Vite", proficiency: 80 },
      { name: "State Management", proficiency: 90 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", proficiency: 85 },
      { name: "NestJS", proficiency: 85 },
      { name: "Express.js", proficiency: 90 },
      { name: "REST API Design", proficiency: 90 },
      { name: "GraphQL", proficiency: 85 },
      { name: "MongoDB", proficiency: 85 },
      { name: "PostgreSQL", proficiency: 85 },
      { name: "RabbitMQ", proficiency: 80 },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    skills: [
      { name: "Docker", proficiency: 85 },
      { name: "CI/CD Pipelines", proficiency: 85 },
      { name: "GitHub Actions", proficiency: 85 },
      { name: "Redis", proficiency: 80 },
      { name: "Nginx", proficiency: 80 },
      { name: "Digital Ocean", proficiency: 80 },
      { name: "Git / GitHub", proficiency: 95 },
      { name: "Microservices Architecture", proficiency: 85 },
    ],
  },
  {
    title: "Other Skills",
    skills: [
      { name: "Testing (Jest, Cypress)", proficiency: 80 },
      { name: "AWS / Vercel / Netlify", proficiency: 80 },
      { name: "Performance Optimization", proficiency: 85 },
      { name: "SEO", proficiency: 75 },
      { name: "Project Management", proficiency: 85 },
      { name: "System Design", proficiency: 80 },
    ],
  },
];

const tools = [
  "JavaScript",
  "TypeScript",
  "Go Lang",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "REST API",
  "RabbitMQ",
  "Redis",
  "Docker",
  "Nginx",
  "CI/CD",
  "GitHub Actions",
  "Tailwind CSS",
  "Redux",
  "Jest",
  "Git",
  "GitHub",
  "VS Code",
  "AWS",
  "Digital Ocean",
  "Vercel",
];

export default function SkillsPage() {
  return (
    <div className="flex flex-col gap-12 pb-16 pt-24 sm:pt-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Skills & Expertise
          </h1>
          <p className="text-muted-foreground text-lg mx-auto max-w-[700px]">
            A comprehensive overview of my technical skills, tools, and areas of
            expertise developed throughout my professional journey.
          </p>
        </div>
      </div>

      {/* Skill Categories */}
      <div className="container px-4 sm:px-6 lg:px-8 space-y-12">
        {skillCategories.map((category, idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="border rounded-lg p-4 shadow-sm bg-muted/30"
                >
                  <div className="flex justify-between mb-2 font-medium">
                    <span>{skill.name}</span>
                    <span>{skill.proficiency}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Tools */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Tools & Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {tools.map((tool, i) => (
              <div
                key={i}
                className="text-sm font-medium px-4 py-2 rounded border hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
