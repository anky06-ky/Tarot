import React, { useState } from 'react';
import Header from './components/Header';
import UserInfoForm from './components/UserInfoForm';
import SpreadSelector from './components/SpreadSelector';
import TarotTable from './components/TarotTable';
import ReadingResult from './components/ReadingResult';
import './index.css';

function App() {
  // states: 'intro', 'form', 'spread', 'table', 'result'
  const [appState, setAppState] = useState('intro');
  const [userInfo, setUserInfo] = useState(null);
  const [spreadId, setSpreadId] = useState(null);
  const [drawnCards, setDrawnCards] = useState([]);

  const handleUserInfoComplete = (info) => {
    setUserInfo(info);
    setAppState('spread');
  };

  const handleSpreadSelect = (spread) => {
    setSpreadId(spread);
    setAppState('table');
  };

  const handleReadingComplete = (cards) => {
    setDrawnCards(cards);
    setAppState('result');
  };

  const resetApp = () => {
    setAppState('intro');
    setUserInfo(null);
    setSpreadId(null);
    setDrawnCards([]);
  };

  return (
    <div className="min-h-screen relative p-4 md:p-8">
      {/* Background decoration elements */}
      <div className="stars-container"></div>
      
      <Header />

      <main className="container mx-auto">
        {appState === 'intro' && (
          <div className="text-center mt-12 fade-in">
            <button onClick={() => setAppState('form')} className="px-10 py-4 text-xl shadow-[0_0_20px_rgba(212,175,55,0.3)] animate-pulse-glow">
              Bắt Đầu Hành Trình
            </button>
            <p className="mt-8 text-[var(--color-text-muted)] text-sm">
              Được bảo vệ bởi năng lượng vũ trụ
            </p>
          </div>
        )}

        {appState === 'form' && (
          <UserInfoForm onComplete={handleUserInfoComplete} />
        )}

        {appState === 'spread' && (
          <SpreadSelector onSelectSpread={handleSpreadSelect} />
        )}

        {appState === 'table' && (
          <TarotTable 
            numCards={spreadId} 
            onReadingComplete={handleReadingComplete} 
          />
        )}

        {appState === 'result' && (
          <ReadingResult 
            userInfo={userInfo} 
            cards={drawnCards} 
            spreadId={spreadId} 
            onReset={resetApp} 
          />
        )}
      </main>

      <footer className="mt-20 text-center py-6 text-sm text-[var(--color-text-muted)] border-t border-white/10">
        <p>Mystery Tarot Personal Version • By anky06-ky</p>
        <p className="mt-2 text-xs opacity-50">Tôn trọng quyền riêng tư • Kết nối năng lượng</p>
      </footer>
    </div>
  );
}

export default App;
