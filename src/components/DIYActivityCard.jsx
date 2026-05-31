import ActivityIllustration from './ActivityIllustration';
import DetailModal from './DetailModal';
import { diyCategoryConfig, difficultyDots } from './diyCategoryConfig';
import { interact } from '../utils/haptics';

function DIYActivityCard({ activity, onOpen, onClose, isOpen }) {
  const cat = diyCategoryConfig[activity.category] || diyCategoryConfig.sensory;
  const previewMaterials = activity.materials.slice(0, 2);
  const extraMaterials = activity.materials.length - previewMaterials.length;

  const open = () => {
    onOpen(activity.id);
    interact('tap', 'selection');
  };

  const openVideo = (e) => {
    e.stopPropagation();
    interact('tap', 'selection');
    window.open(activity.videoSearch, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <article
        className="content-card diy-activity-card card-accent-top"
        style={{ '--cat-color': cat.color, '--cat-bg': cat.bg }}
      >
        <div className="content-card-media diy-activity-media">
          <ActivityIllustration type={activity.illustration} />
        </div>
        <div className="content-card-body">
          <span className="diy-cat-badge" style={{ background: cat.bg, color: cat.color }}>
            {cat.icon} {cat.label}
          </span>
          <h4 className="content-card-title">{activity.name}</h4>
          <div className="content-card-meta">
            <span className="diy-duration">⏱ {activity.duration}</span>
            <span className="diy-difficulty" aria-label={`Difficulty: ${activity.difficulty}`}>
              {Array.from({ length: 3 }).map((_, i) => (
                <span
                  key={i}
                  className={`diff-dot ${i < difficultyDots[activity.difficulty] ? 'filled' : ''}`}
                />
              ))}
            </span>
          </div>
          <div className="diy-materials content-card-chips">
            {previewMaterials.map((m, i) => (
              <span key={i} className="diy-material-chip">{m}</span>
            ))}
            {extraMaterials > 0 && (
              <span className="diy-material-chip diy-material-more">+{extraMaterials}</span>
            )}
          </div>
          <p className="content-card-preview">{activity.benefits[0]}</p>
          <button type="button" className="content-card-cta" onClick={open}>
            Open guide
          </button>
        </div>
      </article>

      {isOpen && (
        <DetailModal
          title={activity.name}
          subtitle={`${cat.label} · ${activity.duration} · ${activity.difficulty}`}
          onClose={onClose}
        >
          <div className="diy-illustration-wrap">
            <ActivityIllustration type={activity.illustration} />
          </div>
          <div className="diy-section">
            <h5 className="diy-section-title">🛒 What You Need</h5>
            <div className="diy-materials">
              {activity.materials.map((m, i) => (
                <span key={i} className="diy-material-chip">{m}</span>
              ))}
            </div>
          </div>
          <div className="diy-section">
            <h5 className="diy-section-title">📋 How To Play</h5>
            <ol className="diy-steps">
              {activity.steps.map((step, i) => (
                <li key={i}>
                  <span className="step-num">{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="diy-two-col">
            <div className="diy-section">
              <h5 className="diy-section-title">✅ Benefits</h5>
              <ul className="diy-benefits">
                {activity.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="diy-section diy-why">
              <h5 className="diy-section-title">🔬 Why It Works</h5>
              <p>{activity.whyItWorks}</p>
            </div>
          </div>
          <button type="button" className="diy-video-btn" onClick={openVideo}>
            <span className="yt-icon">▶</span>
            Watch How-To Videos on YouTube
          </button>
        </DetailModal>
      )}
    </>
  );
}

export default DIYActivityCard;
