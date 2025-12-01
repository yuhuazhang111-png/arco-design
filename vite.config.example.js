import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import modifyVars from './src/theme/modify-vars.json';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: modifyVars,
        javascriptEnabled: true,
      },
    },
  },
});

