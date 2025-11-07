import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const profilePicture = PlaceHolderImages.find(p => p.id === 'profile-picture');

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
                Correa Leonel Javier
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-foreground/90 font-headline">
                Desarrollador de Software Freelance
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Transformo ideas en soluciones digitales funcionales y eficientes. Como estudiante de programación en la UTN y profesional con experiencia diversa, aporto una mirada integral a cada proyecto.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row pt-4">
                <Button asChild size="lg" className="font-semibold shadow-md hover:shadow-lg transition-shadow">
                  <Link href="/projects">
                    Ver mis proyectos <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-semibold">
                  <Link href="/contact">Contactarme</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              {profilePicture && (
                 <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
                  <div className="absolute inset-0 bg-primary/80 rounded-full transform rotate-6 transition-transform duration-500 hover:rotate-0 shadow-xl">
                  </div>
                  <Image
                    src={profilePicture.imageUrl}
                    alt={profilePicture.description}
                    width={400}
                    height={400}
                    data-ai-hint={profilePicture.imageHint}
                    className="relative rounded-full border-8 border-background shadow-lg"
                    priority
                  />
                 </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mini-Intro Section */}
      {/* <section className="w-full py-20 md:py-32 lg:py-40">
        <div className="container px-4 md:px-6">
          <Card className="max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 border-2">
            <CardHeader>
              <CardTitle className="text-3xl font-headline text-primary">Hola, soy Leonel.</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg text-muted-foreground">
              <p>
                Soy un desarrollador de software en formación (UTN Avellaneda) y actualmente trabajo como freelancer.
              </p>
              <p>
                Mi camino hacia la tecnología no fue lineal. Mi experiencia en otros rubros me formó en comunicación, adaptabilidad y gestión de equipos, habilidades blandas que hoy considero mi mayor diferencial al momento de programar y colaborar en un proyecto de IT.
              </p>
              <p>
                Busco aplicar mi capacidad técnica y mi experiencia profesional para construir herramientas que realmente aporten valor.
              </p>
            </CardContent>
          </Card>
        </div>
      </section> */}
    </main>
  );
}
