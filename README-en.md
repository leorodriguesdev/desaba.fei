<a alt="README em português" href="/README.md">Clique aqui para o README em português <span>&nbsp;&nbsp;<img height="20" width="20" alt="Brazil Flag" src=".github/brasil.png" /></span></a>

# 💬 desaba.fei - Modern Comment System

![React](https://img.shields.io/badge/React-17.0.2-blue.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)
![CSS3](https://img.shields.io/badge/CSS3-Modern-blue.svg)
![Responsive](https://img.shields.io/badge/Design-Responsive-green.svg)

> A modern and interactive comment system built with React, featuring responsive design and advanced functionalities.

## ✨ Features

### 🎯 Core Features
- **💬 Complete Comment System**: Add, edit, and remove comments
- **🔍 Advanced Search**: Real-time search by name, email, or content
- **🔧 Smart Filters**: Sort by date (newest/oldest) or name
- **💾 Local Persistence**: Data automatically saved to localStorage
- **📱 Responsive Design**: Interface adapts to all devices

### 🚀 Advanced Features
- **✏️ Real-time Editing**: Edit existing comments with validation
- **🎨 Dynamic Avatars**: Colored initials + image on hover
- **⚡ Smart Validation**: Real-time validation with visual feedback
- **🌟 Smooth Animations**: Modern transitions and animations
- **♿ Accessibility**: Full screen reader support
- **🌙 Dark Mode Support**: Automatic system preference detection

### 🎨 Modern Interface
- **Consistent Design System**: CSS variables and reusable components
- **Modern Color Palette**: Sophisticated indigo, violet, and purple gradients
- **Advanced Shadows**: Multi-layered shadows with colored variants
- **Interactive States**: Hover, focus, and loading states with smooth transitions
- **Visual Feedback**: Real-time action and status indicators
- **Shimmer Effects**: Subtle animation effects on user interactions

## 🛠️ Technologies Used

- **React 17.0.2** - Main library
- **React Hooks** - useState, useEffect, useMemo
- **date-fns** - Date formatting with Portuguese locale
- **Modern CSS3** - Grid, Flexbox, Custom Properties
- **LocalStorage API** - Data persistence
- **Responsive Design** - Mobile-first approach

## 🚀 How to Run

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/desaba.fei.git

# Enter the directory
cd desaba.fei

# Install dependencies
npm install
# or
yarn install

# Run the project
npm start
# or
yarn start
```

The project will be available at `http://localhost:3000`

### Production Build
```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Comment.js          # Individual comment component
│   ├── CommentForm.js      # Comment form
│   ├── SearchBar.js        # Search bar
│   ├── FilterBar.js        # Sort filters
│   ├── Header.js           # Application header
│   ├── EmptyState.js       # Empty states
│   └── *.css              # Component styles
├── App.js                 # Main component
├── App.css               # Global styles
└── index.js              # Entry point
```

## 🎨 Design System

### Main Colors
- **Primary**: `#6366f1` - Modern indigo
- **Primary Dark**: `#4f46e5` - Dark indigo
- **Primary Light**: `#8b5cf6` - Violet
- **Secondary**: `#a855f7` - Vibrant purple
- **Accent**: `#ec4899` - Magenta pink

### Status Colors
- **Success**: `#10b981` - Emerald green
- **Success Light**: `#34d399` - Light emerald
- **Warning**: `#f59e0b` - Amber
- **Warning Light**: `#fbbf24` - Light amber
- **Error**: `#ef4444` - Coral red
- **Error Light**: `#f87171` - Light coral
- **Info**: `#3b82f6` - Blue
- **Info Light**: `#60a5fa` - Light blue

### Modern Gray Scale
- **Text Primary**: `#1f2937` - Dark gray
- **Text Secondary**: `#374151` - Medium gray
- **Text Muted**: `#6b7280` - Light gray
- **Backgrounds**: From `#ffffff` to `#f3f4f6`

### Gradients
- **Primary Gradient**: Linear gradient from indigo to violet to purple
- **Secondary Gradient**: Linear gradient from magenta to orange
- **Success Gradient**: Linear gradient from emerald to light emerald

### Typography
- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI...)
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extra Bold)

## 📱 Responsiveness

- **Desktop**: Grid layout with sidebar
- **Tablet**: Single column layout
- **Mobile**: Touch-optimized interface

## ♿ Accessibility

- Complete keyboard navigation
- Proper labels and ARIA attributes
- Adequate color contrast
- Screen reader support
- Visible focus states

## 🔧 Technical Features

### Form Validation
- Real-time validation
- Visual error feedback
- Character counters
- Data sanitization

### Performance
- Search debounce (300ms)
- Memoization with useMemo
- Lazy image loading
- Re-render optimization

### Persistence
- Automatic localStorage saving
- Data recovery on initialization
- Robust parsing error handling
- Safe date validation and formatting
- Fallback mechanisms for corrupted data

## 🎯 Use Cases

- **Blogs and Websites**: Comment system for articles
- **Portfolio**: Demonstration of React skills
- **Education**: Example of development best practices
- **Project Base**: Starter kit for comment systems

## 🚀 Upcoming Features

- [ ] Like/dislike system
- [ ] Nested replies (threads)
- [ ] Comment moderation
- [ ] External API integration
- [ ] Real-time notifications
- [ ] Markdown support
- [ ] Image upload
- [ ] Customizable themes

## 📊 Project Metrics

- **Components**: 6 reusable components
- **Lines of Code**: ~1500 lines
- **CSS Files**: Complete design system
- **Responsiveness**: 3 main breakpoints
- **Accessibility**: WCAG 2.1 AA compliant

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

## 👨‍💻 Author

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
  <p>Made with ❤️ and lots of ☕ by Leonardo Rodrigues</p>
</div>