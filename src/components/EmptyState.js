import React from 'react';
import './EmptyState.css';

const EmptyState = ({ hasComments, searchTerm }) => {
  if (searchTerm && hasComments) {
    // Estado quando há comentários mas a busca não retornou resultados
    return (
      <div className="empty-state">
        <div className="empty-state-icon">🔍</div>
        <h3>Nenhum resultado encontrado</h3>
        <p>
          Não encontramos comentários que correspondam à sua busca por{' '}
          <strong>"{searchTerm}"</strong>
        </p>
        <div className="empty-state-suggestions">
          <h4>Dicas:</h4>
          <ul>
            <li>Verifique a ortografia</li>
            <li>Tente termos mais gerais</li>
            <li>Busque por nome, email ou parte da mensagem</li>
          </ul>
        </div>
      </div>
    );
  }

  if (!hasComments) {
    // Estado quando não há comentários
    return (
      <div className="empty-state">
        <div className="empty-state-icon">💬</div>
        <h3>Seja o primeiro a comentar!</h3>
        <p>
          Ainda não há comentários aqui. Que tal começar uma conversa interessante?
        </p>
        <div className="empty-state-features">
          <div className="feature-item">
            <span className="feature-icon">✨</span>
            <span>Interface moderna e intuitiva</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🔍</span>
            <span>Busca avançada por conteúdo</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">✏️</span>
            <span>Edição de comentários</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">💾</span>
            <span>Dados salvos automaticamente</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default EmptyState; 