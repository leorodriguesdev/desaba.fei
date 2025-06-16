<a alt="README in english language" href="/README-en.md">Click here for README in english language <span>&nbsp;&nbsp;<img   height="20" width="20" alt="Repository List" src=".github/estados-unidos.png" /> ' <img   height="20" width="20" alt="Repository List" src=".github/reino-unido.png" /></span></a>

# 💬 desaba.fei - Sistema de Comentários Moderno

![React](https://img.shields.io/badge/React-17.0.2-blue.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)
![CSS3](https://img.shields.io/badge/CSS3-Modern-blue.svg)
![Responsive](https://img.shields.io/badge/Design-Responsive-green.svg)

> Um sistema de comentários moderno e interativo desenvolvido em React, com design responsivo e funcionalidades avançadas.

## ✨ Funcionalidades

### 🎯 Principais
- **💬 Sistema de Comentários Completo**: Adicionar, editar e remover comentários
- **🔍 Busca Avançada**: Pesquisa em tempo real por nome, email ou conteúdo
- **🔧 Filtros Inteligentes**: Ordenação por data (mais recentes/antigos) ou nome
- **💾 Persistência Local**: Dados salvos automaticamente no localStorage
- **📱 Design Responsivo**: Interface adaptável para todos os dispositivos

### 🚀 Funcionalidades Avançadas
- **✏️ Edição em Tempo Real**: Edite comentários existentes com validação
- **🎨 Avatares Dinâmicos**: Iniciais coloridas + imagem no hover
- **⚡ Validação Inteligente**: Validação em tempo real com feedback visual
- **🌟 Animações Suaves**: Transições e animações modernas
- **♿ Acessibilidade**: Suporte completo para leitores de tela
- **🌙 Suporte Dark Mode**: Detecção automática de preferência do sistema

### 🎨 Interface Moderna
- **Design System Consistente**: Variáveis CSS e componentes reutilizáveis
- **Gradientes e Sombras**: Visual moderno com depth e hierarquia
- **Estados Interativos**: Hover, focus e loading states
- **Feedback Visual**: Indicadores de ação e status em tempo real

## 🛠️ Tecnologias Utilizadas

- **React 17.0.2** - Biblioteca principal
- **React Hooks** - useState, useEffect, useMemo
- **date-fns** - Formatação de datas em português
- **CSS3 Moderno** - Grid, Flexbox, Custom Properties
- **LocalStorage API** - Persistência de dados
- **Responsive Design** - Mobile-first approach

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/desaba.fei.git

# Entre no diretório
cd desaba.fei

# Instale as dependências
npm install
# ou
yarn install

# Execute o projeto
npm start
# ou
yarn start
```

O projeto estará disponível em `http://localhost:3000`

### Build para Produção
```bash
npm run build
# ou
yarn build
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Comment.js          # Componente de comentário individual
│   ├── CommentForm.js      # Formulário de comentários
│   ├── SearchBar.js        # Barra de busca
│   ├── FilterBar.js        # Filtros de ordenação
│   ├── Header.js           # Cabeçalho da aplicação
│   ├── EmptyState.js       # Estados vazios
│   └── *.css              # Estilos dos componentes
├── App.js                 # Componente principal
├── App.css               # Estilos globais
└── index.js              # Ponto de entrada
```

## 🎨 Design System

### Cores Principais
- **Primary**: `#667eea` - Azul principal
- **Secondary**: `#764ba2` - Roxo secundário
- **Success**: `#48bb78` - Verde de sucesso
- **Warning**: `#ed8936` - Laranja de aviso
- **Error**: `#f56565` - Vermelho de erro

### Tipografia
- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI...)
- **Weights**: 300 (Light), 500 (Medium), 600 (Semibold), 700 (Bold)

## 📱 Responsividade

- **Desktop**: Layout em grid com sidebar
- **Tablet**: Layout em coluna única
- **Mobile**: Interface otimizada para toque

## ♿ Acessibilidade

- Navegação por teclado completa
- Labels e ARIA attributes apropriados
- Contraste adequado de cores
- Suporte a leitores de tela
- Estados de foco visíveis

## 🔧 Funcionalidades Técnicas

### Validação de Formulário
- Validação em tempo real
- Feedback visual de erros
- Contadores de caracteres
- Sanitização de dados

### Performance
- Debounce na busca (300ms)
- Memoização com useMemo
- Lazy loading de imagens
- Otimização de re-renders

### Persistência
- Salvamento automático no localStorage
- Recuperação de dados na inicialização
- Tratamento de erros de parsing

## 🎯 Casos de Uso

- **Blogs e Sites**: Sistema de comentários para artigos
- **Portfólio**: Demonstração de habilidades em React
- **Educação**: Exemplo de boas práticas de desenvolvimento
- **Base para Projetos**: Starter kit para sistemas de comentários

## 🚀 Próximas Funcionalidades

- [ ] Sistema de likes/dislikes
- [ ] Respostas aninhadas (threads)
- [ ] Moderação de comentários
- [ ] Integração com APIs externas
- [ ] Notificações em tempo real
- [ ] Suporte a markdown
- [ ] Upload de imagens
- [ ] Temas personalizáveis

## 📊 Métricas do Projeto

- **Componentes**: 6 componentes reutilizáveis
- **Linhas de Código**: ~1500 linhas
- **Arquivos CSS**: Design system completo
- **Responsividade**: 3 breakpoints principais
- **Acessibilidade**: WCAG 2.1 AA compliant

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

<div align="center">
  <img src="https://avatars.githubusercontent.com/u/74029443?s=400&u=6805c72bfdcfef209836c10e359c1312bb1619c7&v=4" width="100px;" alt="Leonardo Rodrigues"/>
  <br />
  <sub><b>Leonardo Rodrigues</b></sub>
</div>

<div align="center">
  
[![Twitter](https://img.shields.io/badge/-@leorodriguesdev-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white)](https://twitter.com/leorodriguesdev)
[![LinkedIn](https://img.shields.io/badge/-Leonardo%20Rodrigues-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/on-leorodrigues/)
[![Gmail](https://img.shields.io/badge/-lerodriguesoffice@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white)](mailto:leorodriguesoffice@gmail.com)

</div>

---

<div align="center">
  <p>Feito com ❤️ e muito ☕ por Leonardo Rodrigues</p>
  <p>⭐ Se este projeto te ajudou, considere dar uma estrela!</p>
</div>