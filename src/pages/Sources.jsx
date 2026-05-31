import { useState } from 'react';
import sources from '../data/sources';
import { interact } from '../utils/haptics';

function Sources() {
  const [activeTab, setActiveTab] = useState('global');
  const [expandedSource, setExpandedSource] = useState(null);
  const [expandedCitation, setExpandedCitation] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setExpandedSource(null);
    interact('tap', 'selection');
  };

  const toggleSource = (id) => {
    setExpandedSource(expandedSource === id ? null : id);
    interact('tap', 'light');
  };

  const toggleCitation = (idx) => {
    setExpandedCitation(expandedCitation === idx ? null : idx);
    interact('tap', 'light');
  };

  const currentSources = activeTab === 'global' ? sources.global :
    activeTab === 'indian' ? sources.indian : null;

  return (
    <div className="sources-page fade-in">
      <div className="sources-hero">
        <div className="sources-hero-icon">📚</div>
        <h1>Medical Sources & Citations</h1>
        <p>All milestones in this app are based on evidence from these globally and nationally recognized medical authorities.</p>
      </div>

      <div className="sources-tabs">
        <button className={activeTab === 'global' ? 'active' : ''} onClick={() => handleTabChange('global')}>
          🌍 Global Sources
        </button>
        <button className={activeTab === 'indian' ? 'active' : ''} onClick={() => handleTabChange('indian')}>
          🇮🇳 Indian Sources
        </button>
        <button className={activeTab === 'tools' ? 'active' : ''} onClick={() => handleTabChange('tools')}>
          📋 Screening Tools
        </button>
        <button className={activeTab === 'citations' ? 'active' : ''} onClick={() => handleTabChange('citations')}>
          🔗 Milestone Citations
        </button>
      </div>

      {currentSources && (
        <div className="sources-list">
          {currentSources.map((source) => (
            <div
              key={source.id}
              className={`source-card ${expandedSource === source.id ? 'expanded' : ''}`}
              onClick={() => toggleSource(source.id)}
            >
              <div className="source-card-header">
                <div className="source-icon-wrap" style={{ background: source.color + '20', color: source.color }}>
                  <span>{source.icon}</span>
                </div>
                <div className="source-info">
                  <h3>{source.name}</h3>
                  <span className="source-type">{source.type}</span>
                </div>
                <span className={`expand-arrow ${expandedSource === source.id ? 'open' : ''}`}>▾</span>
              </div>

              {expandedSource === source.id && (
                <div className="source-details fade-in">
                  <p className="source-desc">{source.description}</p>

                  <div className="source-pubs">
                    <h4>Key Publications & Guidelines</h4>
                    <ul>
                      {source.publications.map((pub, i) => (
                        <li key={i}>{pub}</li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="source-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit Official Website →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {activeTab === 'tools' && (
        <div className="tools-list">
          {sources.screeningTools.map((tool, i) => (
            <div key={i} className="tool-card">
              <div className="tool-header">
                <h3>{tool.name}</h3>
                <span className="tool-age">{tool.ageRange}</span>
              </div>
              <span className="tool-origin">{tool.origin}</span>
              <p>{tool.description}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'citations' && (
        <div className="citations-section">
          <div className="citation-group">
            <h2>💪 Physical Milestone Citations</h2>
            {sources.citations.physical.map((cite, i) => (
              <div
                key={i}
                className={`citation-card ${expandedCitation === `p${i}` ? 'expanded' : ''}`}
                onClick={() => toggleCitation(`p${i}`)}
              >
                <div className="citation-header">
                  <h4>{cite.milestone}</h4>
                  <span className={`expand-arrow ${expandedCitation === `p${i}` ? 'open' : ''}`}>▾</span>
                </div>
                {expandedCitation === `p${i}` && (
                  <div className="citation-details fade-in">
                    <div className="citation-sources">
                      <strong>Sources:</strong>
                      <ul>
                        {cite.sources.map((s, j) => <li key={j}>{s}</li>)}
                      </ul>
                    </div>
                    <div className="citation-note">
                      <strong>Clinical Note:</strong> {cite.note}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="citation-group">
            <h2>🧠 Emotional & Cognitive Citations</h2>
            {sources.citations.emotional.map((cite, i) => (
              <div
                key={i}
                className={`citation-card ${expandedCitation === `e${i}` ? 'expanded' : ''}`}
                onClick={() => toggleCitation(`e${i}`)}
              >
                <div className="citation-header">
                  <h4>{cite.milestone}</h4>
                  <span className={`expand-arrow ${expandedCitation === `e${i}` ? 'open' : ''}`}>▾</span>
                </div>
                {expandedCitation === `e${i}` && (
                  <div className="citation-details fade-in">
                    <div className="citation-sources">
                      <strong>Sources:</strong>
                      <ul>
                        {cite.sources.map((s, j) => <li key={j}>{s}</li>)}
                      </ul>
                    </div>
                    <div className="citation-note">
                      <strong>Clinical Note:</strong> {cite.note}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="disclaimer-section">
        <div className="disclaimer-icon">⚕️</div>
        <h3>Medical Disclaimer</h3>
        <p>{sources.disclaimer}</p>
      </div>
    </div>
  );
}

export default Sources;
