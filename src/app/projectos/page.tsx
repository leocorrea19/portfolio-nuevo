import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, Lock } from "lucide-react";
import Link from 'next/link';

const projectos = [
  {
    title: 'RenTrust',
    category: 'Proyecto Profesional',
    description: "RenTrust es una plataforma web de alto rendimiento diseñada específicamente para el sector de alquiler de vehículos destinados a conductores de aplicaciones de movilidad (como Uber, Cabify y Didi). El objetivo principal del proyecto fue crear una presencia digital sólida y profesional que permitiera a la empresa captar nuevos conductores, ofreciéndoles una solución integral: acceso a vehículos modernos sin las complicaciones de mantenimiento, seguros o depreciación. La web destaca por su enfoque en la experiencia de usuario (UX) y la conversión (CRO), utilizando interfaces dinámicas, animaciones fluidas y llamados a la acción (CTAs) estratégicos. Se implementó un sistema de formularios inteligente para la pre-calificación de conductores, el cual está totalmente automatizado mediante Webhooks sincronizados con Make, permitiendo una gestión de prospectos rápida y eficiente.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide React", "Radix UI", "React Hook Form", "Zod", "Embla Carousel", "SweetAlert2", "Sonner",
      "Class Variance Authority (CVA)", "Make", "Recharts", "PostCSS"],
    liveLink: "https://ren-trust.vercel.app/",
    githubLink: undefined,
  },
  {
    title: 'Web para "Sabiduría Digital"',
    category: 'Proyecto Educativo Grupal',
    description: "Desarrollo de un sitio web informativo centrado en la educación y alfabetización tecnológica. El reto principal fue crear una interfaz de usuario (UI) limpia, intuitiva y 100% responsive, asegurando que el mensaje principal fuera claro y accesible para todos los usuarios. Como Desarrollador Front-End, fui responsable de la maquetación completa del sitio, desde la conceptualización del diseño (UI/UX) hasta la implementación del código, optimizando los tiempos de carga y asegurando la compatibilidad entre navegadores.",
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    liveLink: "https://sabiduriadigital.netlify.app/",
    githubLink: "https://github.com/leocorrea19/Sabiduria-Digital-web",
  },
  {
    title: 'Dragon Ball Data',
    category: 'Proyecto Personal',
    description: "Una plataforma interactiva y de alto rendimiento diseñada para explorar el vasto universo de Dragon Ball. Este proyecto consume una API pública para ofrecer una experiencia de usuario fluida y dinámica, permitiendo descubrir personajes, sus transformaciones, niveles de poder y planetas de origen. La aplicación utiliza las últimas capacidades de Next.js, incluyendo Server Components para una carga optimizada y Route Handlers para la gestión eficiente de datos. El diseño se centra en la legibilidad y el impacto visual, utilizando una arquitectura de componentes modulares y un sistema de filtrado avanzado (por raza y nombre) que mejora la navegabilidad. Es un ejemplo de cómo integrar APIs de terceros con tipado estricto en TypeScript y una interfaz moderna impulsada por Shadcn/UI.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/UI",
      "Radix UI",
      "Lucide React",
      "Zod",
      "Embla Carousel",
      "React Hook Form",
      "Dragon Ball API"],
    liveLink: "https://dragon-ball-data.vercel.app/",
    githubLink: "https://github.com/leocorrea19/Dragon-ball-data",
  },
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
        {projectos.map((project, index) => (
          <Card key={index} className="flex flex-col hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-2xl font-headline">{project.title}</CardTitle>
                <Badge variant="default" className="ml-2">
                  {project.category}
                </Badge>
              </div>
              <CardDescription className="pt-2 text-base whitespace-pre-line">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-6">
              <div>
                <h3 className="font-semibold mb-3 text-lg">Tecnologías Usadas:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="px-3 py-1 text-sm">{tech}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-4 pt-6 mt-auto">
              <Button asChild className="w-full sm:w-auto">
                <Link href={project.liveLink} target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" /> Ver proyecto en vivo
                </Link>
              </Button>
              {project.githubLink ? (
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <Link href={project.githubLink} target="_blank">
                    <Github className="mr-2 h-4 w-4" /> Ver código en GitHub
                  </Link>
                </Button>
              ) : (
                <div className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background/50 text-muted-foreground cursor-default h-10 px-4 py-2 w-full sm:w-auto">
                  <Lock className="mr-2 h-4 w-4" /> Código Privado (Cliente)
                </div>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
