
import { Vegan } from 'lucide-react';

export const menuItems = [
  {
    name: 'Ensalada Fresca de Verano',
    description: 'Una mezcla vibrante de hojas verdes, tomates cherry, pepino y aguacate con un aderezo de limón y hierbas.',
    price: '12.50',
    image: 'https://source.unsplash.com/600x400/?salad,fresh',
    tags: [
      { name: 'Vegano', icon: Vegan, color: 'text-green-600' },
    ],
  },
  {
    name: 'Pasta Artesanal al Pesto',
    description: 'Pasta fresca hecha a mano con un pesto de albahaca tradicional, piñones y queso Parmigiano Reggiano.',
    price: '18.00',
    image: 'https://source.unsplash.com/600x400/?pasta,pesto',
    tags: [],
  },
  {
    name: 'Tacos de Pescado Baja',
    description: 'Pescado fresco rebozado, servido en tortillas de maíz con ensalada de col y una cremosa salsa de chipotle.',
    price: '16.50',
    image: 'https://source.unsplash.com/600x400/?fish,tacos',
    tags: [],
  },
    {
    name: 'Hamburguesa Sabor Divino',
    description: 'Carne de res de primera calidad, queso cheddar, tocino crujiente y nuestra salsa secreta en un pan brioche.',
    price: '17.00',
    image: 'https://source.unsplash.com/600x400/?burger,gourmet',
    tags: [],
  },
];

export const specials = {
  title: 'Combo del Chef',
  description: 'Disfruta de nuestra hamburguesa estrella, acompañada de patatas fritas caseras y una bebida refrescante. ¡La comida perfecta!',
  price: '22.00',
  image: 'https://source.unsplash.com/800x600/?burger,fries,combo',
};
