# Santuarios

App para el móvil con los 152 santuarios de *Zelda: Tears of the Kingdom*:

- Lista con los nombres de la versión española del juego
- Buscador por nombre (en español o en inglés) o por zona
- Checklist para marcar los santuarios completados, con barra de progreso
- Botón a YouTube con la solución de cada santuario
- Se instala en el móvil y funciona sin conexión

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La app completa (diseño, datos y código) |
| `manifest.json` | Nombre, colores e icono al instalarla |
| `sw.js` | Hace que se pueda instalar y que funcione sin conexión |
| `icono-192.png`, `icono-512.png` | Icono de la app |

## Publicarla en GitHub Pages

1. En GitHub, crea un repositorio nuevo llamado `santuarios` (público).
2. Pulsa **Add file → Upload files** y sube **todos** los archivos de esta carpeta.
3. Ve a **Settings → Pages**.
4. En **Branch** elige `main` y la carpeta `/ (root)`, y pulsa **Save**.
5. Espera 1–2 minutos. La app estará en:
   `https://TU-USUARIO.github.io/santuarios/`

## Instalarla en el móvil (Android)

1. Abre esa dirección en **Chrome**.
2. Pulsa el menú **⋮** → **Instalar app** (o **Añadir a pantalla de inicio**).
3. Aparecerá el icono de Santuarios en la pantalla de inicio.

## Actualizarla

1. Sube a GitHub los archivos que hayas cambiado.
2. Abre `sw.js` y sube el número de versión: `santuarios-v1` → `santuarios-v2`.
3. Cierra y vuelve a abrir la app en el móvil (a veces hace falta hacerlo dos veces).

Los santuarios marcados como completados se guardan en el móvil y no se pierden al actualizar.
