// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: '0.0.0.0', // Bind to all available network interfaces
  //   port: 5174, // Specify the port you want to use
  // },
});