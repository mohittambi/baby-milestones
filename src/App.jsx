import { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import MonthDetail from './pages/MonthDetail';
import Dashboard from './pages/Dashboard';
import Sources from './pages/Sources';
import Shopping from './pages/Shopping';
import Travel from './pages/Travel';
import AssistantPanel from './components/AssistantPanel';

function App() {
  const [page, setPage] = useState('home');
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [birthDate, setBirthDate] = useState(() => localStorage.getItem('babyBirthDate') || '');
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem('babyMilestoneChecks');
    return saved ? JSON.parse(saved) : {};
  });
  const [soundEnabled, setSoundEnabled] = useState(() => {
    const saved = localStorage.getItem('babySoundEnabled');
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('babyMilestoneChecks', JSON.stringify(checkedItems));
  }, [checkedItems]);

  useEffect(() => {
    if (birthDate) {
      localStorage.setItem('babyBirthDate', birthDate);
    }
  }, [birthDate]);

  useEffect(() => {
    localStorage.setItem('babySoundEnabled', JSON.stringify(soundEnabled));
    window.__soundEnabled = soundEnabled;
  }, [soundEnabled]);

  useEffect(() => {
    window.__soundEnabled = soundEnabled;
  }, []);

  const getCurrentMonth = () => {
    if (!birthDate) return null;
    const birth = new Date(birthDate);
    const now = new Date();
    const months = (now.getFullYear() - birth.getFullYear()) * 12 + (now.getMonth() - birth.getMonth());
    const days = now.getDate() - birth.getDate();
    const adjusted = days < 0 ? months - 1 : months;
    return Math.max(1, Math.min(36, adjusted + 1));
  };

  const getCurrentWeek = () => {
    if (!birthDate) return null;
    const birth = new Date(birthDate);
    const now = new Date();
    const diffDays = Math.floor((now - birth) / (1000 * 60 * 60 * 24));
    const currentMonth = getCurrentMonth();
    if (!currentMonth) return null;
    const daysIntoMonth = diffDays - ((currentMonth - 1) * 30);
    return Math.max(1, Math.min(4, Math.ceil(daysIntoMonth / 7)));
  };

  const toggleCheck = useCallback((id) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const handleSelectMonth = useCallback((month) => {
    setSelectedMonth(month);
    setPage('detail');
    window.scrollTo(0, 0);
  }, []);

  const handleNavigate = useCallback((month) => {
    setSelectedMonth(month);
    window.scrollTo(0, 0);
  }, []);

  const handleSetPage = useCallback((p) => {
    setPage(p);
    setSelectedMonth(null);
    window.scrollTo(0, 0);
  }, []);

  const handleToggleSound = useCallback(() => {
    setSoundEnabled(prev => !prev);
  }, []);

  return (
    <div className="app">
      <Header
        page={page}
        setPage={handleSetPage}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />
      {page === 'home' && (
        <Home
          birthDate={birthDate}
          setBirthDate={setBirthDate}
          currentMonth={getCurrentMonth()}
          checkedItems={checkedItems}
          onSelectMonth={handleSelectMonth}
        />
      )}
      {page === 'detail' && selectedMonth && (
        <MonthDetail
          month={selectedMonth}
          checkedItems={checkedItems}
          toggleCheck={toggleCheck}
          onBack={() => handleSetPage('home')}
          onNavigate={handleNavigate}
          currentWeek={getCurrentWeek()}
        />
      )}
      {page === 'shopping' && (
        <Shopping
          checkedItems={checkedItems}
          toggleCheck={toggleCheck}
          currentMonth={getCurrentMonth()}
        />
      )}
      {page === 'travel' && (
        <Travel
          currentMonth={getCurrentMonth()}
          onGoHome={() => handleSetPage('home')}
          onGoShopping={() => handleSetPage('shopping')}
        />
      )}
      {page === 'dashboard' && (
        <Dashboard
          checkedItems={checkedItems}
          onSelectMonth={handleSelectMonth}
        />
      )}
      {page === 'sources' && <Sources />}
      {(page === 'home' || page === 'detail' || page === 'travel') && (
        <AssistantPanel
          currentMonth={getCurrentMonth()}
          selectedMonth={page === 'detail' ? selectedMonth : null}
        />
      )}
    </div>
  );
}

export default App;
