
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
        
        <div className="container my-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <MathFormula 
              name="Формула синуса двойного угла" 
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
          description="Изучение тригонометрических функций и соотношений"
          topics={trigonometryTopics}
        />
        
        <AlgebraSection
          id="logarithms"
          title="Степени и логарифмы"
          description="Изучение степенных функций и логарифмов"
          topics={logarithmTopics}
          className="bg-accent/30"
        />
        
        <AlgebraSection
          id="equations"
          title="Уравнения и неравенства"
          description="Методы решения алгебраических уравнений и неравенств"
          topics={equationTopics}
        />
      </div>
      
      <footer className="border-t py-4 text-center text-xs text-muted-foreground">
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
    title: "Основные тригонометрические тождества",
    description: "Соотношения между тригонометрическими функциями"
  },
  {
    title: "Формулы приведения",
    description: "Представление тригонометрических функций через функции острых углов"
  }
];

const logarithmTopics = [
  {
    title: "Свойства степеней",
    description: "Основные свойства степеней с действительным показателем"
  },
  {
    title: "Логарифмы и их свойства",
    description: "Определение и основные свойства логарифмов"
  },
  {
    title: "Показательные и логарифмические уравнения",
    description: "Методы решения показательных и логарифмических уравнений"
  }
];

const equationTopics = [
  {
    title: "Линейные уравнения и неравенства",
    description: "Методы решения линейных уравнений и неравенств"
  },
  {
    title: "Квадратные уравнения",
    description: "Формулы и методы решения квадратных уравнений"
  },
  {
    title: "Системы уравнений",
    description: "Методы решения систем линейных и нелинейных уравнений"
  }
];

export default Index;
