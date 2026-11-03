# FitForge — PWA de entrenamiento

Aplicación React + TypeScript + Vite para registrar entrenamientos, rutinas y progreso. Incluye 3 rutinas Full Body precargadas, 23 ejercicios con ilustraciones SVG esquemáticas locales, instrucciones técnicas, edición de series/repeticiones/descansos, sustitución de ejercicios, creación de días adicionales, temporizador, registro de cargas, récords, gráficas de volumen/peso/cintura, respaldo JSON y soporte offline con service worker.

## Ejecutar

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

Abrir la dirección local mostrada por Vite.

## Compilar

```bash
npm run build
npm run preview
```

## Publicar en GitHub

1. Crear un repositorio vacío llamado `fitforge` en GitHub.
2. En la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Initial FitForge PWA"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/fitforge.git
git push -u origin main
```

3. Para desplegar en GitHub Pages, usar el workflow incluido `.github/workflows/deploy.yml` y configurar en **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. La URL será `https://TU_USUARIO.github.io/fitforge/`.
5. En Android, abrir la URL en Chrome y seleccionar **Instalar aplicación** en el menú. La PWA requiere HTTPS (GitHub Pages lo proporciona).

## Datos y privacidad

Los registros se guardan en `localStorage` del navegador, sin cuenta ni backend. No se sincronizan entre dispositivos. En **Ajustes** se pueden exportar e importar copias JSON. El borrado de datos del navegador puede eliminar el historial si no se ha exportado.

## Imágenes

Las ilustraciones son **esquemas originales orientativos** generados para la aplicación. No son fotografías ni demostraciones anatómicas precisas. Lee las instrucciones de cada ejercicio y pide supervisión si no conoces su técnica.

## Alcance

La aplicación no calcula automáticamente calorías consumidas ni incluye integración con sensores. Los gráficos dependen de los registros introducidos. El temporizador funciona mientras la app está activa; el sistema puede suspenderlo en segundo plano.
