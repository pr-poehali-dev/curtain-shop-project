import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface PortfolioItem {
  image?: string;
  video?: string;
  title: string;
  description: string;
  category: string;
}

interface CategoryCover {
  category: string;
  image: string;
  title: string;
}

interface PortfolioSectionProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  categoryCovers: CategoryCover[];
  filteredPortfolio: PortfolioItem[];
  showingCategories: boolean;
  setLightboxImage: (image: string | null) => void;
}

const PortfolioSection = ({
  activeCategory,
  setActiveCategory,
  categoryCovers,
  filteredPortfolio,
  showingCategories,
  setLightboxImage
}: PortfolioSectionProps) => {
  return (
    <section id="portfolio" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 text-primary">Наши работы</h2>
          <p className="text-lg text-muted-foreground">Портфолио реализованных проектов</p>
        </div>
        
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

        {showingCategories ? (
          <div className="grid md:grid-cols-4 gap-6">
            {categoryCovers.map((cover, index) => (
              <Card 
                key={index} 
                className="overflow-hidden cursor-pointer hover-lift group border-none shadow-lg"
                onClick={() => setActiveCategory(cover.category)}
              >
                <div className="aspect-[3/4] overflow-hidden bg-black">
                  <img
                    src={cover.image}
                    alt={cover.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center bg-card">
                  <h3 className="text-xl font-semibold text-primary mb-2">{cover.title}</h3>
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
                      className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                      onClick={() => item.image && setLightboxImage(item.image)}
                    />
                  )}
                </div>
                <div className="p-6 bg-card">
                  <h3 className="text-2xl font-semibold mb-3 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
