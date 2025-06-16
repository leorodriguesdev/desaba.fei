import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import Comment from './components/Comment';
import CommentForm from './components/CommentForm';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import Header from './components/Header';
import EmptyState from './components/EmptyState';

function App() {
  const [comments, setComments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [editingComment, setEditingComment] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Carregar comentários do localStorage na inicialização
  useEffect(() => {
    const savedComments = localStorage.getItem('desaba-fei-comments');
    if (savedComments) {
      try {
        const parsedComments = JSON.parse(savedComments);
        // Converter strings de data de volta para objetos Date com validação
        const commentsWithDates = parsedComments.map(comment => {
          let commentDate = new Date();
          let editedDate = null;
          
          // Validar e converter data principal
          if (comment.data) {
            const parsedDate = new Date(comment.data);
            if (!isNaN(parsedDate.getTime())) {
              commentDate = parsedDate;
            }
          }
          
          // Validar e converter data de edição se existir
          if (comment.editedAt) {
            const parsedEditedDate = new Date(comment.editedAt);
            if (!isNaN(parsedEditedDate.getTime())) {
              editedDate = parsedEditedDate;
            }
          }
          
          return {
            ...comment,
            data: commentDate,
            editedAt: editedDate,
            id: comment.id || Date.now() + Math.random() // Garantir que todos tenham ID
          };
        });
        setComments(commentsWithDates);
      } catch (error) {
        console.error('Erro ao carregar comentários:', error);
        setComments(getInitialComments());
      }
    } else {
      setComments(getInitialComments());
    }
    setIsLoading(false);
  }, []);

  // Salvar comentários no localStorage sempre que mudarem
  useEffect(() => {
    if (!isLoading && comments.length > 0) {
      localStorage.setItem('desaba-fei-comments', JSON.stringify(comments));
    }
  }, [comments, isLoading]);

  // Comentários iniciais
  const getInitialComments = () => [
    {
      id: 1,
      name: 'Darth Vader',
      email: 'estreladamorte@empire.com',
      data: new Date(2024, 0, 15, 14, 30),
      message: 'Ei Luke, você não sabe o poder do lado sombrio da Força!'
    },
    {
      id: 2,
      name: 'Luke Skywalker',
      email: 'mileniumfalcon12@rebellion.com',
      data: new Date(2024, 0, 15, 15, 45),
      message: 'Nunca me juntarei ao lado sombrio! A Força está comigo.'
    },
    {
      id: 3,
      name: 'Darth Vader',
      email: 'estreladamorte@empire.com',
      data: new Date(2024, 0, 15, 16, 20),
      message: 'Luke... eu sou seu pai. 🤖'
    },
    {
      id: 4,
      name: 'Princess Leia',
      email: 'leia@rebellion.com',
      data: new Date(2024, 0, 16, 9, 15),
      message: 'Help me, Obi-Wan Kenobi. You\'re my only hope! ✨'
    }
  ];

  // Adicionar novo comentário
  const addComment = (newCommentData) => {
    const newComment = {
      ...newCommentData,
      id: Date.now() + Math.random(),
      data: new Date()
    };
    
    setComments(prevComments => [newComment, ...prevComments]);
  };

  // Remover comentário
  const removeComment = (commentId) => {
    setComments(prevComments => 
      prevComments.filter(comment => comment.id !== commentId)
    );
  };

  // Editar comentário
  const updateComment = (commentId, updatedData) => {
    setComments(prevComments =>
      prevComments.map(comment =>
        comment.id === commentId
          ? { ...comment, ...updatedData, editedAt: new Date() }
          : comment
      )
    );
    setEditingComment(null);
  };

  // Filtrar e ordenar comentários
  const filteredAndSortedComments = useMemo(() => {
    let filtered = comments.filter(comment =>
      comment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Ordenar comentários
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'oldest':
          return new Date(a.data) - new Date(b.data);
        case 'name':
          return a.name.localeCompare(b.name);
        case 'newest':
        default:
          return new Date(b.data) - new Date(a.data);
      }
    });

    return filtered;
  }, [comments, searchTerm, sortBy]);

  // Limpar todos os comentários
  const clearAllComments = () => {
    if (window.confirm('Tem certeza que deseja remover todos os comentários?')) {
      setComments([]);
      localStorage.removeItem('desaba-fei-comments');
    }
  };

  if (isLoading) {
    return (
      <div className="App">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Carregando comentários...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Header 
        totalComments={comments.length}
        onClearAll={clearAllComments}
      />
      
      <div className="app-content">
        <div className="sidebar">
          <CommentForm 
            onAddComment={addComment}
            editingComment={editingComment}
            onUpdateComment={updateComment}
            onCancelEdit={() => setEditingComment(null)}
          />
        </div>
        
        <div className="main-content">
          <div className="controls">
            <SearchBar 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
            <FilterBar 
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          </div>

          <div className="comments-section">
            {filteredAndSortedComments.length === 0 ? (
              <EmptyState 
                hasComments={comments.length > 0}
                searchTerm={searchTerm}
              />
            ) : (
              <div className="comments-list">
                {filteredAndSortedComments.map((comment) => (
                  <Comment
                    key={comment.id}
                    comment={comment}
                    onRemove={() => removeComment(comment.id)}
                    onEdit={() => setEditingComment(comment)}
                    isEditing={editingComment?.id === comment.id}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
