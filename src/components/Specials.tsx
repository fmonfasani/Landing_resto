
import { specials } from '@/data/menu';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export const Specials = () => {
  return (
    <section id="specials" className="py-16 lg:py-24 bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-bold uppercase text-secondary tracking-widest">Oferta Especial</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2">{specials.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{specials.description}</p>
            <p className="text-3xl font-bold text-primary mt-6">${specials.price}</p>
            <Button size="lg" className="mt-8">
                Pedir Combo <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          <div>
            <img src={specials.image} alt={specials.title} className="rounded-lg shadow-lg w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
