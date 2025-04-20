
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { BookOpen, BookText, Calculator, Home, PiSquare, FunctionSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 bg-background border-b">
      <div className="container flex items-center justify-between h-14">
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <span className="font-medium">Алгебра 10 класс</span>
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <Button variant="ghost" size="sm">Главная</Button>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-9 px-3">Разделы</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 p-3 md:w-[500px] md:grid-cols-2">
                  {sections.map((section) => (
                    <ListItem
                      key={section.title}
                      title={section.title}
                      href={section.href}
                    >
                      {section.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/calculator">
                <Button variant="ghost" size="sm">Калькулятор</Button>
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
}

const ListItem = ({ title, href, children }: ListItemProps) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className={cn(
            "block select-none rounded-md p-2 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
          )}
        >
          <div className="text-sm font-medium">{title}</div>
          <p className="line-clamp-2 text-xs text-muted-foreground">
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
    description: "Тригонометрические функции, формулы и уравнения"
  },
  {
    title: "Степени и логарифмы",
    href: "#logarithms",
    description: "Степенные функции, логарифмы и их свойства"
  },
  {
    title: "Уравнения и неравенства",
    href: "#equations",
    description: "Методы решения уравнений и неравенств"
  }
];

export default Navbar;
