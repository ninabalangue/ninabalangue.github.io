# Niña Bernadeth R. Balangue – Virtual Assistant Portfolio

A high-converting, recruiter-ready personal portfolio website tailored for **Executive & Administrative Virtual Assistant** opportunities, legal operations, Google Workspace / MS 365 administration, and Canva collateral design.

---

## 🚀 How to Host on GitHub Pages (Free)

This project is built with **React, Vite, and Tailwind CSS**. It has already been configured with `base: './'` in `vite.config.ts`, meaning you can deploy it directly to GitHub Pages without broken link issues!

### 📸 Updating Your Profile Photo on GitHub Pages

GitHub Pages uses the static image in `public/profile.png`. To ensure your photo is displayed:

1. **Directly on GitHub.com**:
   - Go to your repository `ninabalangue/ninabalangue.github.io`
   - Open the `public/` directory
   - Click **Add file** > **Upload files**
   - Upload your portrait (`IMG_7583.JPG`) and make sure the file is named `profile.png`
   - Click **Commit changes**
   - GitHub Actions will automatically re-deploy your site with your photo in ~1 minute!

2. **From your computer / Terminal**:
   ```bash
   cp /path/to/IMG_7583.JPG public/profile.png
   git add public/profile.png
   git commit -m "Update profile photo"
   git push origin main
   ```

---

### Option A: Automatic Deployment via GitHub Actions (Recommended)

1. **Create a GitHub Repository**:
   - Go to [github.com/new](https://github.com/new).
   - Name it `portfolio` (or `yourusername.github.io`).
   - Leave it public.

2. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Niña Balangue VA Portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - In your repository, click **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
   - Your `.github/workflows/deploy.yml` will automatically build and publish the site!

---

### Option B: Quick Manual Build & Push

1. Run the build command:
   ```bash
   npm run build
   ```
2. The compiled static HTML, JS, and CSS files will be generated in the `dist/` folder.
3. You can upload the contents of `dist/` to GitHub Pages, Netlify, Vercel, or Cloudflare Pages.

---

## 💼 Included Sections for Recruiters

- **Recruiter Fast-Track Hook**: Instant candidate snapshot, Civil Service Professional eligibility badge, consistent academic lister, and 480+ hours DILG legal records background.
- **Interactive Work Samples**:
  - Executive Calendar & Morning Briefing
  - Interactive Google Sheets & Excel Tracker
  - Formal Executive Minutes of the Meeting (MOM)
  - Canva Visual Brand Kit & Social Graphics
  - Confidential Legal & Filing SOP
- **Filterable Technical Skills**: Google Workspace, MS 365, Canva, Calendar & Inbox Zero, Legal Records.
- **Work & Leadership Timeline**: DILG Regional Legal Service, LGU Medina (PESO & Sangguniang Bayan), MSU-IIT Supreme Student Council, Bonbon Blings, Wan-Wan Enterprise.
- **Academic Honors & 6 Awards**: Including the *Beacon of Integrity* and *Pillar of Commitment*.
- **Recruiter Tools**:
  - 1-Click Copy Email & Phone with visual toast
  - Timezone compatibility matrix (EST, PST, BST, AEST, PHT)
  - ATS-optimized Printable / Save-as-PDF Resume Modal
