import React from 'react';
import '../index.css';

const Header = () => {
  return (
    <header className="header-wrapper fade-in">
      <h1 className="header-title text-gold animate-pulse-glow">Tarot Huyền Bí</h1>
      <p className="header-subtitle">Nhìn xuyên màn đêm — Khám phá vận mệnh</p>
      <div className="header-divider"></div>
      <p className="header-quote text-muted">
        "Tín hiệu chỉ là những gợi ý cho người đang lạc lối, mọi khó khăn trên cuộc sống này rồi sẽ vượt qua. Tín hiệu có thể sai nhưng lực hấp dẫn vũ trụ luôn đúng."
      </p>
    </header>
  );
};

export default Header;
