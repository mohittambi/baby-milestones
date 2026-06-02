import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  momMilestonePeriods,
  MOM_MILESTONES_DISCLAIMER,
} from '../data/momMilestones';
import { momCareCategoryConfig } from '../data/momCareTips';
import {
  formatPostpartumAge,
  getDefaultMomMilestonePeriodId,
  isCurrentPeriod,
} from '../utils/momMilestones';
import { interact } from '../utils/haptics';
import { ROUTES } from '../routes';
import Icon from './Icon';

function MomMilestonesPanel({ birthDate }) {
  const navigate = useNavigate();
  const ageLabel = formatPostpartumAge(birthDate);
  const defaultPeriodId = useMemo(
    () => getDefaultMomMilestonePeriodId(birthDate),
    [birthDate]
  );
  const [selectedPeriodId, setSelectedPeriodId] = useState(defaultPeriodId);

  useEffect(() => {
    setSelectedPeriodId(defaultPeriodId);
  }, [defaultPeriodId]);

  const selectedPeriod = momMilestonePeriods.find((p) => p.id === selectedPeriodId)
    ?? momMilestonePeriods[0];

  const goToTopic = (topicId) => {
    if (!topicId) return;
    interact('tap', 'selection');
    navigate({ pathname: ROUTES.momCare, hash: topicId });
  };

  const selectPeriod = (id) => {
    interact('tap', 'selection');
    setSelectedPeriodId(id);
  };

  const timelineCat = momCareCategoryConfig.timeline;
  const topic = selectedPeriod?.relatedTopic
    ? momCareCategoryConfig[selectedPeriod.relatedTopic]
    : null;
  const showJumpToNow = birthDate
    && defaultPeriodId
    && selectedPeriodId !== defaultPeriodId;

  return (
    <article
      id="mom-care-panel-timeline"
      role="tabpanel"
      aria-labelledby="mom-care-tab-timeline"
      className="mom-milestones-panel card-accent-top"
      style={{ '--cat-color': timelineCat.color }}
    >
      <div className="mom-milestones-hero">
        {birthDate && ageLabel ? (
          <p className="mom-milestones-age">You are {ageLabel}</p>
        ) : (
          <p className="mom-milestones-birth-banner">
            Set baby birth date on <a href={ROUTES.home}>Home</a> to personalize your timeline.
          </p>
        )}
      </div>

      <div className="mom-milestones-layout">
        <nav className="mom-milestones-ranges" aria-label="Postpartum week and month ranges">
          {momMilestonePeriods.map((period) => {
            const current = isCurrentPeriod(period, birthDate);
            const active = period.id === selectedPeriodId;
            return (
              <button
                key={period.id}
                type="button"
                className={`mom-milestones-range-btn${active ? ' active' : ''}${current ? ' is-current' : ''}`}
                aria-current={active ? 'true' : undefined}
                onClick={() => selectPeriod(period.id)}
              >
                <span className="mom-milestones-range-label">{period.label}</span>
                {current && <span className="mom-milestones-range-now">Now</span>}
              </button>
            );
          })}
        </nav>

        {selectedPeriod && (
          <section
            className="mom-milestones-detail"
            aria-labelledby={`mom-period-${selectedPeriod.id}`}
          >
            <header className="mom-milestones-detail-header" id={`mom-period-${selectedPeriod.id}`}>
              <div className="mom-milestones-detail-top">
                <span className="mom-milestones-period-label">{selectedPeriod.label}</span>
                {showJumpToNow && (
                  <button
                    type="button"
                    className="mom-milestones-jump-now"
                    onClick={() => selectPeriod(defaultPeriodId)}
                  >
                    Jump to now
                  </button>
                )}
              </div>
              <h2>{selectedPeriod.title}</h2>
              <p className="mom-milestones-period-summary">{selectedPeriod.summary}</p>
            </header>

            <div className="mom-milestones-detail-grid">
              <ul className="mom-milestones-list">
                {selectedPeriod.items.map((item) => (
                  <li key={item.id} className="mom-milestones-list-item">
                    <p className="mom-milestones-list-text">{item.text}</p>
                    {item.tip && (
                      <p className="mom-milestones-list-tip">
                        <Icon name="light-bulb" size={14} /> {item.tip}
                      </p>
                    )}
                  </li>
                ))}
              </ul>

              <aside className="mom-milestones-aside">
                {selectedPeriod.watchFor?.length > 0 && (
                  <div className="mom-milestones-watch">
                    <h3><Icon name="warning" size={16} /> Watch for</h3>
                    <ul>
                      {selectedPeriod.watchFor.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {topic && selectedPeriod.relatedTopic && (
                  <button
                    type="button"
                    className="mom-milestones-learn content-card-cta secondary"
                    onClick={() => goToTopic(selectedPeriod.relatedTopic)}
                  >
                    Learn more: {topic.label} →
                  </button>
                )}
              </aside>
            </div>
          </section>
        )}
      </div>

      <p className="mom-care-disclaimer-inline">{MOM_MILESTONES_DISCLAIMER}</p>
    </article>
  );
}

export default MomMilestonesPanel;
