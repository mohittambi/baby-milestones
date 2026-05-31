import { interact } from '../utils/haptics';
import { categoryConfig } from './shopCategoryConfig';
import ShopProductImage from './ShopProductImage';
import Icon from './Icon';

function ShopItemCard({ item, checked, onToggleCheck, introMonth }) {
  const cat = categoryConfig[item.category] || categoryConfig.gear;

  const handleCheck = () => {
    onToggleCheck(item.id);
    interact('tap', 'light');
  };

  return (
    <article
      className={`shop-product-card card-accent-top ${checked ? 'shop-item-checked' : ''}`}
      style={{ '--cat-color': cat.color, '--cat-bg': cat.bg }}
    >
      <div className="shop-product-media">
        <ShopProductImage item={item} size="banner" />
        <div
          className={`milestone-check shop-check shop-check-overlay ${checked ? 'checked' : ''}`}
          onClick={handleCheck}
          role="checkbox"
          aria-checked={!!checked}
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
          title={checked ? 'Purchased' : 'Mark as purchased'}
        >
          {checked && <Icon name="check" size={14} />}
        </div>
      </div>

      <div className="shop-product-content">
        <div className="shop-card-title-row">
          <span className="diy-cat-badge" style={{ background: cat.bg, color: cat.color }}>
            <Icon name={cat.icon} size={16} /> {cat.label}
          </span>
          {introMonth != null && (
            <span className="shop-intro-month">Month {introMonth}</span>
          )}
          {item.optional && <span className="shop-optional-badge">Optional</span>}
        </div>
        <h4 className="shop-product-name">{item.name}</h4>
        <p className="shop-product-why">{item.why}</p>
        <div className="shop-product-links">
          <a
            href={item.links.firstcry}
            target="_blank"
            rel="noopener noreferrer"
            className="shop-link shop-link-firstcry"
            onClick={() => interact('tap', 'selection')}
          >
            FirstCry ↗
          </a>
          <a
            href={item.links.amazon}
            target="_blank"
            rel="noopener noreferrer"
            className="shop-link shop-link-amazon"
            onClick={() => interact('tap', 'selection')}
          >
            Amazon ↗
          </a>
        </div>
      </div>
    </article>
  );
}

export default ShopItemCard;
export { categoryConfig } from './shopCategoryConfig';
