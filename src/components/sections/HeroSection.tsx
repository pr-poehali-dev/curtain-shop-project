import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onConsultationClick: () => void;
  onPortfolioClick: () => void;
}

const HeroSection = ({ onConsultationClick, onPortfolioClick }: HeroSectionProps) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 px-4 min-h-[70vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://cdn.poehali.dev/files/Untitled.jpeg" 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
      </div>
      <div className="container mx-auto text-center fade-in relative z-10">
        <h2 className="text-6xl md:text-7xl font-bold mb-6 text-primary drop-shadow-lg">
          Изысканные шторы
          <br />
          для вашего дома
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">Создаем уникальные текстильные решения премиум-класса с 2008 года</p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" onClick={onConsultationClick} className="bg-accent hover:bg-accent/90">
            Записаться на консультацию
          </Button>
          <Button size="lg" variant="outline" onClick={onPortfolioClick}>
            Смотреть портфолио
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
