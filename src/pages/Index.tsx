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
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

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
  }> = [
    {
      category: 'Шторы для спальни',
      image: 'https://cdn.poehali.dev/files/IMG_7701.jpeg',
      title: 'Шторы для спальни'
    },
    {
      category: 'Шторы для гостиной',
      image: 'https://cdn.poehali.dev/files/IMG_7706.jpeg',
      title: 'Шторы для гостиной'
    },
    {
      category: 'Шторы для кухни',
      image: 'https://cdn.poehali.dev/files/IMG_7704.jpeg',
      title: 'Шторы для кухни'
    },
    {
      category: 'Шторы для детской',
      image: 'https://cdn.poehali.dev/files/IMG_7699.jpeg',
      title: 'Шторы для детской'
    },
    {
      category: 'Покрывала и подушки',
      image: 'https://cdn.poehali.dev/files/IMG_7703.jpeg',
      title: 'Покрывала и подушки'
    },
    {
      category: 'Римские шторы',
      image: 'https://cdn.poehali.dev/files/Untitled.jpeg',
      title: 'Римские шторы'
    },
    {
      category: 'Рулонные шторы',
      image: 'https://cdn.poehali.dev/files/IMG_7695.jpeg',
      title: 'Рулонные шторы'
    },
    {
      category: 'Деревянные жалюзи',
      image: 'https://cdn.poehali.dev/files/IMG_7698.jpeg',
      title: 'Деревянные жалюзи'
    },
    {
      category: 'Алюминиевые жалюзи',
      image: 'https://cdn.poehali.dev/files/IMG_7697.jpeg',
      title: 'Алюминиевые жалюзи'
    },
    {
      category: 'Плиссе',
      image: 'https://cdn.poehali.dev/files/Untitled.png',
      title: 'Плиссе'
    },
    {
      category: 'Электрокарнизы',
      image: 'https://cdn.poehali.dev/files/IMG_7707.jpeg',
      title: 'Электрокарнизы'
    },
    {
      category: 'Карнизы',
      image: 'https://cdn.poehali.dev/files/IMG_7873.jpeg',
      title: 'Карнизы'
    }
  ];

  const portfolio: Array<{
    image?: string;
    video?: string;
    title: string;
    description: string;
    category: string;
  }> = [
    {
      image: 'https://cdn.poehali.dev/files/IMG_7880.jpeg',
      title: 'Графитовые портьеры для элегантной спальни',
      description: 'Двухслойные портьеры графитового цвета с белым тюлем и современными черными карнизами для стильной спальни',
      category: 'Шторы для спальни'
    },
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
      image: 'https://cdn.poehali.dev/files/IMG_7901.jpeg',
      title: 'Портьеры цвета капучино для классической спальни',
      description: 'Роскошные портьеры теплого коричневого оттенка с белым тюлем и декоративной кружевной отделкой для спальни в классическом стиле',
      category: 'Шторы для спальни'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7864.jpeg',
      title: 'Классические портьеры для уютной спальни',
      description: 'Элегантные портьеры бежевого цвета с тюлем и декоративными подхватами для создания теплой атмосферы в спальне',
      category: 'Шторы для спальни'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7897.jpeg',
      title: 'Элегантные бежевые портьеры для классической спальни',
      description: 'Утонченные шторы цвета кофе с молоком с воздушным тюлем для спальни в классическом стиле с резным изголовьем',
      category: 'Шторы для спальни'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7876.jpeg',
      title: 'Плотные шторы для современной спальни',
      description: 'Элегантные портьеры глубокого синего цвета с белым тюлем — идеальное сочетание стиля и функциональности для полного затемнения спальни',
      category: 'Шторы для спальни'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7911.jpeg',
      title: 'Коричневые портьеры для современной спальни',
      description: 'Роскошные портьеры кофейного оттенка с белым полупрозрачным тюлем для просторной спальни с панорамными окнами',
      category: 'Шторы для спальни'
    },
    {
      image: 'https://cdn.poehali.dev/projects/f78a0359-21c4-48a3-8585-ef8f2aa2b33c/bucket/9d42483f-ffb6-42ab-ad9f-7237bd60768c.jpeg',
      title: 'Роскошные портьеры с декоративными ламбрекенами',
      description: 'Элегантные коричневые портьеры с изысканными декоративными ламбрекенами и тюлем для классической спальни с хрустальной люстрой',
      category: 'Шторы для спальни'
    },
    {
      image: 'https://cdn.poehali.dev/projects/f78a0359-21c4-48a3-8585-ef8f2aa2b33c/bucket/4ef999fd-3f1b-4d73-b2c1-0b7cbdb59299.jpeg',
      title: 'Бежевые портьеры с золотой отделкой',
      description: 'Утонченные портьеры бежевого цвета с элегантной золотой отделкой и белым тюлем для классической спальни',
      category: 'Шторы для спальни'
    },
    {
      image: 'https://cdn.poehali.dev/projects/f78a0359-21c4-48a3-8585-ef8f2aa2b33c/bucket/73a4ef67-636e-4033-98e5-896e2fb94eab.jpeg',
      title: 'Минималистичные коричневые портьеры',
      description: 'Плотные портьеры шоколадного цвета с белым тюлем для уютной спальни в современном стиле',
      category: 'Шторы для спальни'
    },
    {
      image: 'https://cdn.poehali.dev/projects/f78a0359-21c4-48a3-8585-ef8f2aa2b33c/bucket/00063486-4e7c-4bf0-b4d3-a242351f822e.jpeg',
      title: 'Бирюзовые портьеры для светлой спальни',
      description: 'Элегантные портьеры бирюзового оттенка с белым тюлем для современной спальни — стильное решение для создания уютной атмосферы',
      category: 'Шторы для спальни'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7884.jpeg',
      title: 'Роскошные золотистые портьеры для классической гостиной',
      description: 'Элегантные портьеры золотисто-бежевого цвета с тюлем, украшенным изысканной вышивкой и декоративными подхватами для гостиной в классическом стиле',
      category: 'Шторы для гостиной'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7706.jpeg',
      title: 'Шторы для роскошной гостиной',
      description: 'Портьеры благородного синего цвета с тюлем для классического интерьера гостиной',
      category: 'Шторы для гостиной'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7862.jpeg',
      title: 'Элегантные портьеры для современной гостиной',
      description: 'Роскошные портьеры изумрудного оттенка с тюлем для просторной гостиной в современном стиле',
      category: 'Шторы для гостиной'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7898.jpeg',
      title: 'Современные портьеры оттенка мяты для гостиной',
      description: 'Стильные шторы серо-зеленого цвета с белым тюлем для современной гостиной в минималистичном стиле',
      category: 'Шторы для гостиной'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7907.jpeg',
      title: 'Бежевые портьеры с тюлем для современной гостиной',
      description: 'Элегантные портьеры песочного оттенка с полупрозрачным белым тюлем для уютной гостиной в современном стиле',
      category: 'Шторы для гостиной'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7908.jpeg',
      title: 'Портьеры лавандового оттенка для элегантной гостиной',
      description: 'Изысканные портьеры нежного фиолетового цвета с белым тюлем для создания утонченной атмосферы в классической гостиной',
      category: 'Шторы для гостиной'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7909.jpeg',
      title: 'Портьеры цвета тауп для минималистичной гостиной',
      description: 'Стильные шторы серо-бежевого оттенка с воздушным белым тюлем для современной гостиной с панорамными окнами',
      category: 'Шторы для гостиной'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7896.jpeg',
      title: 'Бирюзовые портьеры для светлой гостиной',
      description: 'Элегантные шторы мятно-бирюзового оттенка с белоснежным тюлем для просторной современной гостиной',
      category: 'Шторы для гостиной'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7894.jpeg',
      title: 'Шоколадные портьеры на люверсах для роскошной гостиной',
      description: 'Элегантные портьеры цвета горького шоколада на металлических люверсах с тюлем для гостиной в классическом стиле',
      category: 'Шторы для гостиной'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7879.jpeg',
      title: 'Портьеры для минималистичной гостиной',
      description: 'Лаконичные портьеры графитового оттенка с тюлем для современной гостиной-студии в стиле минимализм',
      category: 'Шторы для гостиной'
    },
    {
      image: 'https://cdn.poehali.dev/projects/f78a0359-21c4-48a3-8585-ef8f2aa2b33c/bucket/e6d2a35a-ea3c-44ed-bbe2-c565c48163cf.jpeg',
      title: 'Нейтральные портьеры для просторной гостиной',
      description: 'Элегантные портьеры в бежево-серых тонах с белоснежным тюлем — идеальное решение для создания спокойной атмосферы в современной гостиной с панорамными окнами',
      category: 'Шторы для гостиной'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7704.jpeg',
      title: 'Римские шторы для современной кухни',
      description: 'Стильные римские шторы синего цвета с золотой окантовкой для кухни-столовой',
      category: 'Шторы для кухни'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7887.jpeg',
      title: 'Портьеры цвета бургунди для современной кухни-столовой',
      description: 'Элегантные портьеры глубокого бордово-фиолетового оттенка с белым тюлем для минималистичной кухни-столовой',
      category: 'Шторы для кухни'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7863.jpeg',
      title: 'Портьеры для элегантной кухни-столовой',
      description: 'Роскошные портьеры насыщенного изумрудного цвета с тюлем для просторной кухни-столовой в современном стиле',
      category: 'Шторы для кухни'
    },
    {
      image: 'https://cdn.poehali.dev/projects/f78a0359-21c4-48a3-8585-ef8f2aa2b33c/bucket/78a76891-28c7-4f7b-94b0-cf9a93f239d7.jpeg',
      title: 'Портьеры цвета капучино для кухни-гостиной',
      description: 'Элегантные портьеры бежево-коричневого оттенка с воздушным белым тюлем для просторной кухни-гостиной в современном стиле',
      category: 'Шторы для кухни'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7699.jpeg',
      title: 'Шторы для детской комнаты',
      description: 'Нежные портьеры в пастельных тонах с тюлем для уютной детской комнаты',
      category: 'Шторы для детской'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7700.jpeg',
      title: 'Солнечные шторы для детской спальни',
      description: 'Яркие желто-оранжевые портьеры с декоративными подхватами и комплектом декоративных подушек',
      category: 'Шторы для детской'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7705.jpeg',
      title: 'Современные шторы для детской',
      description: 'Минималистичные серые портьеры для современной детской комнаты с двумя кроватями',
      category: 'Шторы для детской'
    },
    {
      image: 'https://cdn.poehali.dev/projects/f78a0359-21c4-48a3-8585-ef8f2aa2b33c/bucket/503225c0-5dc8-4bd5-96c3-7cd13dc527a5.jpeg',
      title: 'Нежные оливковые портьеры для детской',
      description: 'Портьеры в спокойных оливковых и бежевых тонах с белым тюлем — идеальное решение для создания уютной атмосферы в детской комнате',
      category: 'Шторы для детской'
    },
    {
      image: 'https://cdn.poehali.dev/projects/f78a0359-21c4-48a3-8585-ef8f2aa2b33c/bucket/c7676df7-c40c-4a8a-b734-81b3d6b62730.jpeg',
      title: 'Элегантные портьеры цвета мокко для спальни',
      description: 'Роскошные портьеры шоколадного оттенка с белоснежным тюлем — создают уютную и спокойную атмосферу для отдыха',
      category: 'Шторы для детской'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7895.jpeg',
      title: 'Римские шторы серо-бирюзового оттенка',
      description: 'Стильные римские шторы с текстурой льна серо-бирюзового цвета для современных интерьеров',
      category: 'Римские шторы'
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
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7697.jpeg',
      title: 'Алюминиевые жалюзи для современных интерьеров',
      description: 'Стильные горизонтальные алюминиевые жалюзи белого цвета для гостиной и офиса',
      category: 'Алюминиевые жалюзи'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7709.jpeg',
      title: 'Римские шторы',
      description: 'Элегантные римские шторы с плавными складками для стильного и функционального оформления окон',
      category: 'Римские шторы'
    },
    {
      image: 'https://cdn.poehali.dev/files/Untitled.jpeg',
      title: 'Стильные римские шторы для кухни',
      description: 'Римские шторы с изящными полосами и декоративными помпонами для современной кухни-столовой',
      category: 'Римские шторы'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_7873.jpeg',
      title: 'Карнизы для штор',
      description: 'Широкий выбор карнизов: от классических с декоративными наконечниками до современных профильных систем. Профессиональный монтаж.',
      category: 'Карнизы'
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
      description: 'Все заботы мы берём на себя! Комплексное решение от подбора и монтажа карнизов, до развески штор! Клиент лишь наслаждается итогом!'
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
      icon: 'Bed',
      title: 'Пошив покрывал и наволочек',
      description: 'Текстиль для спальни в едином стиле с шторами'
    },
    {
      icon: 'Armchair',
      title: 'Пошив чехлов на стулья',
      description: 'Защитные и декоративные чехлы на любую мебель'
    },
    {
      icon: 'Sun',
      title: 'Рулонные шторы',
      description: 'Современные решения для функционального оформления окон'
    },
    {
      icon: 'Waves',
      title: 'Пошив римских штор',
      description: 'Элегантные римские шторы с плавными складками для любого интерьера'
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
      icon: 'Hammer',
      title: 'Монтаж и демонтаж карнизов',
      description: 'Профессиональная установка с гарантией качества'
    },
    {
      icon: 'Package',
      title: 'Развеска штор',
      description: 'Аккуратная развеска с идеальной драпировкой'
    },
    {
      icon: 'ArrowUpFromLine',
      title: 'Работа на больших высотах',
      description: 'Монтаж и установка штор в помещениях с высокими потолками'
    },
    {
      icon: 'UtensilsCrossed',
      title: 'Оформление кафе и ресторанов',
      description: 'Комплексное текстильное оформление заведений общественного питания'
    },
    {
      icon: 'Hotel',
      title: 'Оформление отелей и апартаментов',
      description: 'Профессиональное оформление номерного фонда и общественных зон'
    }
  ];

  const testimonials = [
    {
      name: 'Елена Харлова',
      text: 'Заказала шторы за неделю до НГ в две детские комнаты. И хотелось, чтоб до НГ уже было готово. Пошили все в срок, приехали повесили, прогладили. Я довольна очень! Еще и в подарок в каждую комнату по две декоративных подушек подарили. Было очень приятно! Хорошо сшиты! Было очень приятно общаться с девушкой Лианой! Спасибо большое!',
      rating: 5
    },
    {
      name: 'Елена Гарипова',
      text: 'Очень довольна, что обратилась в салон, красивые шторы, замечательно вписались в интерьер. Отдельное спасибо Лиане, все сделано качественно и быстро. Благодарю!!!',
      rating: 5
    },
    {
      name: 'Светлана Качура',
      text: 'Заказывала тюль и портьеры на три комнаты. Очень понравилась работа персонала, грамотно и профессионально подобрали текстиль, посоветовали, какие шторы подходят для нашего интерьера. Дизайнер Лиана хорошо знает свое дело, сумела убедить меня в таком подборе ткани и оказалась права! Шторы нам очень нравятся, мы до сих пор любуемся прекрасными портьерами! В подарок от салона нам сшили четыре подушки на диван и кровать. Приятный бонус! Салон рекомендую однозначно. Успехов всем сотрудникам и процветания!',
      rating: 5
    },
    {
      name: 'Кристина Варелджян',
      text: 'Спасибо огромное, за красоту в доме. Отдельное спасибо, персоналу! Качественно, быстро и со вкусом подобрали шторы и тюли 👍🏻',
      rating: 5
    },
    {
      name: 'Эрануш Саретян',
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
                        <h3 className="text-2xl font-bold">{item.title}</h3>
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
                  <div className="aspect-[4/3] overflow-hidden bg-black">
                    {item.video ? (
                      <video 
                        src={item.video}
                        className="w-full h-full object-cover"
                        controls
                        preload="metadata"
                      />
                    ) : (
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
                        onClick={() => setLightboxImage(item.image!)}
                      />
                    )}
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
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic leading-relaxed mb-3">"{testimonial.text}"</CardDescription>
                  <CardTitle className="text-base font-semibold">— {testimonial.name}</CardTitle>
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

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4 gap-6"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <Icon name="X" size={32} />
          </button>
          <img 
            src={lightboxImage} 
            alt="Просмотр фото"
            className="max-w-full max-h-[calc(100vh-120px)] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <a
            href="https://wa.me/79881556060"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors text-base font-medium shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Icon name="MessageCircle" size={20} />
            Рассчитать стоимость штор
          </a>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 px-4 border-t bg-muted/20">
        <div className="container mx-auto text-center">
          <img src="https://cdn.poehali.dev/files/IMG_7639.png" alt="ШТОРЫ ТОП" className="h-20 w-20 object-contain mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-primary">ШТОРЫ ТОП</h3>
          <p className="text-muted-foreground mb-6">Салон премиальных штор</p>
          <div className="flex justify-center gap-6">
            <a href="https://t.me/shtoryTOPchiyan" target="_blank" rel="noopener noreferrer">
              <Icon name="Send" size={24} className="text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
            </a>
            <a href="https://yandex.ru/navi/org/top_chiyan/1173230113?si=gjrp5bmg8weqv2tw2rb05aceag" target="_blank" rel="noopener noreferrer">
              <Icon name="MapPin" size={24} className="text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
            </a>
            <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
              <Icon name="MessageCircle" size={24} className="text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-8">© 2024 ШТОРЫ ТОП. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;