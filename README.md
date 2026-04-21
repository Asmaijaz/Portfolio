# Asma Ijaz — SQA Portfolio Website

A professional React portfolio hosted **free** on GitHub Pages.

---

## 🚀 Deploy in 5 Steps (Free on GitHub Pages)

### Step 1 — Create a GitHub Account
Go to https://github.com and sign up (free).

---

### Step 2 — Create a New Repository
1. Click **"New"** (green button) on GitHub
2. Name it: `portfolio`
3. Set to **Public**
4. Click **"Create repository"**

---

### Step 3 — Update Your Homepage URL
Open `package.json` and replace this line:
```
"homepage": "https://YOUR-GITHUB-USERNAME.github.io/portfolio"
```
With your actual GitHub username, e.g.:
```
"homepage": "https://asmaijaz.github.io/portfolio"
```

---

### Step 4 — Install & Deploy
Open a terminal in this folder and run:

```bash
# Install dependencies
npm install

# Deploy to GitHub Pages (builds + pushes automatically)
npm run deploy
```

---

### Step 5 — Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select branch: **gh-pages**
4. Click **Save**

Your site will be live at:
`https://YOUR-USERNAME.github.io/portfolio`

---

## 🛠 Run Locally (for editing)

```bash
npm install
npm start
```
Opens at http://localhost:3000

---

## 📁 File Structure

```
src/
  components/
    Navbar.js         ← Navigation bar
    Hero.js           ← Landing section with stats
    About.js          ← Bio + roles card
    Skills.js         ← Tabbed skills panel
    Projects.js       ← SWAI, VSI-AI + other projects
    Experience.js     ← Work history
    Certifications.js ← Certs + education
    Contact.js        ← Contact + footer
  App.js              ← Main app
  index.css           ← Global styles
```

---

## ✏️ How to Customize

- **Change name/email:** Search for `asmaijaz3103@gmail.com` and `Asma Ijaz` across files
- **Add a project:** Edit `Projects.js` — add a new object to the `projects` array
- **Change colors:** Edit `index.css` — update `--teal` and `--accent` variables
- **Add your photo:** Drop an image in `public/` and add an `<img>` tag in `Hero.js`

---

## 🌐 Alternative Free Hosting Options

| Platform | URL | Notes |
|----------|-----|-------|
| GitHub Pages | github.io | ✅ Best for React |
| Netlify | netlify.app | Drag & drop `build/` folder |
| Vercel | vercel.app | Connect GitHub repo, auto-deploys |

### Deploy to Netlify (even easier):
1. Run `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag the `build/` folder into the browser
4. Done — instant live URL!

---

## 📞 Contact
**Asma Ijaz** · asmaijaz3103@gmail.com · 0330-4377700
