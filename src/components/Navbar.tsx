
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 bg-background border-b">
      <div className="container flex items-center justify-between h-14">
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          <span className="font-medium">Алгебра 10 класс</span>
        </Link>
        
        <nav>
          <ul className="flex items-center gap-4">
            <li><Link to="/" className="hover:underline">Главная</Link></li>
            <li><Link to="/trigonometry" className="hover:underline">Тригонометрия</Link></li>
            <li><Link to="/logarithms" className="hover:underline">Логарифмы</Link></li>
            <li><Link to="/equations" className="hover:underline">Уравнения</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
