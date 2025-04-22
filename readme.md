
# Happy Birthday 🎉

This React.js website is a one-of-a-kind birthday treasure, handcrafted as a gift to celebrate my friend in style. 

Born from late-night coding sessions and a love for building something special, it’s a sleek, luxurious escape. It’s more than a site—it’s a personal digital keepsake designed to wow.

## 🎈 About

This project is a personal tribute, mixing my early coding days with modern skills. It’s designed to be minimalistic and elegant, perfect for celebrating Friend's special day.

## ✨ What’s Inside This Digital Gift

- **Hero Portal**: A full-screen gateway with particle animations that swirl into a birthday shoutout.
- **Memory Vault**: A sleek gallery of photos with hover secrets, unlocking [Friend's Name]’s best moments.
- **Wish Forge**: A guestbook where friends forge messages, saved like digital treasures in local storage.
- **Aesthetic Glow**: Black, white, and gold vibes with Cormorant Garamond and Montserrat fonts for that premium feel.

## 🛠 Tech Stack

### Frontend

- **React.js**: Runs the show via CDN, keeping it lightweight and interactive, like the chat app I built for my internship.
- **TypeScript**: Adds type safety for better code structure, a step up from my early JavaScript days.
- **Tailwind CSS**: Styles everything with utility classes via CDN, making it fast and flexible.
- **particles.js**: Adds the particle magic via CDN for that unique touch.

### Fonts

- `@fontsource/playfair-display`: Elegant serif font for headings.
- `@fontsource/inter`: Clean sans-serif for body text.

### Animations

- **Framer Motion**: Handles smooth transitions and effects.
- **React Intersection Observer**: Syncs animations with scrolling.

### Storage

- **Local Storage**: Stores guestbook messages in the browser, a nod to my early data-handling experiments.

## 📦 Installation

### What You Need

- A modern browser (Chrome, Firefox, etc.)
- Node.js and npm (for local use)
- Git (to clone the repo)

### Steps

#### **Clone the Repo**

```bash
git https://github.com/irfan-rg/present

cd present
```

#### Install Packages (Optional)

Run these if you want to tweak it locally:

```bash
npm install framer-motion react-intersection-observer @fontsource/playfair-display @fontsource/inter

npm install --save-dev vite @vitejs/plugin-react tailwindcss postcss autoprefixer typescript

npx tailwindcss init -p
```

#### Set Up Configs (Optional)

Edit `tailwind.config.js`:

```js
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
      },
    },
  },
  plugins: [],
}
```

Add a basic `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": true
  },
  "include": ["**/*.ts", "**/*.tsx"]
}
```

#### Run It (Optional)

- Open `index.html` in a browser to see it live.
- For local testing, use Vite:

```bash
npm create vite@latest . -- --template react-ts

npm run dev
```

## 🚀 Usage

1. Fire up `index.html` in your browser.
2. Swap `[Friend's Name]` and placeholder images with personal content.
3. Add wishes in the guestbook—they’ll save locally.
4. Share the link with friends for the celebration!

## 🎨 Customization

- **Hero Backdrop:**: Swap the background in the Hero component with a personal photo or video.
- **Color Alchemy:**: Tweak the `gold` hue in `tailwind.config.js` or inline styles.
- **Guestbook**: Use Formspree (sign up, update fetch URL) instead of local storage for lasting wishes.
- **Fonts**: Switch `@fontsource` fonts to match Friend's taste.

## 🌍 Deployment

- **GitHub Pages**: Push to GitHub, go to Settings > Pages, set main as the source, and deploy.
- **Vercel**: Test on a "source" branch, then switch to main.
  Use a staging branch for testing first, like we did with your portfolio.

## 🤝 Contributing

Fork this repo and send pull requests! Ideas:

- Add audio or video messages.
- Build a backend for guestbook storage.
- Enhance animations with Framer Motion.

## 📄 License

This project is under the **MIT License**. See `LICENSE` for details.
