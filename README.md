# Bill Korman - The 168 Game Website

A modern, professional Next.js website for Bill Korman's Time Ownership coaching business.

## 🎨 Design Features

- **Brand Colors**: Bold blue (#1f5f94) from book cover with orange/gold (#ff8c1a) accents
- **Typography**: Bebas Neue for headings, Plus Jakarta Sans for body text
- **Dark Theme**: Premium dark aesthetic with subtle gradients and animations
- **Responsive**: Fully mobile-optimized design
- **Animations**: Smooth scroll-triggered animations using Framer Motion

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx          # Homepage
│   ├── layout.tsx        # Root layout with header/footer
│   ├── globals.css       # Global styles & CSS variables
│   ├── about/            # About page
│   └── services/         # Services page
├── components/
│   ├── ui/               # Reusable UI components (Button, Card, etc.)
│   ├── sections/         # Page sections (Hero, Problem, Solution, etc.)
│   └── layout/           # Layout components (Header, Footer)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Extract the zip file** and navigate to the project directory:
   ```bash
   cd bill-korman-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open** [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages

### Homepage (`/`)
- Hero section with stats and CTA
- Problem/Pain points section
- Solution/Playbook features
- Warning/Urgency section
- The 168 Game System (4 pillars)
- 5 Myths debunked
- About preview
- Services preview
- Who is this for section
- Final CTA

### About Page (`/about`)
- Bill's story from bankruptcy to success
- Mission and values
- Companies and credentials
- Call to action

### Services Page (`/services`)
- Comparison table of all offerings
- 1:1 Coaching Intensive ($25K)
- 1:1 Coaching Basic ($15K)
- Group Training ($7.5K)
- On-Demand Course ($497)
- FAQ section
- Final CTA

## 🎨 Customization

### Colors
Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --primary-500: #1f5f94;  /* Main blue */
  --accent-500: #ff8c1a;   /* Orange accent */
  /* ... */
}
```

### Fonts
The site uses Google Fonts imported in `globals.css`:
- **Bebas Neue** - Display/headings
- **Plus Jakarta Sans** - Body text

### Images
Replace placeholder content with actual images:
1. Bill's headshot photos
2. Book cover image
3. Logo (currently using icon)

## 📝 TODO for Production

1. **Add real images** - Replace placeholder divs with actual photos
2. **Connect forms** - Wire up CTAs to your email/CRM system
3. **Add analytics** - Google Analytics, Meta Pixel, etc.
4. **SEO optimization** - Update metadata in `layout.tsx`
5. **Add testimonials** - Include client reviews where noted
6. **Connect payment** - Link to Stripe/payment processor for courses
7. **Add contact form** - Create a dedicated contact page or modal

## 🔗 External Links

Update these placeholders in the code:
- Social media links in Footer
- Book purchase link (Amazon)
- Convention website link
- Application/enrollment forms

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Support

For questions about the website implementation, refer to the Next.js documentation:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

Built with ❤️ for Bill Korman's The 168 Game
