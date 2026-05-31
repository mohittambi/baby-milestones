import { interact } from '../utils/haptics';

function Header({ page, setPage, soundEnabled, onToggleSound }) {
  const nav = (p) => {
    interact('tap', 'selection');
    setPage(p);
  };

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div className="header-logo" onClick={() => nav('home')}>
            <span>👶</span>
            <span>Baby Milestones</span>
          </div>
          <nav className="header-nav">
            <button className={page === 'home' ? 'active' : ''} onClick={() => nav('home')}>
              Home
            </button>
            <button className={page === 'shopping' ? 'active' : ''} onClick={() => nav('shopping')}>
              Shopping
            </button>
            <button className={page === 'travel' ? 'active' : ''} onClick={() => nav('travel')}>
              Travel
            </button>
            <button className={page === 'dashboard' ? 'active' : ''} onClick={() => nav('dashboard')}>
              Progress
            </button>
            <button className={page === 'sources' ? 'active' : ''} onClick={() => nav('sources')}>
              Sources
            </button>
            <button
              className="sound-toggle"
              onClick={(e) => { e.stopPropagation(); onToggleSound(); }}
              title={soundEnabled ? 'Mute sounds' : 'Enable sounds'}
            >
              {soundEnabled ? '🔊' : '🔇'}
            </button>
          </nav>
        </div>
      </header>
      <nav className="mobile-nav">
        <button className={page === 'home' ? 'active' : ''} onClick={() => nav('home')}>
          <span>🏠</span>
          <span>Home</span>
        </button>
        <button className={page === 'shopping' ? 'active' : ''} onClick={() => nav('shopping')}>
          <span>🛒</span>
          <span>Shop</span>
        </button>
        <button className={page === 'travel' ? 'active' : ''} onClick={() => nav('travel')}>
          <span>🧳</span>
          <span>Travel</span>
        </button>
        <button className={page === 'dashboard' ? 'active' : ''} onClick={() => nav('dashboard')}>
          <span>📊</span>
          <span>Progress</span>
        </button>
        <button className={page === 'sources' ? 'active' : ''} onClick={() => nav('sources')}>
          <span>📚</span>
          <span>Sources</span>
        </button>
        <button
          className={`sound-toggle-mobile`}
          onClick={(e) => { e.stopPropagation(); onToggleSound(); }}
        >
          <span>{soundEnabled ? '🔊' : '🔇'}</span>
          <span>Sound</span>
        </button>
      </nav>
    </>
  );
}

export default Header;
