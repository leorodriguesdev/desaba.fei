import React, { useState } from 'react';
import './Comment.css';
import imageUser from './user.png';
import { formatRelative, isValid, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const Comment = ({ comment, onRemove, onEdit, isEditing }) => {
  const [showActions, setShowActions] = useState(false);
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

  const getRandomColor = (name) => {
    const colors = [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
      '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
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
    <div 
      className={`comment ${isEditing ? 'editing' : ''} ${isRemoving ? 'removing' : ''}`}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="comment-avatar">
        <div 
          className="avatar-circle"
          style={{ backgroundColor: getRandomColor(comment.name) }}
        >
          {getInitials(comment.name)}
        </div>
        <img 
          className="avatar-image" 
          src={imageUser} 
          alt={`Avatar de ${comment.name}`}
          loading="lazy"
        />
      </div>

      <div className="comment-content">
        <div className="comment-header">
          <div className="comment-author">
            <h3 className="author-name">{comment.name}</h3>
            <a 
              href={`mailto:${comment.email}`} 
              className="author-email"
              title={`Enviar email para ${comment.name}`}
            >
              {comment.email}
            </a>
          </div>
          
          <div className={`comment-actions ${showActions ? 'visible' : ''}`}>
            <button
              className="action-btn edit-btn"
              onClick={onEdit}
              title="Editar comentário"
              disabled={isRemoving}
            >
              ✏️
            </button>
            <button
              className="action-btn remove-btn"
              onClick={handleRemove}
              title="Remover comentário"
              disabled={isRemoving}
            >
              {isRemoving ? '⏳' : '🗑️'}
            </button>
          </div>
        </div>

        <div className="comment-message">
          {comment.message}
        </div>

        <div className="comment-footer">
          <div className="comment-date">
            <span className="date-icon">🕐</span>
            {formatDateSafely(comment.data)}
            {comment.editedAt && (
              <span className="edited-indicator" title={`Editado ${formatDateSafely(comment.editedAt)}`}>
                • editado
              </span>
            )}
          </div>
        </div>
      </div>

      {isEditing && (
        <div className="editing-indicator">
          <span className="editing-pulse"></span>
          Editando...
        </div>
      )}
    </div>
  );
};

export default Comment;