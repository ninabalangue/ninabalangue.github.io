import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: './',
    plugins: [
      react(), 
      tailwindcss(),
      {
        name: 'save-profile-photo-api',
        configureServer(server) {
          server.middlewares.use('/api/upload-profile-photo', (req, res) => {
            if (req.method === 'POST') {
              const chunks: any[] = [];
              req.on('data', chunk => chunks.push(chunk));
              req.on('end', () => {
                const buffer = Buffer.concat(chunks);
                fs.writeFileSync(path.resolve(import.meta.dirname, 'public/profile.png'), buffer);
                try {
                  fs.writeFileSync(path.resolve(import.meta.dirname, 'profile.png'), buffer);
                } catch {}
                try {
                  if (fs.existsSync(path.resolve(import.meta.dirname, 'dist'))) {
                    fs.writeFileSync(path.resolve(import.meta.dirname, 'dist/profile.png'), buffer);
                  }
                } catch {}
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, size: buffer.length }));
              });
            } else {
              res.writeHead(405);
              res.end('Method Not Allowed');
            }
          });
        }
      }
    ],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
