import { useState } from 'react';
import { categoryConfig, SHOP_IMAGE_FALLBACK_CATEGORY } from './shopCategoryConfig';

function ShopProductImage({ item, size = 'md' }) {
  const [failed, setFailed] = useState(false);
  const catKey = item.category || SHOP_IMAGE_FALLBACK_CATEGORY;
  const cat = categoryConfig[catKey] || categoryConfig[SHOP_IMAGE_FALLBACK_CATEGORY];
  const showImage = item.image && !failed;
  const isBanner = size === 'banner';

  if (showImage) {
    return (
      <div
        className={`shop-product-thumb shop-product-thumb--${size}${isBanner ? ' shop-product-thumb--has-img' : ''}`}
        aria-hidden="true"
      >
        <img
          src={item.image}
          alt=""
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`shop-product-thumb shop-product-thumb--fallback shop-product-thumb--${size}`}
      style={{ background: cat.bg, color: cat.color }}
      aria-hidden="true"
    >
      <span className="shop-product-thumb-icon">{cat.icon}</span>
    </div>
  );
}

export default ShopProductImage;
