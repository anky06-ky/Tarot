import React, { useState, useEffect } from 'react';
import { cardBackImage, getRandomCards } from '../data/tarotData';

const TarotTable = ({ numCards, onReadingComplete }) => {
  const [cards, setCards] = useState([]);
  const [revealed, setRevealed] = useState([]);

  useEffect(() => {
    setCards(getRandomCards(numCards));
  }, [numCards]);

  const handleReveal = (index) => {
    if (!revealed.includes(index)) {
      const newRevealed = [...revealed, index];
      setRevealed(newRevealed);
      
      if (newRevealed.length === numCards) {
        setTimeout(() => {
          onReadingComplete(cards);
        }, 1500); 
      }
    }
  };

  return (
    <div className="tarot-table fade-in">
      <h2 className="text-center text-gold mb-4 animate-pulse-glow">Kết Nối Tâm Thức</h2>
      <p className="text-center text-muted mb-6" style={{maxWidth: '600px', margin: '0 auto'}}>
        Hãy tập trung vào câu hỏi của bạn. Hít thở sâu và chọn lật từng lá bài khi bạn cảm thấy đã kết nối được với năng lượng của vũ trụ.
      </p>

      <div className="cards-container">
        {cards.map((card, index) => {
          const isRevealed = revealed.includes(index);
          return (
            <div 
              key={index} 
              className={`tarot-card ${isRevealed ? 'revealed' : 'animate-float'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => handleReveal(index)}
            >
              <div className="card-inner">
                <div className="card-back">
                  <img src={cardBackImage} alt="Card Back" />
                </div>
                
                <div className="card-front">
                  <div style={{fontSize: '2rem'}}>✨</div>
                  <h3 className="card-front-title">{card.vn_name}</h3>
                  <p className="card-front-suit">
                    {card.suit === 'major' ? 'Bộ Ẩn Chính' : 'Bộ Ẩn Phụ'}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TarotTable;
