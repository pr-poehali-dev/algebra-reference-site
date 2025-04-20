
const Hero = () => {
  return (
    <div className="py-8 bg-background">
      <div className="container text-center">
        <h1 className="text-2xl font-bold mb-3">
          Справочник по алгебре 10 класс
        </h1>
        
        <p className="max-w-[700px] mx-auto text-muted-foreground mb-4">
          Полное руководство по темам алгебры для 10 класса: тригонометрия, 
          логарифмы, уравнения и неравенства.
        </p>
        
        <a href="#sections" className="inline-block px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">
          Обзор разделов
        </a>
      </div>
    </div>
  );
};

export default Hero;
