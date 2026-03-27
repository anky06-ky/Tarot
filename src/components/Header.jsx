import React from 'react';
import '../index.css';

const Header = () => {
  return (
    <header className="text-center py-10 fade-in">
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-gold mb-2 animate-pulse-glow">Tarot Huyền Bí</h1>
      <p className="text-xl md:text-2xl text-white mb-4 italic font-light">Nhìn xuyên màn đêm — Khám phá vận mệnh</p>
      <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-6"></div>
      <p className="mt-4 text-[var(--color-text-muted)] text-sm md:text-base max-w-2xl mx-auto px-4">
        "Tín hiệu chỉ là những gợi ý cho người đang lạc lối, mọi khó khăn trên cuộc sống này rồi sẽ vượt qua. Tín hiệu có thể sai nhưng lực hấp dẫn vũ trụ luôn đúng."
      </p>
    </header>
  );
};

export default Header;
