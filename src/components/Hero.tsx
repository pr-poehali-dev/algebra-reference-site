import { Button } from "@/components/ui/button";
import { BookOpen, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative py-20 overflow-hidden bg-gradient-to-b from-accent/50 to-background">
      <div className="container flex flex-col items-center text-center space-y-8">
        <BookOpen className="h-16 w-16 text-primary" />
        
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Справочник по алгебре <br /> 
          <span className="text-primary">10 класс</span>
        </h1>
        
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Полное руководство по темам алгебры для 10 класса: тригонометрия, 
          логарифмы, уравнения и неравенства. Все формулы и правила в одном месте.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="gap-2">
            Начать изучение
            <ChevronRight className="h-4 w-4" />
          </Button>
          
          <a href="#sections">
            <Button variant="outline" size="lg">
              Обзор разделов
            </Button>
          </a>
        </div>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-[-30%] opacity-10">
        <div className="h-[300px] w-[300px] border-8 border-primary rounded-full" />
      </div>
      <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-[20%] opacity-10">
        <div className="h-[400px] w-[400px] border-8 border-primary rounded-full" />
      </div>
    </div>
  );
};

export default Hero;
