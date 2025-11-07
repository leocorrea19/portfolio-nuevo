import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";
import Link from 'next/link';

export default function ContactPage() {
  const professionalEmail = "leonel.correa.dev@gmail.com";

  return (
    <main className="container mx-auto max-w-3xl px-4 py-16 sm:py-24 lg:py-32 flex items-center justify-center min-h-[calc(100vh-14rem)]">
      <div className="w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl font-headline">
            Hablemos.
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes una idea para un proyecto o buscas sumar un desarrollador proactivo a tu equipo?
          </p>
        </div>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-center">Estoy disponible</CardTitle>
            <CardDescription className="text-center text-base pt-1">
              para oportunidades freelance y nuevos desafíos laborales.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 pt-2">
              <div className="text-center">
                  <p className="text-muted-foreground mb-2">Puedes enviarme un email directamente a:</p>
                  <a href={`mailto:${professionalEmail}`} className="text-lg font-semibold text-primary hover:underline inline-flex items-center gap-2 group">
                      <Mail className="h-5 w-5 transition-transform group-hover:scale-110" />
                      {professionalEmail}
                  </a>
              </div>

              <div className="text-center">
                  <p className="text-muted-foreground mb-4">O encontrarme en mis redes profesionales:</p>
                  <div className="flex justify-center space-x-4">
                       <Button asChild size="lg">
                          <Link href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
                              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                          </Link>
                      </Button>
                       <Button asChild variant="secondary" size="lg">
                          <Link href="https://github.com/leocorrea19" target="_blank" aria-label="GitHub">
                              <Github className="mr-2 h-5 w-5" /> GitHub
                          </Link>
                      </Button>
                  </div>
              </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
