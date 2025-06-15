
import { Utensils, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from 'react';

const NavLinks = ({ className }: { className?: string }) => (
  <nav className={className}>
    <a href="#menu" className="text-sm font-medium transition-colors hover:text-primary">Menú</a>
    <a href="#specials" className="text-sm font-medium transition-colors hover:text-primary">Ofertas</a>
    <a href="#location" className="text-sm font-medium transition-colors hover:text-primary">Ubicación</a>
  </nav>
);

export const Header = () => {
    const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <Utensils className="h-6 w-6 text-primary" />
            <span className="font-bold font-serif">Sabor Divino</span>
          </a>
          <NavLinks className="flex items-center space-x-6" />
        </div>

        <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <a href="/" className="mr-6 flex items-center space-x-2 mb-8">
                        <Utensils className="h-6 w-6 text-primary" />
                        <span className="font-bold font-serif">Sabor Divino</span>
                    </a>
                    <NavLinks className="flex flex-col space-y-4" />
                </SheetContent>
            </Sheet>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
            <Button>Pedir Ahora</Button>
        </div>
      </div>
    </header>
  );
};
