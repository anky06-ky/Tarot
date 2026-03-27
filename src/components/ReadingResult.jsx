import React from 'react';

const ReadingResult = ({ userInfo, cards, spreadId, onReset }) => {
  return (
    <div className="result-container fade-in">
      <h2 className="text-center text-gold mb-2 animate-pulse-glow">Vũ Trụ Đã Lên Tiếng</h2>
      <p className="text-center text-muted mb-6">
        Thông điệp dành riêng cho {userInfo.name} về {userInfo.topic}
      </p>

      <div className="glass-panel" style={{maxWidth: '100%', marginBottom: '2rem', padding: '0'}}>
        <h3 className="text-gold" style={{padding: '1.5rem 1.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem'}}>Giải Mã Từng Lá Bài</h3>
        <div style={{padding: '1.5rem'}}>
          {cards.map((card, index) => {
            let position = "";
            if (spreadId === 1) position = "Thông điệp tổng quan";
            else if (spreadId === 3) {
              const pos3 = ["Quá Khứ", "Hiện Tại", "Tương Lai"];
              position = pos3[index];
            } else if (spreadId === 5) {
              const pos5 = ["Nguyên Nhân", "Trở Ngại", "Hiện Tại", "Lời Khuyên", "Kết Quả"];
              position = pos5[index];
            }

            return (
              <div key={index} className="result-item">
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <div className="result-card-visual" style={{ padding: 0, overflow: 'hidden' }}>
                     {card.image ? (
                       <img src={card.image} alt={card.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                     ) : (
                       card.vn_name
                     )}
                  </div>
                </div>
                <div className="result-content">
                  <div className="result-position">{position}</div>
                  <h4 className="result-title text-gold">{card.vn_name} <span style={{fontSize: '0.9rem', color: '#888', fontStyle: 'italic'}}>({card.name})</span></h4>
                  <p className="result-meaning">
                    {card.vn_meaning}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="result-advice">
        <h3 className="text-gold mb-4">Lời Khuyên Tổng Thể</h3>
        <p className="text-muted mb-6" style={{fontStyle: 'italic'}}>
          "Vũ trụ đã gửi gắm thông điệp của mình. Hãy để trái tim bạn tĩnh lặng và đón nhận nó. Mọi quyết định cuối cùng vẫn luôn nằm trong tay bạn. Ánh sáng luôn ở phía cuối con đường."
        </p>
        <button onClick={onReset} style={{maxWidth: '300px'}}>
          Trải Bài Mới
        </button>
      </div>
    </div>
  );
};

export default ReadingResult;
