# Hiking Gallery

A modern, responsive hiking image gallery built with Next.js 13+, featuring modal-based navigation, theme switching, and optimized image loading.

## 🌟 Features

- **Responsive Image Grid**: Adaptive masonry-style layout using TailwindCSS
- **Modal-based Navigation**: Parallel routes for smooth modal transitions
- **Theme Support**: Light/dark mode with system preference detection
- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Performance Optimized**: Priority image loading and responsive sizes

## 🏗 Architecture

### Core Technologies
- Next.js 13+ (App Router)
- TypeScript
- TailwindCSS
- Framer Motion
- next-themes

### Key Design Decisions

#### Routing Structure
```
app/
  (home)/
    page.tsx              # Main gallery grid
    @modal/              
      (.)photos/[id]/     # Intercepted modal routes
    layout.tsx            # Parallel routes handler
  photos/[id]/            # Full page photo view
```

#### Components Architecture
- `ImageModalClient`: Client-side modal handler
- `Modal`: Reusable modal component with Framer Motion
- `Container`: Layout wrapper for consistent spacing
- `ThemeProviderWrapper`: Theme context provider

## 🚀 Setup

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
yarn install
```

3. Run development server:
```bash
yarn dev
```

## 💡 Implementation Details

### Modal Routing
- Uses Next.js 13+ parallel routes for modal handling
- Maintains URL state with browser history
- Smooth transitions using Framer Motion
- Example: `/photos/1` can be accessed directly or via modal

### Theme Implementation
- System preference detection
- Persistent theme selection
- Smooth transitions between modes
- CSS variables for dynamic theming

### Performance Optimizations
- Image format optimization (WebP/AVIF)
- Priority loading for LCP images
- Responsive image sizing
- Lazy loading for off-screen images

### State Management
- URL-based state for modal views
- Theme persistence using next-themes
- Client-side modal state management

## 📦 Project Structure

```
src/
  app/                    # Next.js app router
  components/            # Reusable components
    Modal.tsx
    ImageModalClient.tsx
    Nav.tsx
    ThemeToggle.tsx
  lib/
    images.ts           # Image data and metadata
    utils.ts            # Utility functions
public/
  images/              # Optimized image assets
```

## 🎨 Styling

- TailwindCSS for utility-first styling
- CSS variables for theme colors
- Responsive breakpoints
- Dark mode support

## 🔧 Configuration Files

- `next.config.ts`: Next.js configuration with image optimization
- `tailwind.config.ts`: TailwindCSS customization
- `postcss.config.mjs`: PostCSS plugins
- `tsconfig.json`: TypeScript configuration

## 📱 Responsive Design

- Mobile-first approach
- Adaptive grid layout
- Responsive images
- Touch-friendly interactions

## 🔄 State Flow

1. User clicks image in grid
2. URL updates with photo ID
3. Modal route intercepts
4. ImageModalClient renders
5. Back navigation closes modal
