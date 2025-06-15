
import { menuItems } from '@/data/menu';
import { MenuItemCard } from './MenuItemCard';

export const MenuSection = () => {
  return (
    <section id="menu" className="py-16 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">Nuestro Menú</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Platos elaborados con pasión y los ingredientes más frescos.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <MenuItemCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
