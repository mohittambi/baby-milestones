import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { interact } from '../utils/haptics';

function DetailModal({ title, subtitle, onClose, children }) {
  useEffect(() => {
    const scrollY = window.scrollY;

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKey);
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY);
    };
  }, [onClose]);

  const handleBackdrop = () => {
    interact('tap', 'light');
    onClose();
  };

  return createPortal(
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
    </div>,
    document.body
  );
}

export default DetailModal;
