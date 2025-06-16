import React, { useState, useEffect } from 'react';
import './CommentForm.css';

const CommentForm = ({ onAddComment, editingComment, onUpdateComment, onCancelEdit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Preencher formulário quando estiver editando
  useEffect(() => {
    if (editingComment) {
      setFormData({
        name: editingComment.name,
        email: editingComment.email,
        message: editingComment.message
      });
      setErrors({});
    }
  }, [editingComment]);

  // Validação em tempo real
  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = 'Nome é obrigatório';
        } else if (value.trim().length < 2) {
          newErrors.name = 'Nome deve ter pelo menos 2 caracteres';
        } else if (value.trim().length > 50) {
          newErrors.name = 'Nome deve ter no máximo 50 caracteres';
        } else {
          delete newErrors.name;
        }
        break;

      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          newErrors.email = 'Email é obrigatório';
        } else if (!emailRegex.test(value)) {
          newErrors.email = 'Email inválido';
        } else {
          delete newErrors.email;
        }
        break;

      case 'message':
        if (!value.trim()) {
          newErrors.message = 'Mensagem é obrigatória';
        } else if (value.trim().length < 10) {
          newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
        } else if (value.trim().length > 500) {
          newErrors.message = 'Mensagem deve ter no máximo 500 caracteres';
        } else {
          delete newErrors.message;
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validação em tempo real após o usuário parar de digitar
    setTimeout(() => validateField(name, value), 300);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validar todos os campos
    const isNameValid = validateField('name', formData.name);
    const isEmailValid = validateField('email', formData.email);
    const isMessageValid = validateField('message', formData.message);

    if (isNameValid && isEmailValid && isMessageValid) {
      try {
        if (editingComment) {
          await onUpdateComment(editingComment.id, {
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim()
          });
        } else {
          await onAddComment({
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim()
          });
        }

        // Limpar formulário apenas se não estiver editando
        if (!editingComment) {
          setFormData({ name: '', email: '', message: '' });
        }
        setErrors({});
      } catch (error) {
        console.error('Erro ao salvar comentário:', error);
      }
    }

    setIsSubmitting(false);
  };

  const handleCancel = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    onCancelEdit();
  };

  const isFormValid = Object.keys(errors).length === 0 && 
                     formData.name.trim() && 
                     formData.email.trim() && 
                     formData.message.trim();

  return (
    <div className="comment-form-container">
      <div className="form-header">
        <h2>
          {editingComment ? '✏️ Editar Comentário' : '💬 Novo Comentário'}
        </h2>
        {editingComment && (
          <button 
            type="button" 
            className="cancel-edit-btn"
            onClick={handleCancel}
          >
            ✕
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="comment-form">
        <div className="form-group">
          <label htmlFor="name">Nome *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={errors.name ? 'error' : ''}
            placeholder="Seu nome completo"
            maxLength="50"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
          <div className="char-count">
            {formData.name.length}/50
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? 'error' : ''}
            placeholder="seu@email.com"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensagem *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className={errors.message ? 'error' : ''}
            placeholder="Escreva seu comentário aqui..."
            rows="4"
            maxLength="500"
          />
          {errors.message && <span className="error-message">{errors.message}</span>}
          <div className="char-count">
            {formData.message.length}/500
          </div>
        </div>

        <div className="form-actions">
          {editingComment && (
            <button
              type="button"
              className="btn-secondary"
              onClick={handleCancel}
            >
              Cancelar
            </button>
          )}
          <button
            type="submit"
            className="btn-primary"
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner-small"></span>
                {editingComment ? 'Salvando...' : 'Publicando...'}
              </>
            ) : (
              editingComment ? '💾 Salvar Alterações' : '🚀 Publicar Comentário'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm; 