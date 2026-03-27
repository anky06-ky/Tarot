import React, { useState } from 'react';

const UserInfoForm = ({ onComplete }) => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('female');
  const [topic, setTopic] = useState('tổng quan');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') return;
    onComplete({ name, dob, gender, topic });
  };

  return (
    <div className="glass-panel fade-in">
      <h2 className="text-center text-gold mb-4">Người Trải Bài</h2>
      <p className="text-center text-muted mb-6">
        Thông tin cung cấp chân thành giúp vũ trụ kết nối năng lượng chính xác
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Tên của bạn</label>
          <input 
            type="text" 
            placeholder="Nhập họ và tên..." 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="form-row">
          <div>
            <label>Ngày sinh</label>
            <input 
              type="date" 
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Giới tính</label>
            <select 
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="female">Nữ</option>
              <option value="male">Nam</option>
              <option value="other">Khác</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Lĩnh vực muốn hỏi</label>
          <select 
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          >
            <option value="tổng quan">Tổng quan vận mệnh</option>
            <option value="tình yêu">Tình yêu & Mối quan hệ</option>
            <option value="sự nghiệp">Sự nghiệp & Công việc</option>
            <option value="tài chính">Tài chính & Tiền bạc</option>
            <option value="sức khỏe">Sức khỏe & Tinh thần</option>
          </select>
        </div>

        <button 
          type="submit" 
          disabled={!name.trim()}
        >
          Kết Nối Năng Lượng
        </button>
      </form>
    </div>
  );
};

export default UserInfoForm;
