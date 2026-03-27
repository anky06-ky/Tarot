import React, { useState } from 'react';
import Header from './components/Header';
import UserInfoForm from './components/UserInfoForm';
import SpreadSelector from './components/SpreadSelector';
import TarotTable from './components/TarotTable';
import ReadingResult from './components/ReadingResult';
import './index.css';

function App() {
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
    <div className="app-wrapper">
      <div className="stars-container"></div>
      
      <Header />

      <main className="container">
        {appState === 'intro' && (
          <div className="text-center mt-4 fade-in">
            <button onClick={() => setAppState('form')} className="btn-start animate-pulse-glow">
              Bắt Đầu Hành Trình
            </button>
            <p className="text-muted mt-4" style={{fontSize: '0.85rem'}}>
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

      <footer>
        <p>Mystery Tarot Personal Version • By anky06-ky</p>
        <p style={{marginTop: '0.5rem', opacity: 0.5}}>Tôn trọng quyền riêng tư • Kết nối năng lượng</p>
      </footer>
    </div>
  );
}

export default App;
