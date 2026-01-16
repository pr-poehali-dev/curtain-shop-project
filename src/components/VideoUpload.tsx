import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const VideoUpload = () => {
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('video/')) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, выберите видеофайл",
        variant: "destructive"
      });
      return;
    }

    const maxSize = 100 * 1024 * 1024;
    if (file.size > maxSize) {
      toast({
        title: "Ошибка",
        description: "Размер видео не должен превышать 100 МБ",
        variant: "destructive"
      });
      return;
    }

    setUploading(true);

    try {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const base64 = event.target?.result as string;
        const base64Data = base64.split(',')[1];

        const response = await fetch('https://functions.poehali.dev/cace2f49-e54f-4014-a6b0-67654211e6c1', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            video: base64Data,
            filename: file.name
          })
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setVideoUrl(data.url);
          toast({
            title: "Успешно!",
            description: "Видео загружено. Скопируйте ссылку ниже.",
          });
        } else {
          throw new Error(data.error || 'Upload failed');
        }
      };

      reader.readAsDataURL(file);
    } catch (error) {
      toast({
        title: "Ошибка загрузки",
        description: error instanceof Error ? error.message : "Не удалось загрузить видео",
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  const copyToClipboard = () => {
    if (videoUrl) {
      navigator.clipboard.writeText(videoUrl);
      toast({
        title: "Скопировано!",
        description: "Ссылка скопирована в буфер обмена",
      });
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="Upload" size={24} />
          Загрузка видео для электрокарнизов
        </CardTitle>
        <CardDescription>
          Выберите видеофайл (максимум 100 МБ). Поддерживаются форматы: MP4, MOV, AVI
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="video">Выберите видео</Label>
          <Input
            id="video"
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            disabled={uploading}
          />
        </div>

        {uploading && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Icon name="Loader2" size={20} className="animate-spin" />
            Загрузка видео...
          </div>
        )}

        {videoUrl && (
          <div className="space-y-3 p-4 bg-accent/10 rounded-lg">
            <div className="flex items-center gap-2 text-green-600">
              <Icon name="CheckCircle2" size={20} />
              <span className="font-semibold">Видео успешно загружено!</span>
            </div>
            
            <div className="space-y-2">
              <Label>Ссылка на видео:</Label>
              <div className="flex gap-2">
                <Input
                  value={videoUrl}
                  readOnly
                  className="flex-1 font-mono text-sm"
                />
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  size="icon"
                >
                  <Icon name="Copy" size={16} />
                </Button>
              </div>
            </div>

            <video
              src={videoUrl}
              controls
              className="w-full rounded-lg"
              preload="metadata"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default VideoUpload;
