import React, { useState } from 'react';
import { X, Github, Check, Copy, ExternalLink, Terminal, Globe, Rocket, HelpCircle } from 'lucide-react';

interface GithubDeployGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GithubDeployGuide: React.FC<GithubDeployGuideProps> = ({ isOpen, onClose }) => {
  const [copiedWorkflow, setCopiedWorkflow] = useState(false);
  const [copiedScript, setCopiedScript] = useState(false);

  if (!isOpen) return null;

  const githubWorkflowYml = `name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Build site
        run: npm run build

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
`;

  const copyWorkflow = () => {
    navigator.clipboard.writeText(githubWorkflowYml);
    setCopiedWorkflow(true);
    setTimeout(() => setCopiedWorkflow(false), 2000);
  };

  const copyGitCommands = () => {
    const commands = `git init
git add .
git commit -m "Initial commit: Niña Balangue VA Portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main`;
    navigator.clipboard.writeText(commands);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 text-white rounded-3xl shadow-2xl border border-slate-700 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-white">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                How to Host Your Portfolio on GitHub Pages (Free)
              </h3>
              <p className="text-xs text-slate-400">
                This project has already been configured with <code className="text-teal-300">base: './'</code> in Vite for 100% GitHub Pages compatibility!
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-xs sm:text-sm text-slate-300">
          
          {/* White Screen Alert Box */}
          <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/40 text-xs text-amber-200 space-y-2.5">
            <div className="flex items-center gap-2 font-bold text-amber-300 text-sm">
              <span className="p-1 rounded-lg bg-amber-500/20 text-amber-400">⚠️</span>
              Seeing a Blank White Screen on your link?
            </div>
            <p className="text-slate-300 leading-relaxed">
              <strong className="text-white">Why this happens:</strong> In your GitHub repository settings under <strong>Pages</strong>, the source is currently set to <em>"Deploy from a branch"</em>. This tells GitHub to serve raw uncompiled source files (<code className="text-amber-300">src/main.tsx</code>) which browsers cannot run, causing a blank screen.
            </p>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-amber-500/30 text-slate-200 space-y-1.5 font-sans">
              <div className="font-bold text-teal-300">⚡ 1-Minute Fix (In your open GitHub Pages tab):</div>
              <ol className="list-decimal list-inside space-y-1 text-slate-300 text-[12px]">
                <li>Click your open <strong className="text-white">Pages</strong> tab in GitHub (Settings &gt; Pages).</li>
                <li>Under <strong className="text-white">Build and deployment &gt; Source</strong>, switch the dropdown from <em>"Deploy from a branch"</em> to <strong className="text-emerald-400">"GitHub Actions"</strong>.</li>
                <li>Click the <strong className="text-white">Configure</strong> button next to <strong>Static HTML</strong> (or Vite), or ensure <code className="text-teal-300">.github/workflows/deploy.yml</code> is pushed.</li>
                <li>GitHub will automatically compile and launch your live website in under 60 seconds!</li>
              </ol>
            </div>
          </div>

          {/* Step 1 */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 font-bold text-white text-sm">
              <span className="w-6 h-6 rounded-full bg-teal-400 text-slate-950 flex items-center justify-center font-black text-xs">1</span>
              Create a new GitHub Repository
            </div>
            <p className="text-slate-400 text-xs pl-8">
              Go to <a href="https://github.com/new" target="_blank" rel="noreferrer" className="text-teal-300 underline font-semibold inline-flex items-center gap-1">github.com/new <ExternalLink className="w-3 h-3" /></a> and create a public repository (e.g., <code className="text-white">nina-portfolio</code> or <code className="text-white">yourusername.github.io</code>).
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-white text-sm">
                <span className="w-6 h-6 rounded-full bg-teal-400 text-slate-950 flex items-center justify-center font-black text-xs">2</span>
                Push your code to GitHub
              </div>
              <button
                onClick={copyGitCommands}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1 cursor-pointer"
              >
                {copiedScript ? <Check className="w-3.5 h-3.5 text-teal-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedScript ? 'Copied Commands!' : 'Copy Commands'}</span>
              </button>
            </div>
            <pre className="p-3 rounded-xl bg-slate-900 font-mono text-[11px] text-teal-300 overflow-x-auto border border-slate-800">
{`git init
git add .
git commit -m "My VA Portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main`}
            </pre>
          </div>

          {/* Step 3 */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-white text-sm">
                <span className="w-6 h-6 rounded-full bg-teal-400 text-slate-950 flex items-center justify-center font-black text-xs">3</span>
                Enable Automatic GitHub Pages Deployment
              </div>
              <button
                onClick={copyWorkflow}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1 cursor-pointer"
              >
                {copiedWorkflow ? <Check className="w-3.5 h-3.5 text-teal-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedWorkflow ? 'Copied YAML!' : 'Copy Workflow file'}</span>
              </button>
            </div>
            <p className="text-slate-400 text-xs pl-8">
              In your GitHub repository:
            </p>
            <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-300 pl-8">
              <li>Click on <strong>Settings</strong> &gt; <strong>Pages</strong>.</li>
              <li>Under <strong>Build and deployment &gt; Source</strong>, select <strong>GitHub Actions</strong>.</li>
              <li>Create a file named <code className="text-teal-300">.github/workflows/deploy.yml</code> with the copied workflow.</li>
              <li>Every time you commit changes, your portfolio updates automatically at <span className="text-white font-mono">https://YOUR_USERNAME.github.io/YOUR_REPO/</span>!</li>
            </ol>
          </div>

          {/* Quick Note about Photos */}
          <div className="p-4 rounded-2xl bg-teal-950/40 border border-teal-500/30 text-xs text-teal-200 flex items-start gap-3">
            <Rocket className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white font-bold block mb-1">Tip for your profile photo on GitHub Pages:</strong>
              Place your image as <code className="text-teal-300 font-mono">public/profile.jpg</code> in your repo. The website will automatically detect and display it!
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-teal-400 text-slate-950 font-bold text-xs hover:bg-teal-300 transition-colors cursor-pointer"
          >
            Got It, Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
