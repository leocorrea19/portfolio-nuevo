import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Milestone, Sparkles } from "lucide-react";
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="container mx-auto max-w-5xl px-4 py-16 sm:py-24 lg:py-32">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl font-headline">
          Sobre Mí
        </h1>
      </div>
      <section className="w-full py-20 md:py-5 lg:py-5">
        <div className="container px-4 md:px-6">
          <Card className="max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 border-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-3xl font-headline text-primary">Hola, soy Leonel.</CardTitle>
              <Button asChild size="lg" className="font-semibold">
                <Link href="/doc/CV-Correa-Leonel-Javier.pdf" target="_blank">
                  Descargar mi CV
                  <Download className="ml-2 h-2 w-2" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-4 text-lg text-muted-foreground">
              <p>
                Soy un desarrollador de software metódico, actualmente cursando la Tecnicatura en Programación en la Universidad Tecnológica Nacional -
                UTN de Avellaneda. Mi formación técnica se consolidó con un programa Full Stack respaldado por Fundación Pescar,
                JPMorgan y EducacionIT.
              </p>
              <p>
                Actualmente, me desempeño en una empresa de software como Tester QA y Desarrollador Web, roles que me permiten combinar la rigurosidad
                del análisis de calidad con la creatividad de la construcción de interfaces. Mi experiencia previa en otros sectores,
                sumada a mi presente en IT, me ha brindado una visión integral sobre la responsabilidad y el valor del producto final.
              </p>
              <p>
                Aunque disfruto mis proyectos actuales, siempre mantengo la curiosidad activa por nuevos desafíos que me permitan
                seguir escalando profesionalmente.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* <div className="text-center mt-20">
        <Button asChild size="lg" className="font-semibold">
          <Link href="#">
            Descargar mi CV
            <Download className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div> */}
    </main>
  );
}
