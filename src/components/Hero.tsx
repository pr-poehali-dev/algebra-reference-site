
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="py-10 bg-background">
      <div className="container text-center space-y-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Справочник по алгебре <span className="text-primary">10 класс</span>
        </h1>
        
        <p className="max-w-[700px] mx-auto text-muted-foreground">
          Полное руководство по темам алгебры для 10 класса: тригонометрия, 
          логарифмы, уравнения и неравенства. Все формулы и правила в одном месте.
        </p>
        
        <div className="flex justify-center gap-3">
          <Button size="sm">Начать изучение</Button>
          <a href="#sections">
            <Button variant="outline" size="sm">Обзор разделов</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
