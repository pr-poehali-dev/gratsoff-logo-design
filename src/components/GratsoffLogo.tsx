import React from "react";

interface GratsoffLogoProps {
  size?: number;
  className?: string;
}

const GratsoffLogo: React.FC<GratsoffLogoProps> = ({ size = 100, className = "" }) => {
  return (
    <div 
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <div className="relative">
        {/* Основной круг логотипа */}
        <div 
          className="rounded-full flex items-center justify-center"
          style={{
            width: size,
            height: size,
            background: "linear-gradient(135deg, #FF0066 0%, #1A0033 100%)",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)"
          }}
        >
          {/* Внутренний круг */}
          <div
            className="rounded-full flex items-center justify-center relative overflow-hidden"
            style={{
              width: size * 0.85,
              height: size * 0.85,
              background: "#1A0033",
              border: "2px solid rgba(255, 255, 255, 0.2)"
            }}
          >
            {/* Текст логотипа */}
            <span 
              className="font-bold tracking-wide text-center"
              style={{ 
                color: "#FFFFFF", 
                fontSize: `${size * 0.22}px`,
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)"
              }}
            >
              GRATSOFF
            </span>
            
            {/* Плашка 18+ */}
            <div 
              className="absolute bottom-2 right-2 rounded px-1 py-0.5 flex items-center justify-center"
              style={{ 
                fontSize: `${size * 0.12}px`, 
                backgroundColor: "#FF0066",
                color: "white",
                fontWeight: "bold",
                minWidth: `${size * 0.2}px`,
                height: `${size * 0.18}px`
              }}
            >
              18+
            </div>
            
            {/* Декоративный элемент */}
            <div 
              className="absolute top-3 left-3 rounded-full"
              style={{ 
                width: size * 0.1, 
                height: size * 0.1, 
                background: "rgba(255, 0, 102, 0.8)",
                boxShadow: "0 0 10px rgba(255, 0, 102, 0.5)"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GratsoffLogo;
