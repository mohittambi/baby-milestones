import { useState, useEffect, useMemo } from 'react';
import { getTravelTips } from '../data/travelTips';
import { travelTypeConfig, TRAVEL_TYPES } from '../data/travelTypeConfig';
import { getShoppingListForRange } from '../data/shoppingAndCare';
import { interact } from '../utils/haptics';

function TravelTips({ currentMonth, onGoHome, onGoShopping }) {
  const [activeType, setActiveType] = useState(() => {
    const saved = localStorage.getItem('travelType');
    return saved && TRAVEL_TYPES.includes(saved) ? saved : 'car';
  });

  useEffect(() => {
    localStorage.setItem('travelType', activeType);
  }, [activeType]);

  const tips = useMemo(
    () => (currentMonth != null ? getTravelTips(currentMonth, activeType) : null),
    [currentMonth, activeType]
  );

  const travelGear = useMemo(() => {
    if (currentMonth == null) return [];
    const list = getShoppingListForRange(1, currentMonth);
    return list.all.filter((i) => i.category === 'travel');
  }, [currentMonth]);

  const cat = travelTypeConfig[activeType];

  return (
    <div className="travel-page-content fade-in">
      <div className="travel-page-hero">
        <h1>Travel with Baby</h1>
        <p className="travel-page-sub">
          Practical tips by how you travel — tailored to your baby&apos;s age. Not medical advice.
        </p>
        {currentMonth != null ? (
          <p className="travel-age-banner" role="status">
            Tips tailored for <strong>Month {currentMonth}</strong> (from birth date)
          </p>
        ) : (
          <div className="travel-set-dob">
            <p>Set your baby&apos;s birth date on Home to unlock age-specific travel guidance.</p>
            <button type="button" className="travel-dob-btn" onClick={onGoHome}>
              Go to Home
            </button>
          </div>
        )}
      </div>

      <div className="diy-filter-tabs travel-type-tabs">
        {TRAVEL_TYPES.map((id) => {
          const cfg = travelTypeConfig[id];
          return (
            <button
              key={id}
              type="button"
              className={`diy-filter-btn ${activeType === id ? 'active' : ''}`}
              style={
                activeType === id
                  ? { background: cfg.bg, color: cfg.color, borderColor: cfg.color }
                  : {}
              }
              onClick={() => {
                setActiveType(id);
                interact('tap', 'selection');
              }}
            >
              {cfg.icon} {cfg.label}
            </button>
          );
        })}
      </div>

      {tips && (
        <article
          className="travel-tip-card card-accent-top"
          style={{ '--cat-color': cat.color }}
        >
          <div className="travel-tip-card-header">
            <span className="travel-tip-type-icon">{tips.typeIcon}</span>
            <div>
              <h2>{tips.typeLabel}</h2>
              <p className="travel-tip-band">{tips.bandLabel}</p>
            </div>
          </div>
          {tips.sections.map((sec) => (
            <section key={sec.heading} className="travel-tip-section">
              <h3>{sec.heading}</h3>
              <ul>
                {sec.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
          <p className="travel-disclaimer-inline">
            Educational only — confirm plans with your pediatrician, especially for illness, prematurity, or long journeys.
          </p>
        </article>
      )}

      {currentMonth != null && travelGear.length > 0 && (
        <footer className="travel-gear-footer">
          <h3>Travel gear we use (Months 1–{currentMonth})</h3>
          <ul className="travel-gear-list">
            {travelGear.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          <button type="button" className="travel-shop-link" onClick={onGoShopping}>
            View all in Shopping →
          </button>
        </footer>
      )}
    </div>
  );
}

export default TravelTips;
