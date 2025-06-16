import React from 'react';
import './FilterBar.css';

const FilterBar = ({ sortBy, onSortChange }) => {
  const sortOptions = [
    { value: 'newest', label: '🕐 Mais Recentes', icon: '⬇️' },
    { value: 'oldest', label: '🕐 Mais Antigos', icon: '⬆️' },
    { value: 'name', label: '👤 Por Nome', icon: '🔤' }
  ];

  return (
    <div className="filter-bar">
      <div className="filter-label">
        <span className="filter-icon">🔧</span>
        Ordenar por:
      </div>
      
      <div className="filter-options">
        {sortOptions.map((option) => (
          <button
            key={option.value}
            className={`filter-option ${sortBy === option.value ? 'active' : ''}`}
            onClick={() => onSortChange(option.value)}
            title={option.label}
          >
            <span className="option-icon">{option.icon}</span>
            <span className="option-label">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar; 