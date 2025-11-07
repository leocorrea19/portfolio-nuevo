import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import Link from 'next/link';

const projects = [
  {
    title: 'Web para "Sabiduría Digital"',
    description: "Desarrollo de un sitio web informativo (o landing page) centrado en la educación y alfabetización tecnológica. El reto principal fue crear una interfaz de usuario (UI) limpia, intuitiva y 100% responsive, asegurando que el mensaje principal fuera claro y accesible para todos los usuarios.",
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    role: "Desarrollador Front-End. Fui responsable de la maquetación completa del sitio, desde la conceptualización del diseño (UI/UX) hasta la implementación del código, optimizando los tiempos de carga y asegurando la compatibilidad entre navegadores.",
    liveLink: "https://sabiduriadigital.netlify.app/",
    githubLink: "https://github.com/leocorrea19/Sabiduria-Digital-web",
  },
  // Add more projects here in the future
];

export default function ProjectsPage() {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-16 sm:py-24 lg:py-32">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl font-headline">
          Mis Proyectos
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
          El código en acción. Aquí presento una selección de los proyectos en los que he trabajado, desde prácticas universitarias hasta soluciones freelance.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-1 lg:gap-12">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-headline">{project.title}</CardTitle>
              <CardDescription className="pt-2 text-base">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-6">
              <div>
                <h3 className="font-semibold mb-2 text-lg">Mi Rol:</h3>
                <p className="text-muted-foreground">{project.role}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-lg">Tecnologías Clave:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="px-3 py-1 text-sm">{tech}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button asChild className="w-full sm:w-auto">
                <Link href={project.liveLink} target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" /> Ver proyecto en vivo
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link href={project.githubLink} target="_blank">
                  <Github className="mr-2 h-4 w-4" /> Ver código en GitHub
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
