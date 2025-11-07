import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Milestone, Sparkles } from "lucide-react";
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="container mx-auto max-w-5xl px-4 py-16 sm:py-24 lg:py-32">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl font-headline">
          Más que un programador, un solucionador de problemas.
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
          Mi nombre es Correa Leonel Javier y mi objetivo es construir tecnología que sea útil, intuitiva y robusta.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <Card className="hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Milestone className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="font-headline text-2xl">Mi Camino</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground text-base">
            <p>
              Actualmente estoy cursando la Tecnicatura en Programación en la Universidad Tecnológica Nacional (UTN) de Avellaneda, donde estoy solidificando mi pasión por el desarrollo de software.
            </p>
            <p>
              Aunque esta es mi primera etapa profesional en IT, mi trayectoria laboral previa me ha dado herramientas que el código por sí solo no enseña. He aprendido a liderar equipos, gestionar clientes y adaptarme a entornos cambiantes. Esta experiencia me permite entender no solo el qué (el código), sino el por qué (el negocio y el usuario final).
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="font-headline text-2xl">Mi Filosofía de Trabajo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground text-base">
            <p>
              Como Desarrollador Freelance, disfruto del desafío de tomar un problema y desglosarlo hasta encontrar la solución tecnológica más efectiva.
            </p>
            <p>
              Soy proactivo, organizado y estoy en constante aprendizaje para mantenerme al día con las mejores prácticas de la industria.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-20">
        <Button asChild size="lg" className="font-semibold">
          <Link href="#">
            Descargar mi CV
            <Download className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </main>
  );
}
