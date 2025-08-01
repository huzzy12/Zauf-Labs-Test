# TechCorp Landing Page

A modern, professional landing page for a tech company built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui.

---

## 🚀 Features

- **Modern Design**: Clean, pixel-perfect, professional layout
- **Responsive**: Mobile-first approach, fully responsive
- **Performance Optimized**: Fast load times, built with performance in mind
- **Accessibility**: WCAG compliant, proper ARIA labels
- **SEO Ready**: Optimized meta tags and structured data
- **TypeScript**: Full type safety throughout
- **Component-Based**: Modular, reusable components

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: Zustand
- **Form Handling**: React Hook Form + Zod validation
- **Database**: Prisma ORM (SQLite)
- **Authentication**: NextAuth.js
- **Real-time**: Socket.io

---

## 📑 Sections

1. **Navigation Header**: Sticky navigation with smooth scrolling
2. **Hero Section**: Eye-catching hero with call-to-action
3. **Services**: Three main service offerings with detailed features
4. **Customer Trust**: Statistics and social proof
5. **Team Collaboration**: Company values and process
6. **Technology Stack**: Technology highlights
7. **Contact**: Contact form and company info

---

## 📦 Getting Started

1. **Clone the repo**
- **Headings**: Bold, large text (text-4xl to text-6xl)
- **Body**: Clean, readable paragraphs (text-lg to text-xl)
- **Font**: System font stack with fallbacks

### Components
- **Cards**: Consistent padding, rounded corners, hover effects
- **Buttons**: Primary and secondary variants with proper states
- **Navigation**: Clean, accessible navigation structure
- **Forms**: Proper validation and error handling

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/techcorp-landing.git
   cd techcorp-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your environment variables.

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema
- `npm run db:generate` - Generate Prisma client
- `npm run db:migrate` - Run database migrations

## 🏗️ Project Structure

```
src/
├── app/
│   ├── api/              # API routes
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   └── ui/              # shadcn/ui components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── styles/              # Style-related files
```

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect your repository**
   - Sign in to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure environment variables**
   - Add all environment variables from `.env.local`

3. **Deploy**
   - Vercel will automatically detect Next.js and deploy
   - Your site will be live at `https://your-project.vercel.app`

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Connect to Netlify**
   - Drag the `out` folder to [Netlify](https://netlify.com)
   - Or connect your GitHub repository

3. **Configure environment variables**
   - Add environment variables in Netlify dashboard

### Other Platforms

The project can be deployed to any platform that supports Node.js:
- AWS Amplify
- Google Cloud Platform
- DigitalOcean App Platform
- Railway
- Render

## 🔧 Environment Variables

```env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# Optional: Google Fonts (if using custom fonts)
NEXT_PUBLIC_GOOGLE_FONTS_API_KEY="your-api-key"
```

## 📝 Customization

### Changing Colors

Edit `src/app/globals.css` and update the CSS custom properties:

```css
:root {
  --primary: #2563eb;
  --background: #ffffff;
  --foreground: #1a1a1a;
  /* ... other colors */
}
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and use it in `src/app/page.tsx`
3. Add corresponding styles in `src/app/globals.css`

### Updating Content

All content is in `src/app/page.tsx`. You can:
- Update text content
- Change service offerings
- Modify case studies
- Update company information

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide](https://lucide.dev/) for the amazing icons

## 📞 Support

If you have any questions or need support, please:
- Open an issue on GitHub
- Check the [documentation](docs/)
- Join our community discussions

---

Built with ❤️ by the TechCorp team#   Z a u f - L a b s - T e s t  
 