// A subset of Tarot cards for demonstration
export const tarotDeck = [
  { id: 0, name: "The Fool", suit: "major", meaning: "A new beginning, spontaneity, free spirit.", vn_name: "Kẻ Khờ", vn_meaning: "Một khởi đầu mới, sự tự phát, tinh thần tự do. Hãy tin vào bản năng và bước vào những điều chưa biết." },
  { id: 1, name: "The Magician", suit: "major", meaning: "Manifestation, resourcefulness, power.", vn_name: "Ảo Thuật Gia", vn_meaning: "Sự hiện thực hóa, tháo vát, sức mạnh sáng tạo để đạt được mục tiêu." },
  { id: 2, name: "The High Priestess", suit: "major", meaning: "Intuition, sacred knowledge, divine feminine.", vn_name: "Nữ Tư Tế", vn_meaning: "Trực giác, kiến thức thiêng liêng, vẻ đẹp nữ tính thần thánh. Lắng nghe tiếng nói bên trong." },
  { id: 3, name: "The Empress", suit: "major", meaning: "Femininity, beauty, nature, abundance.", vn_name: "Nữ Hoàng", vn_meaning: "Sự nữ tính, sắc đẹp, thiên nhiên và sự trù phú. Chăm sóc và nuôi dưỡng mầm sống mới." },
  { id: 4, name: "The Emperor", suit: "major", meaning: "Authority, establishment, structure, a father figure.", vn_name: "Hoàng Đế", vn_meaning: "Quyền uy, sự thiết lập, cấu trúc, mang hình bóng của người cha. Sự lãnh đạo kiên định." },
  { id: 5, name: "The Hierophant", suit: "major", meaning: "Spiritual wisdom, religious beliefs, conformity.", vn_name: "Giáo Hoàng", vn_meaning: "Trí tuệ tâm linh, niềm tin tôn giáo, truyền thống. Tìm kiếm sự hướng dẫn từ chuyên gia." },
  { id: 6, name: "The Lovers", suit: "major", meaning: "Love, harmony, relationships, values alignment.", vn_name: "Kẻ Đang Yêu", vn_meaning: "Tình yêu, sự hòa hợp, các mối quan hệ, sự thống nhất giá trị. Một lựa chọn quan trọng từ trái tim." },
  { id: 7, name: "The Chariot", suit: "major", meaning: "Control, willpower, success, action.", vn_name: "Cỗ Xe", vn_meaning: "Sự kiểm soát, ý chí, thành công, hành động. Vượt qua trở ngại bằng quyết tâm." },
  { id: 10, name: "Wheel of Fortune", suit: "major", meaning: "Good luck, karma, life cycles, destiny.", vn_name: "Vòng Quay Số Phận", vn_meaning: "May mắn, nghiệp báo, chu kỳ cuộc sống, vận mệnh. Mọi thứ đang xoay chuyển." },
  { id: 13, name: "Death", suit: "major", meaning: "Endings, change, transformation, transition.", vn_name: "Sự Chết", vn_meaning: "Sự kết thúc, thay đổi, lột xác, chuyển đổi. Dọn đường cho cái mới." },
  { id: 19, name: "The Sun", suit: "major", meaning: "Positivity, fun, warmth, success.", vn_name: "Mặt Trời", vn_meaning: "Sự tích cực, vui vẻ, ấm áp, thành công. Năng lượng tỏa sáng." },
  { id: 20, name: "Ace of Cups", suit: "minor", meaning: "New feelings, spirituality, intuition.", vn_name: "Ace of Cups", vn_meaning: "Cảm xúc mới, tình yêu và trực giác." },
  { id: 21, name: "Three of Swords", suit: "minor", meaning: "Heartbreak, emotional pain, sorrow.", vn_name: "Three of Swords", vn_meaning: "Nỗi đau tình cảm, sự buồn bã, tổn thương." },
  { id: 22, name: "Ten of Pentacles", suit: "minor", meaning: "Wealth, financial security, family, long-term success.", vn_name: "Ten of Pentacles", vn_meaning: "Sự giàu có, an toàn tài chính, gia đình, thành công lâu dài." },
  { id: 23, name: "Eight of Wands", suit: "minor", meaning: "Rapid action, movement, quick decisions.", vn_name: "Eight of Wands", vn_meaning: "Hành động chớp nhoáng, di chuyển nhanh, quyết định tức thì." }
];

export const cardBackImage = "https://images.unsplash.com/photo-1618398414436-7c975aaecc89?auto=format&fit=crop&q=80&w=300&h=500";
// Realistic looking tarot card backs

export const getRandomCards = (num) => {
  const shuffled = [...tarotDeck].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};
