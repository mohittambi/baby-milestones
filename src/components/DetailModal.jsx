import { useEffect } from 'react';
import { interact } from '../utils/haptics';

function DetailModal({ title, subtitle, onClose, children }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleBackdrop = () => {
    interact('tap', 'light');
    onClose();
  };

  return (
    <div
      className="detail-modal-backdrop"
      role="presentation"
      onClick={handleBackdrop}
    >
      <div
        className="detail-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="detail-modal-header">
          <div className="detail-modal-heading">
            <h2 id="detail-modal-title">{title}</h2>
            {subtitle ? <p className="detail-modal-sub">{subtitle}</p> : null}
          </div>
          <button
            type="button"
            className="detail-modal-close"
            onClick={() => { interact('tap', 'light'); onClose(); }}
            aria-label="Close"
          >
            ×
          </button>
        </header>
        <div className="detail-modal-body">{children}</div>
      </div>
    </div>
  );
}

export default DetailModal;
