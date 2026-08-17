import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'colored';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'colored',
  className = '',
  size = 'md',
  showTagline = true,
}) => {
  const isDark = variant === 'dark'; // for dark background (white text)
  const isLight = variant === 'light'; // white elements

  // Dimensions based on size
  const iconSize = size === 'sm' ? 36 : size === 'lg' ? 52 : 42;
  const titleSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';
  const subtitleSize = size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-xs' : 'text-[10px]';

  return (
    <div id="agroema-logo" className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Emblem SVG with Ema & Nature motif */}
      <div 
        className="relative flex items-center justify-center shrink-0 rounded-xl overflow-hidden shadow-sm"
        style={{ width: iconSize, height: iconSize }}
      >
        <img 
          src="/logopng.png" 
          alt="AgroEma Logo" 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none justify-center">
        <div className="flex items-center gap-1">
          <span 
            className={`font-heading font-extrabold tracking-tight ${titleSize} ${
              isDark ? 'text-white' : 'text-[#33452E]'
            }`}
          >
            AGRO<span className="text-[#5D8C3A]">EMA</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A43A]"></span>
        </div>
        
        {showTagline && (
          <span 
            className={`font-semibold tracking-wider uppercase mt-0.5 ${subtitleSize} ${
              isDark ? 'text-[#88B84A]' : 'text-[#5D8C3A]'
            }`}
          >
            Pet &amp; Agropecuária
          </span>
        )}
      </div>
    </div>
  );
};
