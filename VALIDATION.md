# Validación de publicación

- `npm run build`: correcto (TypeScript y Vite).
- Manifest generado: identidad `/fitforge/`, modo standalone e iconos PNG 192 y 512 verificados.
- Service worker generado y registro bajo `/fitforge/` verificados.
- Ilustraciones de ejercicios incluidas en la caché offline generada.
- Workflow de GitHub Actions preparado con Node 22, npm ci y despliegue a Pages.
- Pendiente: crear repositorio, activar Pages, ejecutar Actions y probar la URL HTTPS.
- Pendiente: instalación real en Chrome Android y apertura sin conexión después de la primera carga. No se ha probado en un dispositivo Android.

En Android: abrir la URL publicada en Chrome, usar el menú Instalar aplicación, abrir desde el icono y comprobar el modo independiente. Después de una primera carga completa, cerrar, activar modo avión y abrir de nuevo.
