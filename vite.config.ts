import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({base:'/fitforge/',plugins:[react(),VitePWA({registerType:'autoUpdate',includeAssets:['icon-192.png','icon-512.png','icon.svg','exercises/*.svg'],manifest:{id:'/fitforge/',lang:'es',name:'FitForge - Mi entrenamiento',short_name:'FitForge',description:'Rutinas, progreso y registro de entrenamientos',theme_color:'#0b1220',background_color:'#0b1220',display:'standalone',start_url:'./',scope:'./',icons:[{src:'icon-192.png',sizes:'192x192',type:'image/png',purpose:'any'},{src:'icon-512.png',sizes:'512x512',type:'image/png',purpose:'any'}]},workbox:{globPatterns:['**/*.{js,css,html,svg,png,ico}']}})]});
