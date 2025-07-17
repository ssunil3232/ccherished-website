# Cherie Home Page

A beautiful, responsive landing page for Cherie - a relationship management app that helps you stay connected with the people that matter most.

## Features

- **Modern React Architecture**: Built with React 18 and functional components
- **Responsive Design**: Fully responsive layout that works on all devices
- **Custom Design System**: Consistent colors, typography, and spacing using CSS variables
- **Interactive Components**: Hover effects, smooth transitions, and engaging animations
- **Email Signup**: Functional email capture form for waitlist signups
- **Accessibility**: Semantic HTML and ARIA attributes for screen readers
- **Performance Optimized**: Optimized images and efficient component structure

## Components

### Navigation

- Clean navigation bar with logo and call-to-action button
- Responsive design that adapts to mobile screens

### Hero Section

- Eye-catching hero with phone mockup
- Dynamic notification elements
- Compelling headline and subtitle

### Features Section

- Interactive feature list with icons and descriptions
- Phone mockup showcasing the app
- Hover effects and smooth transitions

### Story Section

- Company story and mission statement
- Clean typography and engaging layout

### Email Signup

- Functional email capture form
- Form validation and user feedback
- Responsive design

### Footer

- Contact information and social links
- Copyright and legal links
- Responsive layout

## Design System

The project uses a comprehensive design system with:

- **Color Variables**: Consistent color palette using CSS custom properties
- **Typography**: Nunito and Mynerve fonts with consistent sizing
- **Spacing**: Standardized padding and margins
- **Border Radius**: Consistent rounded corners
- **Transitions**: Smooth hover and focus effects

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone <repository-url>
   cd cherie-home-page
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm start
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- \`npm start\`: Runs the app in development mode
- \`npm run build\`: Builds the app for production
- \`npm test\`: Launches the test runner
- \`npm run eject\`: Ejects from Create React App (not recommended)

## Project Structure

\`\`\`
src/
├── components/
│ ├── Navigation.jsx # Top navigation component
│ ├── Navigation.css
│ ├── HeroSection.jsx # Main hero section
│ ├── HeroSection.css
│ ├── FeaturesSection.jsx # Features showcase
│ ├── FeaturesSection.css
│ ├── StorySection.jsx # Company story
│ ├── StorySection.css
│ ├── EmailSignup.jsx # Email capture form
│ ├── EmailSignup.css
│ ├── Footer.jsx # Footer with links
│ ├── Footer.css
│ ├── HomePage.jsx # Main page component
│ └── HomePage.css
├── App.jsx # Main App component
├── App.css
├── index.js # React entry point
└── index.css # Global styles and variables
\`\`\`

## Customization

### Colors

Update the CSS custom properties in \`src/index.css\` to change the color scheme:

\`\`\`css
:root {
--btn-border-secondary: #F99C07;
--bottom-nav-bg: #FFF7E9;
--primary-text: rgba(58, 56, 61, 1);
/_ Add more color variables _/
}
\`\`\`

### Typography

The project uses Google Fonts. Update the font imports in \`public/index.html\` and font-family declarations in CSS files.

### Content

Update the content in each component file to match your brand and messaging.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Internet Explorer 11+ (with polyfills)

## Performance

- Optimized images using Builder.io CDN
- Efficient CSS with minimal unused styles
- React best practices for performance
- Responsive images with appropriate sizing

## Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspiration from modern SaaS landing pages
- Icons and illustrations from the original design system
- Built with Create React App for rapid development
