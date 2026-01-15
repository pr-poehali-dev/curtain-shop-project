import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Наш дизайнер свяжется с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/f78a0359-21c4-48a3-8585-ef8f2aa2b33c/files/c35dd7fc-12c0-47fc-9570-436f45733564.jpg',
      title: 'Шелковые шторы цвета шампань',
      description: 'Минималистичная элегантность для современной гостиной'
    },
    {
      image: 'https://cdn.poehali.dev/projects/f78a0359-21c4-48a3-8585-ef8f2aa2b33c/files/014abfaf-7226-4d7c-98c8-25061e94d59c.jpg',
      title: 'Бархатные портьеры изумрудного оттенка',
      description: 'Роскошная классика с золотыми акцентами'
    },
    {
      image: 'https://cdn.poehali.dev/projects/f78a0359-21c4-48a3-8585-ef8f2aa2b33c/files/8583d681-ac1b-4b95-b77f-09a364a7b59d.jpg',
      title: 'Воздушные шторы с вышивкой',
      description: 'Элегантная легкость для спальни'
    }
  ];

  const services = [
    {
      icon: 'Sparkles',
      title: 'Индивидуальный дизайн',
      description: 'Создание уникального дизайна штор под ваш интерьер с учетом всех пожеланий'
    },
    {
      icon: 'Ruler',
      title: 'Замер и консультация',
      description: 'Бесплатный выезд дизайнера для замера окон и профессиональной консультации'
    },
    {
      icon: 'Scissors',
      title: 'Пошив на заказ',
      description: 'Изготовление штор из премиальных тканей европейских производителей'
    },
    {
      icon: 'Home',
      title: 'Монтаж и установка',
      description: 'Профессиональная установка карнизов и развешивание штор'
    },
    {
      icon: 'Palette',
      title: 'Подбор тканей',
      description: 'Помощь в выборе из 500+ коллекций премиальных тканей'
    },
    {
      icon: 'RefreshCw',
      title: 'Послепродажный сервис',
      description: 'Чистка, ремонт и уход за шторами в течение всего срока службы'
    }
  ];

  const testimonials = [
    {
      name: 'Елена Михайлова',
      text: 'Восхитительная работа! Шторы преобразили весь интерьер. Качество тканей и исполнения на высшем уровне.',
      rating: 5
    },
    {
      name: 'Андрей Волков',
      text: 'Профессиональный подход на всех этапах. От замера до установки - все прошло безупречно.',
      rating: 5
    },
    {
      name: 'Мария Петрова',
      text: 'Дизайнер учла все мои пожелания и предложила решения, о которых я даже не думала. Результат превзошел ожидания!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/79885053591"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20BA5A] transition-all hover:scale-110"
        aria-label="Написать в WhatsApp"
      >
        <Icon name="MessageCircle" size={32} className="text-white" />
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">ШТОРЫ ТОП</h1>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('hero')} className="text-sm hover:text-accent transition-colors">Главная</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-sm hover:text-accent transition-colors">Портфолио</button>
            <button onClick={() => scrollToSection('services')} className="text-sm hover:text-accent transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-sm hover:text-accent transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-accent transition-colors">Контакты</button>
          </div>
          <Button onClick={() => scrollToSection('contact')} className="bg-accent hover:bg-accent/90">
            Консультация
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center fade-in">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-primary">
            Изысканные шторы
            <br />
            для вашего дома
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Создаем уникальные текстильные решения премиум-класса
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection('contact')} className="bg-accent hover:bg-accent/90">
              Записаться на консультацию
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')}>
              Смотреть портфолио
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-primary">Наши работы</h2>
            <p className="text-lg text-muted-foreground">Портфолио реализованных проектов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden hover-lift border-none shadow-lg">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-primary">Услуги салона</h2>
            <p className="text-lg text-muted-foreground">Полный цикл работ от замера до установки</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift border-none shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-accent" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-primary">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">Что говорят о нашей работе</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">"{testimonial.text}"</CardDescription>
                  <CardTitle className="text-lg mt-4">— {testimonial.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-primary">Запись на консультацию</h2>
            <p className="text-lg text-muted-foreground">Наш дизайнер свяжется с вами в удобное время</p>
          </div>
          <Card className="border-none shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input 
                    id="name" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Как к вам обращаться?"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea 
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите о ваших пожеланиях"
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon name="MapPin" size={32} className="mx-auto mb-4 text-accent" />
              <h3 className="font-semibold mb-2">Адрес</h3>
              <p className="text-muted-foreground">г. Сочи, Демократическая 50/7А<br />вход со стороны остановки, 2-й этаж</p>
            </div>
            <div>
              <Icon name="Phone" size={32} className="mx-auto mb-4 text-accent" />
              <h3 className="font-semibold mb-2">Телефоны</h3>
              <p className="text-muted-foreground mb-4">
                Офис: <a href="tel:+79885053591" className="hover:text-accent transition-colors">+7 (988) 505-35-91</a><br />
                Дизайнер: <a href="tel:+79881556060" className="hover:text-accent transition-colors">+7 (988) 155-60-60</a>
              </p>
              <div className="flex gap-3 justify-center">
                <a 
                  href="https://wa.me/79885053591" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors text-sm"
                >
                  <Icon name="MessageCircle" size={16} />
                  Офис
                </a>
                <a 
                  href="https://wa.me/79881556060" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors text-sm"
                >
                  <Icon name="MessageCircle" size={16} />
                  Дизайнер
                </a>
              </div>
            </div>
            <div>
              <Icon name="Clock" size={32} className="mx-auto mb-4 text-accent" />
              <h3 className="font-semibold mb-2">Режим работы</h3>
              <p className="text-muted-foreground">Пн-Сб: 10:00 - 20:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t bg-muted/20">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-primary">ШТОРЫ ТОП</h3>
          <p className="text-muted-foreground mb-6">Салон премиальных штор</p>
          <div className="flex justify-center gap-6">
            <Icon name="Instagram" size={24} className="text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
            <Icon name="Facebook" size={24} className="text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
            <Icon name="MessageCircle" size={24} className="text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
          </div>
          <p className="text-sm text-muted-foreground mt-8">© 2024 ШТОРЫ ТОП. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;