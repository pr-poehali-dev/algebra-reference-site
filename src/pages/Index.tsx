
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AlgebraSection from "@/components/AlgebraSection";
import MathFormula from "@/components/MathFormula";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Hero />
        
        <div className="container my-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <MathFormula 
              name="Синус двойного угла" 
              formula="sin(2α) = 2sin(α)cos(α)"
            />
            <MathFormula 
              name="Логарифм произведения" 
              formula="log_a(xy) = log_a(x) + log_a(y)"
            />
            <MathFormula 
              name="Квадратное уравнение" 
              formula="ax² + bx + c = 0"
              description="x = (-b ± √(b² - 4ac)) / 2a"
            />
          </div>
        </div>
        
        <AlgebraSection
          id="trigonometry"
          title="Тригонометрия"
          description="Тригонометрические функции и соотношения"
          topics={trigonometryTopics}
        />
        
        <AlgebraSection
          id="logarithms"
          title="Степени и логарифмы"
          description="Степенные функции и логарифмы"
          topics={logarithmTopics}
        />
        
        <AlgebraSection
          id="equations"
          title="Уравнения и неравенства"
          description="Методы решения уравнений и неравенств"
          topics={equationTopics}
        />
      </div>
      
      <footer className="border-t py-3 text-center text-xs text-gray-500">
        © 2023 Справочник по алгебре | 10 класс
      </footer>
    </div>
  );
};

const trigonometryTopics = [
  {
    title: "Определения тригонометрических функций",
    description: "Синус, косинус, тангенс и котангенс"
  },
  {
    title: "Основные тождества",
    description: "Соотношения между функциями"
  },
  {
    title: "Формулы приведения",
    description: "Тригонометрические функции через функции острых углов"
  }
];

const logarithmTopics = [
  {
    title: "Свойства степеней",
    description: "Степени с действительным показателем"
  },
  {
    title: "Логарифмы",
    description: "Определение и свойства логарифмов"
  },
  {
    title: "Показательные уравнения",
    description: "Методы решения уравнений"
  }
];

const equationTopics = [
  {
    title: "Линейные уравнения",
    description: "Методы решения линейных уравнений"
  },
  {
    title: "Квадратные уравнения",
    description: "Формулы решения квадратных уравнений"
  },
  {
    title: "Системы уравнений",
    description: "Методы решения систем уравнений"
  }
];

export default Index;
