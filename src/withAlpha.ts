/**
 * Convierte un color CSS a su versión con alpha aplicado.
 * Soporta `rgb()`, `rgba()`, hex (`#rrggbb` / `#rgb`) y CSS vars (`var(--x)`).
 * Para `var(...)` usa `color-mix()` (Chrome 111+ / Firefox 113+ / Safari 16.2+).
 */
export const withAlpha = (color: string, alpha: number): string => {
  if (color.startsWith('var(')) {
    const pct = Math.round(alpha * 100)
    return `color-mix(in srgb, ${color} ${pct}%, transparent)`
  }
  if (color.startsWith('rgba')) return color
  if (color.startsWith('rgb(')) {
    return color.replace('rgb(', 'rgba(').replace(')', `,${alpha})`)
  }
  if (color.startsWith('#')) {
    const hex = color.slice(1)
    const expanded = hex.length === 3
      ? hex.split('').map(c => c + c).join('')
      : hex
    const r = parseInt(expanded.slice(0, 2), 16)
    const g = parseInt(expanded.slice(2, 4), 16)
    const b = parseInt(expanded.slice(4, 6), 16)
    return `rgba(${r},${g},${b},${alpha})`
  }
  return color
}
