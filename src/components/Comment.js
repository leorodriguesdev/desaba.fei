import React, { useState } from 'react';
import './Comment.css';
import { formatRelative, isValid, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const Comment = ({ comment, onRemove, onEdit, isEditing }) => {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = async () => {
    if (window.confirm('Tem certeza que deseja remover este comentário?')) {
      setIsRemoving(true);
      try {
        await onRemove();
      } catch (error) {
        console.error('Erro ao remover comentário:', error);
        setIsRemoving(false);
      }
    }
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Função para formatar data de forma segura
  const formatDateSafely = (dateValue) => {
    try {
      let date = dateValue;
      
      // Se for string, tentar converter
      if (typeof dateValue === 'string') {
        date = parseISO(dateValue);
      }
      
      // Se não for um objeto Date válido, criar uma nova data
      if (!date || !isValid(date)) {
        date = new Date();
      }
      
      return formatRelative(date, new Date(), { locale: ptBR });
    } catch (error) {
      console.error('Erro ao formatar data:', error);
      return 'há alguns momentos';
    }
  };

  return (
    <div className={`comment ${isEditing ? 'editing' : ''} ${isRemoving ? 'removing' : ''}`}>
      {isEditing && (
        <div className="editing-indicator">
          Editando...
        </div>
      )}

      <div className="comment-header">
        <div className="comment-author-info">
          <div className="comment-avatar">
            <span>{getInitials(comment.name)}</span>
          </div>
          <div className="comment-author-details">
            <h4>{comment.name}</h4>
            <p>{comment.email}</p>
          </div>
        </div>
        
        <div className="comment-date">
          {formatDateSafely(comment.data)}
          {comment.editedAt && (
            <span className="edited-indicator" title={`Editado ${formatDateSafely(comment.editedAt)}`}>
              • editado
            </span>
          )}
        </div>
      </div>

      <div className="comment-content">
        <div className="comment-message">
          {comment.message}
        </div>
      </div>

      <div className="comment-actions">
        <button
          className="edit-btn"
          onClick={onEdit}
          title="Editar comentário"
          disabled={isRemoving}
        >
          <span>✏️</span>
          <span>Editar</span>
        </button>
        <button
          className="delete-btn"
          onClick={handleRemove}
          title="Remover comentário"
          disabled={isRemoving}
        >
          <span>{isRemoving ? '⏳' : '🗑️'}</span>
          <span>{isRemoving ? 'Removendo...' : 'Remover'}</span>
        </button>
      </div>
    </div>
  );
};

export default Comment;