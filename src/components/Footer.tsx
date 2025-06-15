
import { Utensils, Youtube } from 'lucide-react';

const InstagramIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

export const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Utensils className="h-6 w-6 text-primary" />
          <span className="font-bold font-serif">Sabor Divino</span>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-muted-foreground hover:text-primary"><InstagramIcon className="w-6 h-6" /></a>
          <a href="#" className="text-muted-foreground hover:text-primary"><Youtube className="w-6 h-6" /></a>
        </div>
        <p className="text-sm text-muted-foreground mt-4 md:mt-0">&copy; {new Date().getFullYear()} Sabor Divino. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
