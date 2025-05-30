# SavoriaFrontend

SavoriaFrontend es una aplicación web desarrollada con React y Vite que representa la página oficial de Savoria, un restaurante ficticio enfocado en la excelencia culinaria, la sostenibilidad y la experiencia del cliente. El proyecto está completamente en español y cuenta con un diseño moderno, intuitivo y adaptable a dispositivos móviles.

## Características principales

- **Página de inicio:** Presentación del restaurante, valores, especial del día y testimonios de clientes.
- **Menú interactivo:** Visualización de platos por categorías (especial del día, entradas, platos principales, postres y bebidas) con imágenes y descripciones detalladas.
- **Sobre nosotros:** Historia, filosofía y equipo del restaurante.
- **Autenticación:** Registro e inicio de sesión de usuarios con validaciones básicas.
- **Navegación y pie de página:** Navegación clara y accesible, información de contacto, horarios y enlaces útiles.
- **Diseño responsive:** Adaptado para una experiencia óptima en dispositivos móviles y de escritorio.

## Estructura del proyecto

```
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Menu.jsx
│   │   └── Register.jsx
│   ├── styles/
│   │   ├── About.css
│   │   ├── App.css
│   │   ├── Auth.css
│   │   ├── Footer.css
│   │   ├── globals.css
│   │   ├── Home.css
│   │   ├── Menu.css
│   │   └── Navbar.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Instalación y ejecución

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd FrontendBoceto
   ```
2. **Instala las dependencias:**
   ```bash
   npm install
   ```
3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
4. Accede a la aplicación en [http://localhost:5173](http://localhost:5173)

## Scripts disponibles
- `npm run dev`: Inicia el servidor de desarrollo con Vite.
- `npm run build`: Genera la versión de producción.
- `npm run preview`: Previsualiza la build de producción.

## Tecnologías utilizadas
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- CSS Modules

## Autenticación
El sistema de autenticación es simulado y gestionado mediante el contexto de React (`AuthContext`). Permite el registro e inicio de sesión de usuarios, mostrando mensajes de error en caso de datos incorrectos.

## Personalización
Puedes modificar los estilos en la carpeta `src/styles` y los textos o imágenes en los archivos de la carpeta `src/pages` y `src/components`.

## Créditos de imágenes
Las imágenes utilizadas provienen de [Pexels](https://pexels.com/) y son libres de derechos para uso no comercial.

## Licencia
Este proyecto es solo para fines educativos y demostrativos.
