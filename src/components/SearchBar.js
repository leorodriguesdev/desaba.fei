import React, { useState, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  const [isFocused, setIsFocused] = useState(false);

  // Debounce da busca para melhor performance
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearchChange(localSearchTerm);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [localSearchTerm, onSearchChange]);

  const handleClear = () => {
    setLocalSearchTerm('');
    onSearchChange('');
  };

  return (
    <div className={`search-bar ${isFocused ? 'focused' : ''}`}>
      <div className="search-input-container">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Buscar por nome, email ou mensagem..."
          value={localSearchTerm}
          onChange={(e) => setLocalSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="search-input"
        />
        {localSearchTerm && (
          <button
            type="button"
            className="clear-search-btn"
            onClick={handleClear}
            title="Limpar busca"
          >
            ✕
          </button>
        )}
      </div>
      
      {localSearchTerm && (
        <div className="search-info">
          Buscando por: <strong>"{localSearchTerm}"</strong>
        </div>
      )}
    </div>
  );
};

export default SearchBar; 