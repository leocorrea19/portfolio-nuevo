import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, PenTool, Database, GitBranch } from "lucide-react";

const techStack = {
  "Front-End": {
    icon: PenTool, technologies: [
      "HTML5", "CSS3", "JavaScript", "React", "SASS", "Tailwind CSS",
      "Angular", "TypeScript", "Next.js"
    ]
  },
  "Back-End": { icon: Server, technologies: ["Python", "Node.js", "Programación Orientada a Objetos (POO)"] },
  "Bases de Datos": { icon: Database, technologies: ["SQL", "MySQL", "MongoDB"] },
  "Herramientas y Metodologías": { icon: GitBranch, technologies: ["Git / GitHub", "Figma", "Canva", "ClickUp"] },
};

export default function SkillsPage() {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-16 sm:py-24 lg:py-32">
      <div className="text-center mb-16">
        {/* Tech Stack Section */}
        <div>
          <h1 className="text-4xl font-bold text-center mb-12 tracking-tight text-primary sm:text-5xl lg:text-6xl font-headline flex items-center justify-center gap-3">
            <Code className="w-16 h-16 text-primary" />
            Mi Stack Tecnológico
          </h1>
          <div className="grid gap-8 md:grid-cols-2">
            {Object.entries(techStack).map(([category, { icon: Icon, technologies }]) => (
              <Card key={category} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="px-3 py-1 text-sm">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
