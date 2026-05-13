# LARPS.dk - Heimdal Portal

**Guardian of LARP Realms** - Free hosting platform for LARP communities worldwide.

This project is built with Angular 20.2 and provides a modern, responsive web application for connecting LARP organizers with their communities. The site features comprehensive project showcases, contact forms, and multilingual support (English/Danish).

## 🏗️ Project Status

This Angular application replaces the previous Next.js version, providing standalone static file deployment capability while maintaining all original functionality:

- ✅ **Internationalization**: English ↔ Danish language switching
- ✅ **Theme System**: Dark/light mode toggle with localStorage persistence  
- ✅ **Responsive Design**: Mobile navigation with hamburger menu
- ✅ **All Pages**: Home, Current Projects, Previous Projects, About, Contact, 404
- ✅ **Visual Design**: Tailwind CSS v3 styling with Nordic/LARP themed design
- ✅ **Static Deployment**: Pure HTML/CSS/JS output - works anywhere

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/Not-A-Hero-DK/larps.dk.git
cd larps.dk

# Install dependencies
npm install
```

### Development Server

```bash
# Start development server
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload when you change source files.

## 🛠️ Available Scripts

### Development
- `npm start` - Start development server
- `npm run watch` - Build in watch mode

### Building
- `npm run build` - Build for production (outputs to `dist/`)

### Testing
- `npm test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:ui` - Open Vitest UI

### Code Quality
- `npm run lint` - Run ESLint

## 🧪 Testing

The project uses **Vitest** for testing with the following features:

- **100% Code Coverage** target
- **Component Testing** for all Angular components
- **Service Testing** for all services
- **Coverage Reports** in multiple formats (HTML, LCOV, JSON)

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Open test UI
npm run test:ui
```

## 🏗️ Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory. These are static files that can be deployed to any web server:

- **Apache/Nginx**: Direct file serving
- **CDN**: Cloudflare, AWS CloudFront, etc.
- **Static Hosting**: Netlify, Vercel, GitHub Pages, etc.

## 🌍 Internationalization

The app supports two languages:
- **English** (default)
- **Danish**

Translation files are located in `/public/assets/locales/`:
- `en.json` - English translations
- `da.json` - Danish translations

## 🎨 Styling

- **Tailwind CSS v3** for utility-first styling
- **CSS Custom Properties** for theming
- **Dark/Light Mode** support
- **Responsive Design** with mobile-first approach

## 📂 Project Structure

```
src/
├── app/
│   ├── features/          # Feature modules (pages)
│   │   ├── home/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── current-projects/
│   │   ├── previous-projects/
│   │   └── not-found/
│   ├── shared/            # Shared components and services
│   │   ├── components/    # Reusable UI components
│   │   ├── services/      # Application services
│   │   └── locales/       # Translation files
│   ├── app.config.ts      # App configuration
│   ├── app.routes.ts      # Routing configuration
│   └── app.ts             # Root component
├── assets/                # Static assets
└── styles.scss           # Global styles
```

## 🚀 CI/CD

The project includes GitHub Actions workflow for:

- **Building** - Ensures the project compiles successfully
- **Linting** - Code quality checks with ESLint
- **Testing** - Unit tests with coverage reporting
- **Deployment** - Automatic deployment to GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow Angular style guide
- Use TypeScript strict mode
- Write tests for new features
- Maintain 100% code coverage
- Use conventional commit messages

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎮 About LARPS.dk

LARPS.dk provides free hosting solutions for LARP (Live Action Role Playing) communities. We believe every LARP deserves a professional online presence, and our mission is to support organizers with the tools they need to connect with players and showcase their events.

- **150+ Projects** hosted
- **99.9% Uptime** guarantee
- **25,000+ Players** served
- **15 Countries** supported

---

Built with ❤️ for the LARP community by [Not A Hero ApS](https://github.com/Not-A-Hero-DK)
