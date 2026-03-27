import React, { useState } from 'react';

const SpreadSelector = ({ onSelectSpread }) => {
  const [selected, setSelected] = useState(null);

  const spreads = [
    { id: 1, name: 'Trải Bài 1 Lá', description: 'Thông điệp nhanh chóng, trực diện cho ngày mới hoặc câu hỏi đơn giản.', energy: 'Miễn phí' },
    { id: 3, name: 'Trải Bài 3 Lá', description: 'Đi sâu vào Quá khứ - Hiện tại - Tương lai. Phù hợp cho sự chiêm nghiệm.', energy: 'Trung bình' },
    { id: 5, name: 'Trải Bài 5 Lá', description: 'Phân tích sâu sắc về nguyên nhân, trở ngại, hành động và kết quả tiềm năng.', energy: 'Cao' },
  ];

  const handleSelect = () => {
    if (selected) {
      onSelectSpread(selected);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-8 fade-in">
      <h2 className="text-3xl text-center text-gold mb-2">Chọn Kiểu Trải Bài</h2>
      <p className="text-center text-[var(--color-text-muted)] mb-8">Mỗi kiểu trải bài mang một chiều sâu khác nhau</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {spreads.map((spread) => (
          <div 
            key={spread.id} 
            onClick={() => setSelected(spread.id)}
            className={`glass-panel cursor-pointer transition-all duration-300 border-2 ${selected === spread.id ? 'border-[var(--color-primary)] box-shadow-[0_0_15px_rgba(212,175,55,0.4)] transform -translate-y-2' : 'border-transparent hover:border-[rgba(212,175,55,0.3)]'}`}
          >
            <h3 className="text-xl text-gold mb-2 text-center">{spread.name}</h3>
            <p className="text-sm text-[var(--color-text-main)] mb-4 text-center">{spread.description}</p>
            <div className="text-xs text-center text-[var(--color-accent)] uppercase tracking-wider">
              Năng lượng: {spread.energy}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button 
          onClick={handleSelect}
          disabled={!selected}
          className="px-10 py-3 text-lg"
        >
          Xác Nhận Kiểu Trải Bài
        </button>
      </div>
    </div>
  );
};

export default SpreadSelector;
