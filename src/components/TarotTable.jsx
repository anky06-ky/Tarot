import React, { useState, useEffect } from 'react';
import { cardBackImage, getRandomCards } from '../data/tarotData';

const TarotTable = ({ numCards, onReadingComplete }) => {
  const [cards, setCards] = useState([]);
  const [revealed, setRevealed] = useState([]);

  useEffect(() => {
    // Pick random cards based on selected spread
    setCards(getRandomCards(numCards));
  }, [numCards]);

  const handleReveal = (index) => {
    if (!revealed.includes(index)) {
      const newRevealed = [...revealed, index];
      setRevealed(newRevealed);
      
      // If all cards are revealed, trigger complete
      if (newRevealed.length === numCards) {
        setTimeout(() => {
          onReadingComplete(cards);
        }, 1500); // Wait 1.5s after last card is revealed before showing results
      }
    }
  };

  return (
    <div className="my-12 fade-in">
      <h2 className="text-3xl text-center text-gold mb-4 animate-pulse-glow">Kết Nối Tâm Thức</h2>
      <p className="text-center text-[var(--color-text-muted)] mb-10 max-w-2xl mx-auto">
        Hãy tập trung vào câu hỏi của bạn. Hít thở sâu và chọn lật từng lá bài khi bạn cảm thấy đã kết nối được với năng lượng của vũ trụ.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card, index) => {
          const isRevealed = revealed.includes(index);
          return (
            <div 
              key={index} 
              className={`relative w-40 h-64 md:w-48 md:h-80 cursor-pointer perspective-1000 ${isRevealed ? '' : 'animate-float'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => handleReveal(index)}
            >
              <div className={`w-full h-full transition-transform duration-700 transform-style-3d ${isRevealed ? 'rotate-y-180' : ''}`}>
                {/* Back of Card */}
                <div className="absolute w-full h-full backface-hidden rounded-xl border border-gold shadow-[0_0_15px_rgba(212,175,55,0.3)] overflow-hidden">
                  <img src={cardBackImage} alt="Card Back" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-blue-900/30 mix-blend-overlay"></div>
                </div>
                
                {/* Front of Card */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl bg-[var(--color-bg-dark)] border-2 border-gold shadow-[0_0_20px_rgba(212,175,55,0.6)] flex flex-col items-center justify-center p-4">
                  <div className="text-4xl mb-4">✨</div>
                  <h3 className="text-lg text-gold font-heading text-center mb-2">{card.vn_name}</h3>
                  <p className="text-xs text-center text-[var(--color-text-main)] italic">
                    {card.suit === 'major' ? 'Bộ Ẩn Chính' : 'Bộ Ẩn Phụ'}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}} />
    </div>
  );
};

export default TarotTable;
