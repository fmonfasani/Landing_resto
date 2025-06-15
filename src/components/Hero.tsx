
import { Button } from './ui/button';

export const Hero = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <img
        src="https://source.unsplash.com/1920x1080/?restaurant,interior,dark"
        alt="Interior acogedor del restaurante Sabor Divino"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 z-10 flex items-center justify-center"
        aria-hidden="true"
      >
        <h2 className="font-serif text-[10vw] md:text-[12rem] lg:text-[16rem] font-bold text-white/5 select-none leading-none">
          Sabor Divino
        </h2>
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          El Sabor de la Tradición, Reiventado
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/80">
          Ingredientes frescos y locales transformados en platos inolvidables. Tu nueva historia culinaria comienza aquí.
        </p>
        <div className="mt-8 flex gap-4">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">Pedir Online</Button>
          <Button size="lg" className="bg-card hover:bg-card/90 text-card-foreground">
            Ver Menú
          </Button>
        </div>
      </div>
    </section>
  );
};
