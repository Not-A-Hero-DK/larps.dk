# LARPS.dk - Guardian of LARP Realms

LARPS.dk is a Next.js 15 web application built with TypeScript, React 19, and Tailwind CSS v4. It provides a platform for LARP (Live Action Role Playing) communities with internationalization support for English and Danish.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Prerequisites and Setup
- Node.js v20+ is required (current: v20.19.4)
- npm v10+ is required (current: v10.8.2)

### Bootstrap, Build, and Test the Repository
Run these commands in sequence:

1. `npm install` -- installs dependencies. Takes ~40 seconds. NEVER CANCEL. Set timeout to 90+ seconds.
2. `npm run lint` -- runs ESLint checks. Takes ~2-3 seconds. Set timeout to 30+ seconds.
3. `npm run build` -- builds production bundle. Takes ~18-20 seconds. NEVER CANCEL. Set timeout to 90+ seconds.

### Development Workflow
- `npm run dev` -- starts development server with Turbopack. Ready in ~1 second. Access at http://localhost:3000
- Development server includes hot reload - changes to `src/app/page.tsx` update instantly
- NEVER CANCEL development server - it runs continuously for development

### Production Workflow
- `npm run build` -- MUST be run before production start
- `npm start` -- starts production server. Ready in ~0.6 seconds after successful build

### Known Issues and Limitations
- **Google Fonts**: External font requests may fail in restricted environments. The app gracefully falls back to system fonts.
- **Next.js Telemetry**: First-time builds may show telemetry collection notice - this is normal.
- **Build Cache**: Clean builds show "No build cache found" warning - this is expected.

## Validation

### Manual Testing Requirements
Always run through these complete user scenarios after making changes:

1. **Language Switching Test**:
   - Start development server with `npm run dev`
   - Navigate to http://localhost:3000
   - Verify header shows "Heimdal Portal" and "DA" button
   - Click "DA" button to switch to Danish
   - Verify button changes to "EN" and aria-label becomes "Skift til Engelsk"
   - Click "EN" to switch back to English
   - Verify button returns to "DA" and aria-label becomes "Switch to Danish"

2. **Build and Production Test**:
   - Run `npm run build` (wait for completion - takes ~18 seconds)
   - Run `npm start`
   - Test language switching functionality in production mode
   - Verify all pages load correctly

3. **Linting and Type Checking**:
   - Always run `npm run lint` before committing changes
   - Ensure zero ESLint warnings or errors
   - TypeScript checking is included in the build process

### Required Validation Steps
- ALWAYS test the complete language switching workflow
- ALWAYS run linting before any code changes are committed
- Build times are normal at 18-20 seconds - do not cancel builds
- Development server startup is fast (~1 second) - production server is even faster (~0.6 seconds)

## Common Tasks

### File Structure Reference
```
/
├── .github/                 # GitHub configuration
├── .next/                   # Next.js build output (generated)
├── node_modules/            # Dependencies (generated)
├── public/                  # Static assets
│   ├── locales/            # Translation files
│   │   ├── en.json         # English translations
│   │   └── da.json         # Danish translations
│   └── *.svg               # Icon files
├── src/                    # Source code
│   ├── app/                # Next.js App Router
│   │   ├── globals.css     # Global styles with Tailwind
│   │   ├── layout.tsx      # Root layout (Server Component)
│   │   ├── page.tsx        # Home page (Server Component)
│   │   └── Header.tsx      # Header with language switch (Client Component)
│   └── lib/                # Utility libraries
│       └── i18n.tsx        # Internationalization provider (Client Component)
├── eslint.config.mjs       # ESLint configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies and scripts
├── postcss.config.mjs      # PostCSS/Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

### Key Architecture Notes
- **Client vs Server Components**: All components using React hooks must have `"use client"` directive
- **Internationalization**: Managed through custom i18n provider with JSON translation files
- **Styling**: Tailwind CSS v4 with PostCSS integration
- **Fonts**: Uses system fonts (Google Fonts removed due to network restrictions)

### Common Development Patterns
- When adding client-side interactivity, add `"use client"` directive at the top of the file
- Translation keys follow dot notation (e.g., `"default.switch_language"`)
- Always check both English and Danish translations when modifying text
- Component state management uses React hooks (useState, useEffect, useContext)

### Package Scripts Reference
- `npm run dev` - Development server with Turbopack
- `npm run build` - Production build
- `npm start` - Production server
- `npm run lint` - ESLint checking

### Performance Expectations
- **npm install**: ~40 seconds (depends on network)
- **npm run lint**: ~2-3 seconds
- **npm run build**: ~18-20 seconds (clean build)
- **npm run dev**: ~1 second startup
- **npm start**: ~0.6 seconds startup (after build)

### Timeout Recommendations
- npm install: 90+ seconds
- npm run build: 90+ seconds
- npm run lint: 30+ seconds
- Development/production server startup: 30+ seconds

## Technical Stack Details

### Dependencies
- **Next.js 15.4.6**: React framework with App Router
- **React 19.1.0**: Latest React with new features
- **TypeScript 5.x**: Type safety and development experience
- **Tailwind CSS 4.x**: Utility-first CSS framework
- **ESLint 9.x**: Code quality and style checking

### Configuration Files
- `eslint.config.mjs`: ESLint flat config with Next.js presets
- `next.config.ts`: Minimal Next.js configuration
- `tsconfig.json`: TypeScript with Next.js optimizations
- `postcss.config.mjs`: PostCSS configuration for Tailwind

### Critical Reminders
- **NEVER CANCEL**: Builds take 18-20 seconds normally - wait for completion
- **Client Components**: Always add `"use client"` for components using hooks
- **Translation Testing**: Always test both English and Danish when changing text
- **Lint Before Commit**: Run `npm run lint` before any code changes to avoid CI failures