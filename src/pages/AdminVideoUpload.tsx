import VideoUpload from '@/components/VideoUpload';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const AdminVideoUpload = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          Вернуться на главную
        </Button>
        
        <VideoUpload />

        <div className="max-w-2xl mx-auto mt-8 p-6 bg-muted/50 rounded-lg">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Icon name="Info" size={20} />
            Как использовать загруженное видео:
          </h3>
          <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
            <li>Загрузите видео через форму выше</li>
            <li>Скопируйте полученную ссылку</li>
            <li>Отправьте ссылку мне в чат</li>
            <li>Я добавлю видео в раздел "Электрокарнизы"</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AdminVideoUpload;
