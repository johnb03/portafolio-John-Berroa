# Plan — Portafolio John Berroa

> Fecha: 07/08/2026 · Stack: **Astro 7** (+ Vue disponible) · Deploy: GitHub Pages (`/portafolio-John-Berroa`)

## Objetivo

Reconstruir el portafolio siguiendo el diseño de **Figma** (desktop `31:270` + mobile `32:79`), con componentes reusables en Astro, transiciones de vista nativas, un blog con el mismo estilo y estructura responsive en **una sola** fuente de HTML.

## Diseño de referencia

- Archivo Figma: `Portafolio John` (`23DS5twA4xVsB2ukMyPYf1`)
- Desktop: `node-id=31-270` — Hero + proyectos + About + CTA + footer
- Mobile: `node-id=32-79` — avatar circular, pills apiladas, cards 1 columna

## Token del sistema de diseño

Ver `style.md`. Resumen: fondo `#020202`, acento `#FFCC00`, texto `#FFFFFF`, superficie `#1B1B1B`, muted `#D9D9D9`, texto sobre acento `#07080A`. Títulos **League Spartan**, cuerpo **Inter**.

## Rutas

| Ruta                | Archivo                            | Contenido                                                |
| ------------------- | ---------------------------------- | -------------------------------------------------------- |
| `/`                 | `src/pages/index.astro`            | Hero + Proyectos + About                                 |
| `/proyectos/[slug]` | `src/pages/proyectos/[slug].astro` | Página por proyecto (getStaticPaths)                     |
| `/blog`             | `src/pages/blog/index.astro`       | Lista de posts                                           |
| `/blog/[slug]`      | `src/pages/blog/[slug].astro`      | Post individual                                          |
| `/proyectos`        | `src/pages/proyectos.astro`        | **Vieja, se conserva intacta** (a fusionar más adelante) |

## Datos

- `src/data/projects.ts` — array central de proyectos. **Agregar un proyecto = agregar un objeto** (slug, title, subtitle, description, image). Las cards y las páginas se generan solas.
- Blog: **content collections** (`src/content/blog/*.md`) con esquema en `src/content.config.ts`.

## Componentes reusables

- `Button.astro` — pill con variantes (`primary`, `ghost`)
- `ProjectCard.astro` — imagen + título + subtítulo + flecha; **hover scale solo en la imagen**, `cursor: pointer`
- `BlogCard.astro` — misma base de card para posts
- `Nav.astro`, `Hero.astro`, `ProjectsSection.astro`, `About.astro`, `Footer.astro`
- `Layout.astro` — `<ClientRouter />`, fuentes, CSS global, Nav + slot + Footer

## Comportamientos

- **View transitions** (`ClientRouter`) en toda navegación interna.
- **Morph de imagen**: la imagen del card y la de la página del proyecto comparten `transition:name="project-<slug>"` → al hacer clic la imagen se agranda y viaja al centro (transición de elemento compartido del navegador).
- Hover: scale `1.05` sobre `img` de la card (la card no se mueve). `cursor: pointer` en cards y enlaces.
- Enlaces externos (Contacto, Resume, Redes, "Ver proyecto") quedan como `href="#"` — **se cargan manualmente después**.

## Imágenes

- Perfil: `public/John-Berroa.png` (desktop) y `public/john_berroa-mobile.png` (mobile).
- Cards de proyectos: **placeholders** desde `public/` (imágenes del proyecto viejo). Las reales del diseño se descargan de Figma en la fase de imágenes.

## Fases

1. **Estructura** (esta fase) — HTML semántico, componentes, responsive, transiciones.
2. **Imágenes** — descargar assets reales de Figma a `public/`.
3. **Tipografía** — refinar pesos/escalas.
4. **Colores** — pulido visual con los tokens.
5. **Contenido** — textos reales de proyectos y posts (los completa el dueño del proyecto).

## Cómo editar contenido

- Proyectos: `src/data/projects.ts`
- Posts del blog: `src/content/blog/*.md`
- Enlaces externos: buscar `href="#"` en `Nav.astro`, `Footer.astro`, `Button.astro`
- todo excelente
