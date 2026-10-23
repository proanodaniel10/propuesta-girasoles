# 🌻 Una pregunta bajo los girasoles — edición de recuerdos

Una web romántica interactiva con azul marino, girasoles en movimiento, carta, música instrumental original, tres fotografías integradas y una propuesta especial. Todo funciona como archivos estáticos, sin backend.

## Estructura

```
propuesta_girasoles_actualizada/
├── index.html
├── style.css
├── script.js
├── fotos/
│   ├── cascada.jpeg
│   ├── espejo.jpeg
│   └── selfie.jpeg
├── music/
│   └── musica-romantica.mp3
└── README.md
```

## Cómo probarlo

Abre `index.html` en Chrome o Edge. Presiona «Descubrir mi sorpresa» para empezar; la música comienza tras pulsar el botón (los navegadores bloquean normalmente el autoplay con sonido). Navega con los botones de cada escena.

Las tres fotos ya vienen integradas: **no hace falta seleccionarlas ni subirlas desde la página**. Haz clic para ampliarlas, navega con las flechas y cierra con Esc.

## Personalizar nombres

En las primeras líneas de `script.js`, cambia estas dos variables:

```js
const nombreEspecial = ""; // Escribe aquí su nombre, si quieres
const nombreRemitente = ""; // Escribe aquí tu nombre, si quieres
```

## Personalizar las fotografías

Sustituye los archivos en `fotos/` manteniendo el mismo nombre, o actualiza sus rutas en `index.html` y `script.js`. Los títulos y las frases están escritos en `index.html` y también los títulos de la galería ampliada en `script.js`.

## Música

La canción `music/musica-romantica.mp3` es una **melodía instrumental original sintetizada para este proyecto**, sin grabaciones comerciales de terceros. Si quieres tu canción, sustituye este archivo por un MP3 propio con el mismo nombre, o cambia la ruta del `<source>` de `index.html`.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube **el contenido de la carpeta** (no el ZIP sin descomprimir): `index.html`, `style.css`, `script.js`, `fotos/`, `music/` y `README.md`.
3. Abre **Settings → Pages → Build and deployment**.
4. Elige **Deploy from a branch**, rama `main` y carpeta `/(root)`; guarda.
5. Abre el enlace de GitHub Pages cuando se publique. La URL se puede compartir directamente.

**Privacidad:** GitHub Pages público hace visibles las fotografías a cualquiera que tenga el enlace o encuentre el sitio. Publícalas solo si ambas personas están cómodas con ello.

## Interacciones

- Animaciones de fondo, estrellas, girasoles, corazones y pétalos
- Música con reproducir/pausar
- Carta de amor
- Galería de 3 fotos integrada + ampliación y navegación entre fotos
- Propuesta «¿Quieres ser mi novia?» con opciones «Sí, quiero» y «Quiero pensarlo con calma»
- Pantalla de celebración si responde que sí
- Diseño responsive para teléfonos y computadoras
