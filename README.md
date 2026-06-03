# @shieldgrid365/design-tokens

Design tokens del sistema ShieldGrid365: paleta dark/light, tipografía y helpers
de color. **CSS puro + dos helpers TS framework-agnostic** — sin Tamagui, sin
React, sin react-native-web, cero runtime. Úsalo en cualquier proyecto (Astro,
React, Vue, vanilla) y obtén paridad exacta de color, tema y fuentes.

## Instalación

```bash
pnpm add @shieldgrid365/design-tokens
```

## Uso

### 1. CSS — las variables y estilos base

```ts
import '@shieldgrid365/design-tokens/fonts.css';  // opcional: carga Inter + Plus Jakarta Sans
import '@shieldgrid365/design-tokens/theme.css';  // CSS vars, scrollbars, autofill, etc.
```

Esto define todas las CSS variables (`--color-bg`, `--color-indigo`,
`--color-text-primary`, `--font-body`, …) y los estilos base.

> Si prefieres no usar `fonts.css`, instala e importa los paquetes de fuente por
> tu cuenta: `@fontsource-variable/inter` y `@fontsource-variable/plus-jakarta-sans`.

### 2. Activar un tema

El tema se conmuta con el atributo `data-theme` en `<html>` (`"dark"` o `"light"`).
`dark` es el valor por defecto (`:root`). Por ejemplo, antes de montar la app:

```ts
document.documentElement.setAttribute('data-theme', 'dark'); // o 'light'
```

### 3. JS — tokens y helper de alpha

```ts
import { COLORS, withAlpha } from '@shieldgrid365/design-tokens';

element.style.background = COLORS.bgSurface;          // 'var(--color-bg-surface)'
element.style.borderColor = withAlpha(COLORS.indigo, 0.4); // color-mix(...) sobre la CSS var
```

`COLORS` mapea nombres semánticos a las CSS vars, así que **responde al tema en
vivo**. `withAlpha` aplica transparencia funcionando con CSS vars (`var(...)` →
`color-mix()`), `rgb()`/`rgba()` y hex.

## Contenido

| Export | Qué es |
|---|---|
| `./theme.css` | CSS variables (dark/light), fuentes, scrollbars, fix de autofill, colores de toast. |
| `./fonts.css` | `@import` de Inter Variable + Plus Jakarta Sans Variable. |
| `.` (JS) | `COLORS` (tokens → CSS vars) y `withAlpha` (alpha dinámico). |

## Licencia y marca

El **código** de este paquete (colores, CSS, helpers) se distribuye bajo
[MIT](./LICENSE).

La licencia MIT **no** cubre la marca **ShieldGrid365** ni su logotipo. Este
paquete solo contiene *variables* de logo (`--logo-fill`, `--logo-filter`), no
ningún asset de marca. La identidad visual de ShieldGrid365 es propiedad de
NuTech Corp y queda reservada.
