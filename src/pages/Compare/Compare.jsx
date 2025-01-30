import React from 'react';
import { useCompare } from '../../context/CompareContext';
import { useNavigate } from 'react-router-dom';
import './Compare.css';

export const Compare = () => {
  const { compareItems, removeFromCompare, clearCompare } = useCompare();
  const navigate = useNavigate();

  if (compareItems.length === 0) {
    return (
      <div className="compare-empty">
        <h2>No products to compare</h2>
        <button 
          className="btn-primary" 
          onClick={() => navigate('/products')}
        >
          Browse Products
        </button>
      </div>
    );
  }

  const allFeatures = compareItems.reduce((features, product) => {
    Object.keys(product).forEach(key => {
      if (!features.includes(key) && 
          !['_id', 'image', 'images'].includes(key)) {
        features.push(key);
      }
    });
    return features;
  }, []);

  return (
    <div className="compare-container">
      <div className="compare-header">
        <h2>Compare Products</h2>
        <button 
          className="btn-secondary" 
          onClick={clearCompare}
        >
          Clear All
        </button>
      </div>

      <div className="compare-grid">
        <div className="compare-features">
          <div className="feature-cell header-cell">Features</div>
          {allFeatures.map(feature => (
            <div key={feature} className="feature-cell">
              {feature.charAt(0).toUpperCase() + feature.slice(1)}
            </div>
          ))}
        </div>

        {compareItems.map(product => (
          <div key={product._id} className="product-column">
            <div className="header-cell">
              <img 
                src={product.image} 
                alt={product.name} 
                className="product-image"
              />
              <h3>{product.name}</h3>
              <button
                className="btn-icon"
                onClick={() => removeFromCompare(product._id)}
              >
                ✕
              </button>
            </div>

            {allFeatures.map(feature => (
              <div key={feature} className="feature-cell">
                {product[feature]?.toString() || '-'}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
