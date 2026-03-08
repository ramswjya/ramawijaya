# Rama Wijaya — Portfolio

Personal portfolio website built with Next.js 14, CSS Modules, and Google Fonts.

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Edit Content

All content is stored in the `data/` folder — you never need to touch component files to update your info.

### Profile & Skills — `data/profile.js`

Edit your personal information, stats, education, interests, and skills:

```js
export const profile = {
  name: "Your Name",
  shortName: "Short Name",
  title: "Your Title",
  email: "you@example.com",
  // ... edit all fields as needed
};
```

### Work Experience — `data/experience.js`

Add, remove, or reorder jobs:

```js
export const experience = [
  {
    company: "Company Name",
    role: "Your Role",
    period: "Start — End",
    current: true, // set to true for current job
    icon: "🏢",
    bullets: ["What you did..."],
    achievements: ["📊 Key achievement"],
  },
  // Add more entries...
];
```

### Projects — `data/projects.js`

Each project has a `size` property that controls grid layout:
- `"wide"` — spans 7 of 12 columns
- `"tall"` — spans 5 of 12 columns
- `"full"` — spans 6 of 12 columns

To add a project screenshot, place your image in `public/images/` and set:

```js
image: "/images/your-screenshot.png"
```

## Adding Profile Photo

Replace the placeholder emoji in `components/About.jsx`:

1. Add your photo to `public/images/profile.jpg`
2. In `components/About.jsx`, replace the emoji `<span>` with:
   ```jsx
   <img src="/images/profile.jpg" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
   ```

## Deploy to Vercel

### Option 1: Via GitHub

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **"Add New Project"**
4. Import your repository
5. Vercel will auto-detect Next.js — click **Deploy**

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Project Structure

```
ramawijaya/
├── components/       # UI components with CSS Modules
├── data/             # All content (edit these files)
├── pages/            # Next.js pages
├── styles/           # Global styles & CSS variables
├── public/images/    # Your images go here
└── package.json
```

## Tech Stack

- **Next.js 14** (Pages Router)
- **CSS Modules** (scoped styling)
- **Plus Jakarta Sans** + **Instrument Serif** (Google Fonts)
- **IntersectionObserver** (scroll reveal animations)
