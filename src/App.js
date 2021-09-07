import React, {Component} from 'react';
import './App.css';

import Comment from './components/Comment'

class App extends Component {

  state = {
    comments: [
      {
        name: 'Dart',
        email: 'estreladamorte@mail.com',
        data: new Date(2020, 3, 19),
        message: 'Ei Luke'
      },
      {
        name: 'Luke',
        email: 'mileniumfalcon12@mail.com',
        data: new Date(2020, 3, 19),
        message: 'Qualé'
      },{
        name: 'Dart',
        email: 'estreladamorte@mail.com',
        data: new Date(2020, 3, 19),
        message: 'Eu sou seu pai'
      }
    ],
    newComment: {
      name:'',
      email:'',
      message: ''
    }
  }

  addComment = event => {
    event.preventDefault();
    const newComment = {...this.state.newComment, data: new Date()}
      this.setState({
        comments: [...this.state.comments, newComment],
        newComment: {name:'', email:'', message: ''}
      }) 
  }

  removeComment = comment => {
    let list = this.state.comments;
    list = list.filter(c => c !== comment)
    this.setState({ comments: list})
  }

  typingForm = event => {
    const {name, value} = event.target;
    this.setState({ newComment: {...this.state.newComment, [name]: value}})
  }

  render() {
    return (
      <div className="App">
      <h1> desaba.fei </h1>
      {this.state.comments.map((comment, indice) => (
        <Comment 
          key={indice}
          name={comment.name}
          email={comment.email}
          data={comment.data}
          onRemove={this.removeComment.bind(this, comment)}>
          {comment.message}
        </Comment>
      ))}

      <form method="post" onSubmit={this.addComment} className="New-Comment">
        <h2>Adicionar comentário</h2>
       <div>
         <input 
         type="text" 
         name="name" 
         value={this.state.newComment.name}
         onChange={this.typingForm}
         required
         placeholder="Digite seu nome" />
       </div>  
       <div>
         <input 
         type="email" 
         name="email" 
         value={this.state.newComment.email}
         onChange={this.typingForm}
         required
         placeholder="Digite seu email" />
       </div>  
       <div>
         <textarea 
         name="message" 
         value={this.state.newComment.message}
         onChange={this.typingForm}
         required
         rows="4"/>
       </div>  
       <button 
       type="submit"> 
       Adicionar comentário
       </button>
      </form>
      </div>
    );
  }
}

export default App;
