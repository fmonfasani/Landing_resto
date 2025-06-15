
import { Button } from './ui/button';

export const Hero = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh]">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <img
        src="https://placehold.co/1920x1080/333333/FFFFFF?text=Sabor+Divino"
        alt="Interior acogedor del restaurante Sabor Divino"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          El Sabor de la Tradición, Reiventado
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/80">
          Ingredientes frescos y locales transformados en platos inolvidables. Tu nueva historia culinaria comienza aquí.
        </p>
        <div className="mt-8 flex gap-4">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">Pedir Online</Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
            Ver Menú
          </Button>
        </div>
      </div>
    </section>
  );
};
