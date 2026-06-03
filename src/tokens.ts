// Los valores apuntan a CSS variables definidas en theme.css.
// Cambian dinámicamente cuando el host modifica `data-theme` en <html>.

export const COLORS = {
  // Base
  bg:          'var(--color-bg)',
  bgSurface:   'var(--color-bg-surface)',
  bgElevated:  'var(--color-bg-elevated)',
  bgHover:     'var(--color-bg-hover)',

  // Borders
  border:       'var(--color-border)',
  borderActive: 'var(--color-border-active)',

  // Brand
  indigo:      'var(--color-indigo)',
  indigoMuted: 'var(--color-indigo-muted)',
  indigoGlow:  'var(--color-indigo-glow)',

  // Status
  green:       'var(--color-green)',
  greenMuted:  'var(--color-green-muted)',
  amber:       'var(--color-amber)',
  amberMuted:  'var(--color-amber-muted)',
  red:         'var(--color-red)',
  redMuted:    'var(--color-red-muted)',
  blue:        'var(--color-blue)',
  blueMuted:   'var(--color-blue-muted)',

  // Text
  textPrimary:   'var(--color-text-primary)',
  textSecondary: 'var(--color-text-secondary)',
  textMuted:     'var(--color-text-muted)',

  // Overlay
  overlay:     'var(--color-overlay)',
} as const;
