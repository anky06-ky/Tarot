import React from 'react';

const ReadingResult = ({ userInfo, cards, spreadId, onReset }) => {
  return (
    <div className="max-w-4xl mx-auto my-12 fade-in">
      <h2 className="text-3xl md:text-4xl text-center text-gold mb-2 animate-pulse-glow">Vũ Trụ Đã Lên Tiếng</h2>
      <p className="text-center text-[var(--color-text-muted)] mb-8">
        Thông điệp dành riêng cho {userInfo.name} về {userInfo.topic}
      </p>

      <div className="glass-panel mb-8 border-t-4 border-t-[var(--color-accent)]">
        <h3 className="text-xl text-gold mb-6 border-b border-white/10 pb-2">Giải Mã Từng Lá Bài</h3>
        <div className="space-y-6">
          {cards.map((card, index) => {
            // Assign roles based on spread
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
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start bg-black/20 p-4 rounded-lg border border-white/5">
                <div className="w-full md:w-1/4 flex flex-col items-center">
                  <div className="w-24 h-36 bg-[var(--color-bg-dark)] border border-gold rounded-md flex items-center justify-center shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                     <span className="text-gold font-heading text-center text-sm px-2">{card.vn_name}</span>
                  </div>
                  <div className="mt-3 text-sm text-[var(--color-accent)] uppercase tracking-widest font-bold">
                    {position}
                  </div>
                </div>
                <div className="w-full md:w-3/4">
                  <h4 className="text-xl text-white mb-2 font-heading">{card.vn_name} <span className="text-sm text-gray-400 font-body">({card.name})</span></h4>
                  <p className="text-[var(--color-text-main)] leading-relaxed bg-black/30 p-4 rounded-md border-l-2 border-[var(--color-primary)]">
                    {card.vn_meaning}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="glass-panel text-center bg-gradient-to-b from-transparent to-purple-900/20">
        <h3 className="text-xl text-gold mb-4">Lời Khuyên Tổng Thể</h3>
        <p className="text-[var(--color-text-main)] italic mb-6">
          "Vũ trụ đã gửi gắm thông điệp của mình. Hãy để trái tim bạn tĩnh lặng và đón nhận nó. Mọi quyết định cuối cùng vẫn luôn nằm trong tay bạn. Ánh sáng luôn ở phía cuối con đường."
        </p>
        <button onClick={onReset} className="px-8 py-3">
          Trải Bài Mới
        </button>
      </div>
    </div>
  );
};

export default ReadingResult;
