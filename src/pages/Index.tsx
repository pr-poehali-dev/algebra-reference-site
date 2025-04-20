import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AlgebraSection from "@/components/AlgebraSection";
import MathFormula from "@/components/MathFormula";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowUpCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        <div id="sections" className="container py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Основные разделы</h2>
          
          <AlgebraSection
            id="trigonometry"
            title="Тригонометрия"
            description="Тригонометрические функции, формулы и уравнения"
            topics={[
              {
                title: "Основные формулы",
                description: "Основные тригонометрические тождества и соотношения"
              },
              {
                title: "Тригонометрические уравнения",
                description: "Методы решения тригонометрических уравнений"
              },
              {
                title: "Преобразования тригонометрических выражений",
                description: "Формулы сложения, двойного и половинного угла"
              }
            ]}
          />
          
          <Separator className="my-8" />
          
          <div className="my-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Популярные тригонометрические формулы</h3>
            <div className="grid gap-6">
              <MathFormula 
                formula="sin²α + cos²α = 1" 
                description="Основное тригонометрическое тождество"
              />
              <MathFormula 
                formula="sin(α ± β) = sinα·cosβ ± cosα·sinβ" 
                description="Формула синуса суммы и разности"
              />
              <MathFormula 
                formula="cos(α ± β) = cosα·cosβ ∓ sinα·sinβ" 
                description="Формула косинуса суммы и разности"
              />
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <AlgebraSection
            id="logarithms"
            title="Степени и логарифмы"
            description="Степенные функции, логарифмы и их свойства"
            topics={[
              {
                title: "Свойства логарифмов",
                description: "Основные свойства и операции с логарифмами"
              },
              {
                title: "Показательные уравнения",
                description: "Методы решения показательных уравнений и неравенств"
              },
              {
                title: "Логарифмические уравнения",
                description: "Методы решения логарифмических уравнений и неравенств"
              }
            ]}
          />
          
          <Separator className="my-8" />
          
          <AlgebraSection
            id="equations"
            title="Уравнения и неравенства"
            description="Методы решения уравнений и неравенств"
            topics={[
              {
                title: "Линейные и квадратные уравнения",
                description: "Методы решения линейных и квадратных уравнений"
              },
              {
                title: "Системы уравнений",
                description: "Методы решения систем уравнений"
              },
              {
                title: "Метод интервалов",
                description: "Решение неравенств методом интервалов"
              }
            ]}
          />
        </div>
      </main>
      
      <footer className="bg-secondary py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-lg font-semibold">Справочник по алгебре для 10 класса</h3>
              <p className="text-muted-foreground">© 2023 Все права защищены</p>
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Наверх"
            >
              <ArrowUpCircle className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
