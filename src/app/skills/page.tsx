import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Layers, Server, Settings, PenTool, Database, GitBranch, Briefcase } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Desarrollo Web Full-Stack",
    description: "Creación de aplicaciones web completas, desde la base de datos hasta la interfaz de usuario.",
  },
  {
    icon: PenTool,
    title: "Desarrollo Front-End",
    description: "Maquetación de sitios web responsivos, atractivos y con foco en la experiencia de usuario (UX).",
  },
  {
    icon: Server,
    title: "Desarrollo Back-End",
    description: "Construcción de APIs robustas, lógica de negocio y gestión de bases de datos.",
  },
  {
    icon: Settings,
    title: "Mantenimiento y Optimización",
    description: "Mejora de rendimiento (SEO técnico) y actualización de sitios existentes.",
  },
];

const techStack = {
  "Front-End": { icon: PenTool, technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Vue.js", "Tailwind CSS"] },
  "Back-End": { icon: Server, technologies: ["Node.js", "Express", "Python", "Django", "Flask", "PHP"] },
  "Bases de Datos": { icon: Database, technologies: ["SQL", "PostgreSQL", "MySQL", "NoSQL", "MongoDB", "Firebase"] },
  "Herramientas y Metodologías": { icon: GitBranch, technologies: ["Git", "Docker", "Jest", "SCRUM", "Jira"] },
};

export default function SkillsPage() {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-16 sm:py-24 lg:py-32">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl font-headline">
          Servicios y Stack Tecnológico
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
          Como Desarrollador de Software Freelance, ofrezco servicios flexibles adaptados a las necesidades de tu proyecto.
        </p>
      </div>

      <div className="space-y-20">
        {/* Services Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12 font-headline flex items-center justify-center gap-3">
            <Briefcase className="w-8 h-8 text-primary" />
            Servicios Principales
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2 font-headline">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12 font-headline flex items-center justify-center gap-3">
            <Code className="w-8 h-8 text-primary" />
            Mi Stack Tecnológico
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {Object.entries(techStack).map(([category, { icon: Icon, technologies }]) => (
              <Card key={category} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                   <div className="bg-primary/10 p-2 rounded-full">
                    <Icon className="w-6 h-6 text-primary"/>
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
