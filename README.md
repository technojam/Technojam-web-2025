# 🚀 TechnoJam - Official Website 2025

<div align="center">
  <img src="public/tj.png" alt="TechnoJam Logo" width="120" height="120">
  
  **"Throttle to Learn"**
  
  *The Premier Technical Club for Innovators, Developers, and Tech Enthusiasts*

  [![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.22-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

</div>

## 🌟 Overview

TechnoJam-web-2025 is a cutting-edge, interactive website showcasing the TechnoJam technical club at Galgotias University. Built with a unique terminal/cyberpunk aesthetic, it features an immersive Matrix-style interface with functional terminal commands, animated backgrounds, and modern web technologies.

## ✨ Features

### 🎮 **Interactive Terminal Experience**
- **Boot Sequence Animation**: Realistic system initialization on page load
- **Functional Terminal**: Execute real commands like `help`, `sudo join`, `goto <section>`
- **Color-coded Output**: Different colors for success, error, and info messages
- **Command History**: Full terminal experience with auto-scroll

### 🎨 **Visual Excellence**
- **Matrix Rain Effect**: Animated background with "THROTTLE TO LEARN" characters
- **Typewriter Animations**: Progressive text revelation throughout the site
- **Framer Motion**: Smooth transitions and hover effects
- **Cyberpunk Theme**: Blue, red, purple gradient palette with dark aesthetic

### 📱 **Responsive Design**
- Mobile-optimized layout with touch-friendly interactions
- Adaptive component sizing across all devices
- Collapsible navigation for smaller screens

### 🏆 **Content Sections**
- **Hero**: System boot animation and welcome terminal
- **Achievements**: Filterable member profiles with project showcases
- **Gallery**: Event photos and project galleries with category filters
- **Contact**: Social media integration and communication channels

## 🛠️ Tech Stack

### **Core Technologies**
- **Framework**: Next.js 15.5.4 (App Router)
- **React**: v19.1.0 (Latest)
- **TypeScript**: v5.9.3
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion v12.23.22
- **Icons**: Lucide React v0.544.0

### **Build & Development**
- **Build Tool**: Turbopack (Next.js rust-based bundler)
- **Code Quality**: ESLint with Next.js and TypeScript rules
- **Fonts**: Geist Sans & Geist Mono from Google Fonts
- **Deployment**: Vercel-optimized

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/technojam/Technojam-web-2025.git
   cd Technojam-web-2025
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
npm run build
npm run start
```

## 🎯 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
TechnoJam-web-2025/
├── app/                          # Next.js 13+ app directory
│   ├── components/              # React components
│   │   ├── navigation/         # Navigation components
│   │   │   └── Navbar.tsx
│   │   ├── sections/           # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Achievements.tsx
│   │   │   ├── Gallery.tsx
│   │   │   └── Contact.tsx
│   │   ├── terminal/           # Terminal components
│   │   │   └── InteractiveTerminal.tsx
│   │   └── ui/                # UI components
│   │       ├── MatrixRain.tsx
│   │       ├── TerminalWindow.tsx
│   │       └── TypeWriter.tsx
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   └── icon.png                # Favicon (TechnoJam logo)
├── public/                      # Static assets
│   ├── tj.png                  # TechnoJam logo
│   └── ...                     # Other assets
├── next.config.ts              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## 🎮 Terminal Commands

The interactive terminal supports various commands:

- `help` - Show all available commands
- `sudo join` - Join the TechnoJam community
- `goto <section>` - Navigate to different sections (achievements, gallery, contact)
- `clear` - Clear terminal history
- `exit` - Close terminal
- `whoami` - Display user information
- `date` - Show current date and time
- `ls projects` - List community projects

## 🎨 Design Features

### **Color Palette**
- Primary: Cyan (#06B6D4), Blue (#3B82F6)
- Secondary: Red (#EF4444), Purple (#A855F7)
- Background: Black (#000000) with gradient overlays

### **Typography**
- Primary: Geist Sans (modern sans-serif)
- Code/Terminal: Geist Mono (monospace)

### **Animations**
- Matrix rain background effect
- Typewriter text animations
- Smooth hover transitions
- Boot sequence simulation

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a Next.js project
3. Deploy with default settings

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `.next` folder to your hosting provider
3. Ensure Node.js runtime is available

## 🤝 Contributing

We welcome contributions to the TechnoJam website! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain the terminal/cyberpunk theme
- Ensure responsive design
- Add proper error handling

## 📞 Connect with TechnoJam

- **GitHub**: [@technojam](https://github.com/technojam)
- **LinkedIn**: [TechnoJam](https://www.linkedin.com/company/technojam/)
- **Twitter**: [@technojam_gu](https://x.com/technojam_gu)
- **Instagram**: [@teamtechnojam](https://www.instagram.com/teamtechnojam/)
- **Email**: technojam@galgotiasuniversity.edu.in
- **Discord**: [Join our server](https://discord.com/invite/6ksUUABBkY)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For hosting and deployment platform
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **TechnoJam Community** - For inspiration and feedback

---

<div align="center">
  <strong>Built with ❤️ by TechnoJam</strong>
  <br>
  <em>"Throttle to Learn" - Innovation never stops!</em>
</div>
