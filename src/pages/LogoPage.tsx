import React from "react";
import GratsoffLogo from "@/components/GratsoffLogo";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { Download } from "lucide-react";

const LogoPage: React.FC = () => {
  // Функция для скачивания логотипа как SVG
  const downloadLogo = () => {
    // В реальном приложении здесь был бы код для экспорта SVG
    alert("Функция скачивания логотипа будет реализована позже");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Логотип Gratsoff</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Предпросмотр логотипа</CardTitle>
            <CardDescription>
              Логотип для телеграм канала с контентом 18+
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center items-center py-8">
            <GratsoffLogo size={200} />
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={downloadLogo} className="flex items-center gap-2">
              <Download size={16} />
              Скачать логотип
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Варианты использования</CardTitle>
            <CardDescription>
              Примеры размеров логотипа для разных платформ
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3 className="text-sm font-medium mb-2">Аватар для Telegram</h3>
                <div className="flex justify-center">
                  <GratsoffLogo size={100} />
                </div>
              </div>
              
              <div className="border-b pb-4">
                <h3 className="text-sm font-medium mb-2">Миниатюра</h3>
                <div className="flex justify-center">
                  <GratsoffLogo size={50} />
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Крупная версия</h3>
                <div className="flex justify-center">
                  <GratsoffLogo size={150} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LogoPage;
