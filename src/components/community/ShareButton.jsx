import { useState } from 'react';
import { interact } from '../../utils/haptics';
import { buildSharePayload, copyShareText } from '../../utils/shareLinks';

function ShareButton({ title, text, url, compact = false }) {
  const [copied, setCopied] = useState(false);
  const payload = buildSharePayload({ title, text, url });

  const openLink = (href, label) => {
    interact('tap', 'light');
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  const handleNativeShare = async () => {
    interact('tap', 'light');
    if (navigator.share) {
      try {
        await navigator.share({ title, text: payload.text, url: payload.url });
        return;
      } catch {
        /* cancelled */
      }
    }
  };

  const handleCopy = async () => {
    try {
      await copyShareText({ title, text, url });
      interact('check', 'success');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      interact('tap', 'error');
    }
  };

  if (compact) {
    return (
      <button type="button" className="memory-action-btn" onClick={handleNativeShare}>
        ↗ Share
      </button>
    );
  }

  return (
    <div className="share-button-group">
      {typeof navigator !== 'undefined' && navigator.share && (
        <button type="button" className="share-platform-btn share-native" onClick={handleNativeShare}>
          Share
        </button>
      )}
      <button
        type="button"
        className="share-platform-btn share-whatsapp"
        onClick={() => openLink(payload.whatsapp, 'WhatsApp')}
        aria-label="Share on WhatsApp"
      >
        WhatsApp
      </button>
      <button
        type="button"
        className="share-platform-btn share-twitter"
        onClick={() => openLink(payload.twitter, 'Twitter')}
        aria-label="Share on X"
      >
        X
      </button>
      <button
        type="button"
        className="share-platform-btn share-facebook"
        onClick={() => openLink(payload.facebook, 'Facebook')}
        aria-label="Share on Facebook"
      >
        Facebook
      </button>
      <button type="button" className="share-platform-btn share-copy" onClick={handleCopy}>
        {copied ? 'Copied!' : 'Copy link'}
      </button>
    </div>
  );
}

export default ShareButton;
