import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const profilePicture = PlaceHolderImages.find(perfil => perfil.id === 'profile-picture');

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 bg-primary/5">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20 max-w-8xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
                Correa Leonel Javier
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-foreground/90 font-headline">
                Desarrollador Web Full Stack
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Transformo ideas en soluciones digitales funcionales y eficientes. Como estudiante de programación en la UTN y profesional con experiencia
                diversa, aporto una mirada integral a cada proyecto.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row pt-4">
                <Button asChild size="lg" className="font-semibold shadow-md hover:shadow-lg transition-shadow">
                  <Link href="/projectos">
                    Ver mis proyectos <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-semibold">
                  <Link href="/contacto">Contacto</Link>
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
                    className="relative rounded-full border-8 border-background shadow-lg"
                    priority
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
