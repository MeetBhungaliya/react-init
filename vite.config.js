import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname, '');

  return {
    plugins: [TanStackRouterVite({ autoCodeSplitting: false }), react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  };
});
