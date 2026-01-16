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
  const [activeCategory, setActiveCategory] = useState('Все');

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

  const categoryCovers: Array<{
    category: string;
    image: string;
    title: string;
    count: number;
  }> = [
    {
      category: 'Шторы для спальни',
      image: 'https://cdn.poehali.dev/files/IMG_7701.jpeg',
      title: 'Шторы для спальни',
      count: 1
    },
    {
      category: 'Шторы для гостиной',
      image: 'https://cdn.poehali.dev/files/IMG_7706.jpeg',
      title: 'Шторы для гостиной',
      count: 1
    },
    {
      category: 'Шторы для кухни',
      image: 'https://cdn.poehali.dev/files/IMG_7704.jpeg',
      title: 'Шторы для кухни',
      count: 1
    },
    {
      category: 'Шторы для детской',
      image: 'https://cdn.poehali.dev/files/IMG_7699.jpeg',
      title: 'Шторы для детской',
      count: 1
    },
    {
      category: 'Рулонные шторы',
      image: 'https://cdn.poehali.dev/files/IMG_7695.jpeg',
      title: 'Рулонные шторы',
      count: 1
    },
    {
      category: 'Деревянные жалюзи',
      image: 'https://cdn.poehali.dev/files/IMG_7698.jpeg',
      title: 'Деревянные жалюзи',
      count: 1
    },
    {
      category: 'Плиссе',
      image: 'https://cdn.poehali.dev/files/Untitled.png',
      title: 'Плиссе',
      count: 1
    },
    {
      category: 'Покрывала и подушки',
      image: 'https://cdn.poehali.dev/files/IMG_7703.jpeg',
      title: 'Покрывала и подушки',
      count: 1
    },
    {
      category: 'Электрокарнизы',
      image: 'https://cdn.poehali.dev/files/IMG_7707.jpeg',
      title: 'Электрокарнизы',
      count: 1
    }
  ];

  const portfolio: Array<{
    image: string;
    title: string;
    description: string;
    category: string;
  }> = [
    {
      image: 'https://cdn.poehali.dev/files/Untitled.png',
      title: 'Плиссе на нестандартные окна',
      description: 'Энергоэффективные шторы с деликатными складками для арочных окон',
      category: 'Плиссе'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7698.jpeg',
      title: 'Деревянные жалюзи для офисных помещений',
      description: 'Премиальные горизонтальные жалюзи из натурального дерева для стильного оформления офисов и кафе',
      category: 'Деревянные жалюзи'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7701.jpeg',
      title: 'Портьеры в минималистичную спальню',
      description: 'Бежевые портьеры с воздушным тюлем в нейтральной цветовой гамме для современной спальни',
      category: 'Шторы для спальни'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7706.jpeg',
      title: 'Шторы для роскошной гостиной',
      description: 'Портьеры благородного синего цвета с тюлем для классического интерьера гостиной',
      category: 'Шторы для гостиной'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7704.jpeg',
      title: 'Римские шторы для современной кухни',
      description: 'Стильные римские шторы синего цвета с золотой окантовкой для кухни-столовой',
      category: 'Шторы для кухни'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7699.jpeg',
      title: 'Шторы для детской комнаты',
      description: 'Нежные портьеры в пастельных тонах с тюлем для уютной детской комнаты',
      category: 'Шторы для детской'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7695.jpeg',
      title: 'Рулонные шторы для жилых помещений',
      description: 'Практичные рулонные шторы блэкаут с цепочным механизмом для квартир и офисов',
      category: 'Рулонные шторы'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7703.jpeg',
      title: 'Комплект покрывало и подушки',
      description: 'Элегантный текстильный комплект белого цвета с синей окантовкой для спальни',
      category: 'Покрывала и подушки'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7707.jpeg',
      title: 'Электрокарнизы с управлением',
      description: 'Современные электрокарнизы с управлением через пульт и смартфон для максимального комфорта',
      category: 'Электрокарнизы'
    }
  ];

  const filteredPortfolio = activeCategory === 'Все' 
    ? portfolio 
    : portfolio.filter(item => item.category === activeCategory);

  const showingCategories = activeCategory === 'Все';

  const services = [
    {
      icon: 'Home',
      title: 'Полное текстильное оформление под ключ',
      description: 'Комплексное решение для вашего интерьера от замера до монтажа'
    },
    {
      icon: 'Scissors',
      title: 'Пошив штор',
      description: 'Индивидуальный пошив штор любой сложности из премиальных тканей'
    },
    {
      icon: 'Ruler',
      title: 'Выезд дизайнера на объект',
      description: 'Профессиональный замер, консультация и подбор ткани на месте'
    },
    {
      icon: 'Crown',
      title: 'Пошив ламбрекенов',
      description: 'Элегантные ламбрекены для завершения образа интерьера'
    },
    {
      icon: 'Bed',
      title: 'Пошив покрывал и наволочек',
      description: 'Текстиль для спальни в едином стиле с шторами'
    },
    {
      icon: 'Coffee',
      title: 'Пошив скатертей',
      description: 'Изысканные скатерти для праздничного и повседневного стола'
    },
    {
      icon: 'Armchair',
      title: 'Пошив чехлов на стулья',
      description: 'Защитные и декоративные чехлы на любую мебель'
    },
    {
      icon: 'LayoutGrid',
      title: 'Римские и рулонные шторы',
      description: 'Современные решения для функционального оформления окон'
    },
    {
      icon: 'Blinds',
      title: 'Жалюзи',
      description: 'Вертикальные и горизонтальные жалюзи любых размеров'
    },
    {
      icon: 'MoveHorizontal',
      title: 'Карнизы',
      description: 'Широкий выбор карнизов от классики до современных систем'
    },
    {
      icon: 'Wrench',
      title: 'Монтаж и демонтаж карнизов',
      description: 'Профессиональная установка с гарантией качества'
    },
    {
      icon: 'Package',
      title: 'Развеска штор',
      description: 'Аккуратная развеска с идеальной драпировкой'
    }
  ];

  const testimonials = [
    {
      name: 'Елена Харлова',
      photo: 'https://cdn.poehali.dev/projects/f78a0359-21c4-48a3-8585-ef8f2aa2b33c/files/c1f8ceb0-18c0-4523-b1b8-35c432367e8d.jpg',
      text: 'Заказала шторы за неделю до НГ в две детские комнаты. И хотелось, чтоб до НГ уже было готово. Пошили все в срок, приехали повесили, прогладили. Я довольна очень! Еще и в подарок в каждую комнату по две декоративных подушек подарили. Было очень приятно! Хорошо сшиты! Было очень приятно общаться с девушкой Лианой! Спасибо большое!',
      rating: 5
    },
    {
      name: 'Елена Гарипова',
      photo: 'https://cdn.poehali.dev/projects/f78a0359-21c4-48a3-8585-ef8f2aa2b33c/files/beee8384-b5fa-4d34-a88a-01e0274d99fb.jpg',
      text: 'Очень довольна, что обратилась в салон, красивые шторы, замечательно вписались в интерьер. Отдельное спасибо Лиане, все сделано качественно и быстро. Благодарю!!!',
      rating: 5
    },
    {
      name: 'Светлана Качура',
      photo: 'https://cdn.poehali.dev/projects/f78a0359-21c4-48a3-8585-ef8f2aa2b33c/files/ce0dd700-8ca4-4cd4-ba84-8e877978a12a.jpg',
      text: 'Заказывала тюль и портьеры на три комнаты. Очень понравилась работа персонала, грамотно и профессионально подобрали текстиль, посоветовали, какие шторы подходят для нашего интерьера. Дизайнер Лиана хорошо знает свое дело, сумела убедить меня в таком подборе ткани и оказалась права! Шторы нам очень нравятся, мы до сих пор любуемся прекрасными портьерами! В подарок от салона нам сшили четыре подушки на диван и кровать. Приятный бонус! Салон рекомендую однозначно. Успехов всем сотрудникам и процветания!',
      rating: 5
    },
    {
      name: 'Кристина Варелджян',
      photo: 'https://cdn.poehali.dev/projects/f78a0359-21c4-48a3-8585-ef8f2aa2b33c/files/088fc58b-ab6a-4f7e-92a0-57177c13b283.jpg',
      text: 'Спасибо огромное, за красоту в доме. Отдельное спасибо, персоналу! Качественно, быстро и со вкусом подобрали шторы и тюли 👍🏻',
      rating: 5
    },
    {
      name: 'Эрануш Саретян',
      photo: 'https://cdn.poehali.dev/projects/f78a0359-21c4-48a3-8585-ef8f2aa2b33c/files/02e704e9-d202-4a4c-b189-8ebb87a24c1a.jpg',
      text: 'Ни раз мною был выбран именно этот салон штор, прекрасный отзывчивый коллектив, всегда приятно иметь дело с настоящими профессионалами!! Команда салона помогла быстро сориентироваться, подобрать именно те варианты которые долгие годы радуют глаз, а качество стоит этих денег. Лет 5 назад был сделан заказ штор и тюли на два окна в гостиной и три окна в спальне, это был подарок для бабушки, она осталась всем довольна и до сих пор не нарадуется красивому виду)) Позже я доверила девочкам оформление гостиницы под ключ, я осталась полностью довольна работой, и буквально перед Новым годом мне захотелось что-то изменить в своей квартире, задача была не из легких, все пришлось выбирать удаленно, так как на постоянной основе проживаю в Москве, но расстояние нам нипочем, девочки снова справились на отлично с поставленной задачей, помогли удаленно сделать правильный выбор, подсказали как правильно снять мерки окна, максимально быстро отшили и доставили в Москву, результат не мог не радовать!!! Хочу отдельно отметить скорость, качество и внимательное отношение всей команды салона, всегда приятно иметь дело с настоящими профессионалами своего дела!! Спасибо за красоту которую создаете!🙏🏻👍🏻',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://cdn.poehali.dev/files/IMG_7639.png" alt="ШТОРЫ ТОП" className="h-12 w-12 object-contain" />
            <h1 className="text-2xl font-bold text-primary">ШТОРЫ ТОП</h1>
          </div>
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
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 text-primary">Наши работы</h2>
            <p className="text-lg text-muted-foreground">Портфолио реализованных проектов</p>
          </div>
          
          {/* Back Button */}
          {activeCategory !== 'Все' && (
            <div className="mb-8">
              <Button
                onClick={() => setActiveCategory('Все')}
                variant="outline"
                className="gap-2"
              >
                <Icon name="ArrowLeft" size={18} />
                Назад к категориям
              </Button>
            </div>
          )}

          {/* Category Grid or Portfolio Grid */}
          {showingCategories ? (
            <div className="grid md:grid-cols-3 gap-8">
              {categoryCovers.map((item, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden hover-lift border-none shadow-lg cursor-pointer"
                  onClick={() => setActiveCategory(item.category)}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-6 text-white w-full">
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm opacity-90">{item.count} {item.count === 1 ? 'работа' : 'работы'}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {filteredPortfolio.map((item, index) => (
                <Card key={index} className="overflow-hidden hover-lift border-none shadow-lg">
                  <div className="aspect-[4/3] overflow-hidden">
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
          )}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-primary">Услуги салона</h2>
            <p className="text-lg text-muted-foreground">Полный цикл работ от замера до установки</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift border-none shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-accent" />
                  </div>
                  <CardTitle className="text-lg mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
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
          <div className="max-w-4xl mx-auto space-y-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardHeader>
                  <div className="flex items-start gap-6">
                    <img 
                      src={testimonial.photo} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={18} className="text-accent fill-accent" />
                        ))}
                      </div>
                      <CardDescription className="text-base italic leading-relaxed mb-3">"{testimonial.text}"</CardDescription>
                      <CardTitle className="text-base font-semibold">— {testimonial.name}</CardTitle>
                    </div>
                  </div>
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
              <p className="text-muted-foreground">Ежедневно с 09:00 до 19:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t bg-muted/20">
        <div className="container mx-auto text-center">
          <img src="https://cdn.poehali.dev/files/IMG_7639.png" alt="ШТОРЫ ТОП" className="h-20 w-20 object-contain mx-auto mb-4" />
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