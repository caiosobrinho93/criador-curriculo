import { useState } from 'react';
import type { DesignId } from './DesignTemplates';
import { designInfo } from './DesignTemplates';
import { Check, Crown } from 'lucide-react';
import './DesignSelector.css';

interface Props {
  selected: DesignId;
  onSelect: (id: DesignId) => void;
}

const freeDesigns = designInfo.filter(d => !d.id.startsWith('premium-'));
const premiumDesigns = designInfo.filter(d => d.id.startsWith('premium-'));

export function DesignSelector({ selected, onSelect }: Props) {
  const [showPremium, setShowPremium] = useState(false);

  const designs = showPremium ? premiumDesigns : freeDesigns;

  return (
    <div className="design-selector">
      <div className="design-tabs">
        <button 
          className={`tab-btn ${!showPremium ? 'active' : ''}`}
          onClick={() => setShowPremium(false)}
        >
          Modelos Grátis
        </button>
        <button 
          className={`tab-btn premium-tab ${showPremium ? 'active' : ''}`}
          onClick={() => setShowPremium(true)}
        >
          <Crown size={14} />
          Premium Master
        </button>
      </div>
      
      <p className="design-subtitle">
        {showPremium ? '3 modelos exclusivos premium' : '24 modelos gratuitos'}
      </p>
      
      <div className="design-grid">
        {designs.map((d) => (
          <div
            key={d.id}
            className={`design-card ${selected === d.id ? 'selected' : ''} ${d.id.startsWith('premium-') ? 'premium-card' : ''}`}
            onClick={() => onSelect(d.id)}
          >
            <div 
              className="design-thumbnail"
              style={{ 
                background: d.colors.length === 2 
                  ? `linear-gradient(135deg, ${d.colors[0]} 0%, ${d.colors[1]} 100%)`
                  : d.colors[0]
              }}
            >
              <div className="thumbnail-preview">
                <div className="preview-line" style={{ width: '60%' }}></div>
                <div className="preview-line" style={{ width: '40%' }}></div>
                <div className="preview-line" style={{ width: '80%' }}></div>
                <div className="preview-block"></div>
              </div>
            </div>
            <div className="design-card-info">
              <span className="design-name">{d.name}</span>
            </div>
            {selected === d.id && <div className="selected-check"><Check size={16} /></div>}
          </div>
        ))}
      </div>
    </div>
  );
}