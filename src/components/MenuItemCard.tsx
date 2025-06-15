
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Plus } from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  tags: { name: string; icon: React.ElementType; color: string }[];
}

export const MenuItemCard = ({ item }: { item: MenuItem }) => {
  return (
    <Card className="flex flex-col overflow-hidden h-full">
      <CardHeader className="p-0">
        <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-xl mb-2">{item.name}</CardTitle>
        <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
        <div className="flex items-center space-x-2">
            {item.tags.map(tag => (
                <span key={tag.name} className={`flex items-center text-xs font-semibold ${tag.color}`}>
                    <tag.icon className="w-4 h-4 mr-1" />
                    {tag.name}
                </span>
            ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <p className="text-lg font-bold text-primary">${item.price}</p>
        <Button size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Añadir
        </Button>
      </CardFooter>
    </Card>
  );
};
