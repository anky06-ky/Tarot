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
    <div className="spreads-container fade-in">
      <h2 className="text-center text-gold mb-2">Chọn Kiểu Trải Bài</h2>
      <p className="text-center text-muted mb-6">Mỗi kiểu trải bài mang một chiều sâu khác nhau</p>
      
      <div className="spread-grid">
        {spreads.map((spread) => (
          <div 
            key={spread.id} 
            onClick={() => setSelected(spread.id)}
            className={`spread-card ${selected === spread.id ? 'active' : ''}`}
          >
            <h3 className="text-gold mb-2">{spread.name}</h3>
            <p className="mb-4 text-muted">{spread.description}</p>
            <div className="spread-energy">
              Năng lượng: {spread.energy}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button 
          onClick={handleSelect}
          disabled={!selected}
          style={{ maxWidth: '300px' }}
        >
          Xác Nhận Kiểu Trải Bài
        </button>
      </div>
    </div>
  );
};

export default SpreadSelector;
