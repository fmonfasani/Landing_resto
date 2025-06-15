
import { MapPin, Clock } from 'lucide-react';

export const Location = () => {
  return (
    <section id="location" className="py-16 lg:py-24">
      <div className="container text-center">
        <h2 className="text-3xl lg:text-4xl font-bold">Encuéntranos</h2>
        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-lg">
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-secondary" />
            <span>Calle Ficticia 123, Ciudad Creativa</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-secondary" />
            <span>Lun - Dom: 12:00pm - 10:00pm</span>
          </div>
        </div>
        <div className="mt-8 text-muted-foreground">
            <p><strong>Zonas de delivery:</strong> Centro, Barrio Norte, Barrio Sur (Tiempo estimado: 30-45 min)</p>
        </div>
      </div>
    </section>
  );
};
