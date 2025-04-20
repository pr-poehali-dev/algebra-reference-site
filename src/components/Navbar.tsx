import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { BookOpen, BookText, Calculator, Function, Home, PiSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Алгебра 10 класс</span>
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <Button variant="ghost" className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  <span>Главная</span>
                </Button>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="flex items-center gap-2">
                <Function className="h-4 w-4" />
                <span>Разделы</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {sections.map((section) => (
                    <ListItem
                      key={section.title}
                      title={section.title}
                      href={section.href}
                      icon={section.icon}
                    >
                      {section.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/calculator">
                <Button variant="ghost" className="flex items-center gap-2">
                  <Calculator className="h-4 w-4" />
                  <span>Калькулятор</span>
                </Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

interface ListItemProps {
  title: string;
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const ListItem = ({ title, href, children, icon }: ListItemProps) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          )}
        >
          <div className="flex items-center gap-2">
            {icon}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

const sections = [
  {
    title: "Тригонометрия",
    href: "#trigonometry",
    description: "Тригонометрические функции, формулы и уравнения",
    icon: <PiSquare className="h-4 w-4 text-primary" />
  },
  {
    title: "Степени и логарифмы",
    href: "#logarithms",
    description: "Степенные функции, логарифмы и их свойства",
    icon: <Function className="h-4 w-4 text-primary" />
  },
  {
    title: "Уравнения и неравенства",
    href: "#equations",
    description: "Методы решения уравнений и неравенств",
    icon: <BookText className="h-4 w-4 text-primary" />
  }
];

export default Navbar;
