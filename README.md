# Pine Forest Night Portfolio

A beautiful, responsive single-page portfolio website with a pine forest at night theme. Built with semantic HTML5, modern CSS, and interactive JavaScript.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablets and desktops
- **Pine Forest Night Theme**: Deep navy backgrounds with forest green accents and moonlight whites
- **Interactive Elements**: 
  - Hamburger menu for mobile navigation
  - Smooth scrolling between sections
  - Animated skill progress bars
  - Form validation with real-time feedback
  - Scroll-triggered animations
- **Accessibility**: WCAG AA compliant with proper ARIA labels, keyboard navigation, and screen reader support
- **Modern CSS**: Flexbox/Grid layouts, CSS custom properties, and smooth transitions

## File Structure

```
pine-forest-portfolio/
â”œâ”€â”€ index.html          # Main HTML structure
â”œâ”€â”€ styles.css          # CSS styling and responsive design
â”œâ”€â”€ script.js           # JavaScript functionality
â””â”€â”€ README.md           # This file
```

## Customization Guide

### Personal Information
Replace the following placeholder content in `index.html`:

1. **Name**: Replace "Your Name" in the title and navigation brand
2. **About Section**: Update personal background, education, and interests
3. **Contact Information**: Replace email, phone, and location
4. **Social Links**: Update GitHub, LinkedIn, and Twitter links

### Projects Section
Replace the three placeholder projects with your actual projects:

1. **Project Titles**: Update "Project Title 1", "Project Title 2", "Project Title 3"
2. **Descriptions**: Write detailed descriptions of each project
3. **Technologies**: Update the tech tags to match your projects
4. **Links**: Replace "#" with actual project URLs
5. **Images**: Replace placeholder images with actual project screenshots

### Skills Section
Update the skills to match your expertise:

1. **Skill Names**: Modify the skill names in the progress bars
2. **Proficiency Levels**: Adjust the `data-width` attributes (e.g., "90%", "85%")
3. **Technology Tags**: Update the tools and technologies list

### Styling Customization

#### Colors
The color palette is defined in CSS custom properties at the top of `styles.css`:

```css
:root {
    --navy-dark: #0a1929;
    --navy-medium: #1a2332;
    --forest-dark: #2d5016;
    --forest-medium: #3d6b1f;
    --moonlight-white: #e8f4f8;
    --amber-highlight: #d4a574;
}
```

#### Typography
The site uses Inter font from Google Fonts. To change fonts, update the font-family in the CSS.

#### Layout
- **Container Width**: Modify `max-width: 1200px` in `.container` class
- **Spacing**: Adjust padding and margins throughout the CSS
- **Breakpoints**: Customize responsive breakpoints in media queries

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Performance Features

- Optimized CSS with efficient selectors
- Minimal JavaScript with event delegation
- Responsive images and lazy loading support
- Reduced motion support for accessibility

## Accessibility Features

- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast mode support
- Screen reader compatibility
- Focus indicators
- Form validation with error announcements

## Getting Started

1. **Download/Clone** the files to your local machine
2. **Customize** the content as described above
3. **Test** the website in different browsers and devices
4. **Deploy** to your preferred hosting service

## Deployment Options

- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Easy deployment with form handling
- **Vercel**: Fast deployment with global CDN
- **Traditional Web Hosting**: Upload files via FTP

## Form Handling

The contact form includes client-side validation. For actual email sending, integrate with:
- **Formspree**: Simple form handling service
- **EmailJS**: Send emails directly from JavaScript
- **Netlify Forms**: Built-in form handling
- **Custom Backend**: PHP, Node.js, or Python script

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please refer to the code comments or create an issue in your repository.

---

Built with â¤ï¸ and inspired by pine forests at night ðŸŒ²âœ¨
