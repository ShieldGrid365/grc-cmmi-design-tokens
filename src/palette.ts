/**
 * Single source of truth for all resolved color values.
 *
 * Edit this file to change any color. Then run:
 *   pnpm generate   — regenerates tokens.css (the --color-* custom properties)
 *   pnpm build      — rebuilds dist/ with the updated TS exports
 *
 * tokens.css is a generated artifact — never edit it by hand. All non-color CSS
 * (logo vars, shadows, resets, scrollbar, etc.) lives in theme.css.
 */

export const INDIGO_SCALE = {
  50: "#EFF0FE",
  100: "#E0E0FC",
  200: "#C1C2FA",
  300: "#A2A3F7",
  400: "#8385F5",
  500: "#6366F1",
  600: "#3F44EC",
  700: "#1F27CF",
  800: "#131994",
  900: "#080C5E",
  950: "#040642",
} as const;

export type IndigoScale = typeof INDIGO_SCALE;

const _DARK = {
  // Backgrounds
  bg: "#0D1019",
  bgSurface: "#121622",
  bgElevated: "#181D2C",
  bgHover: "rgba(99, 102, 241, 0.08)",

  // Borders
  border: "rgba(255, 255, 255, 0.07)",
  borderActive: "rgba(99, 102, 241, 0.4)",

  // Brand: indigo
  indigo: INDIGO_SCALE[500],
  indigoMuted: "rgba(99, 102, 241, 0.25)",
  indigoGlow: "rgba(99, 102, 241, 0.15)",
  indigoLight: "rgba(99, 102, 241, 0.12)",
  indigoBorder: "rgba(99, 102, 241, 0.3)",

  // Status: green
  green: "#3FB950",
  greenMuted: "rgba(63, 185, 80, 0.15)",
  greenLight: "rgba(63, 185, 80, 0.1)",
  greenBorder: "rgba(63, 185, 80, 0.25)",

  // Status: amber
  amber: "#E3B341",
  amberMuted: "rgba(227, 179, 65, 0.15)",
  amberLight: "rgba(227, 179, 65, 0.1)",
  amberBorder: "rgba(227, 179, 65, 0.25)",

  // Status: red
  red: "#F85149",
  redMuted: "rgba(248, 81, 73, 0.25)",
  redLight: "rgba(248, 81, 73, 0.1)",
  redBorder: "rgba(248, 81, 73, 0.25)",

  // Status: blue
  blue: "#58A6FF",
  blueMuted: "rgba(88, 166, 255, 0.15)",
  blueLight: "rgba(88, 166, 255, 0.1)",
  blueBorder: "rgba(88, 166, 255, 0.25)",

  // Extended: orange
  orange: "#F0883E",
  orangeLight: "rgba(240, 136, 62, 0.1)",
  orangeBorder: "rgba(240, 136, 62, 0.25)",

  // Extended: violet
  violet: "#8B5CF6",
  violetLight: "rgba(139, 92, 246, 0.1)",
  violetBorder: "rgba(139, 92, 246, 0.3)",

  // Text
  textPrimary: "rgba(255, 255, 255, 0.95)",
  textSecondary: "rgba(255, 255, 255, 0.55)",
  textMuted: "rgba(255, 255, 255, 0.45)",

  // Overlay
  overlay: "rgba(0, 0, 0, 0.65)",
} as const;

const _LIGHT = {
  // Backgrounds
  bg: "#F8FAFC",
  bgSurface: "#FFFFFF",
  bgElevated: "#F1F5F9",
  bgHover: "rgba(99, 102, 241, 0.06)",

  // Borders
  border: "rgba(15, 23, 42, 0.08)",
  borderActive: "rgba(99, 102, 241, 0.45)",

  // Brand: indigo
  indigo: INDIGO_SCALE[600],
  indigoMuted: "rgba(79, 70, 229, 0.12)",
  indigoGlow: "rgba(99, 102, 241, 0.1)",
  indigoLight: "rgba(79, 70, 229, 0.08)",
  indigoBorder: "rgba(79, 70, 229, 0.22)",

  // Status: green
  green: "#16A34A",
  greenMuted: "rgba(22, 163, 74, 0.12)",
  greenLight: "rgba(22, 163, 74, 0.1)",
  greenBorder: "rgba(22, 163, 74, 0.25)",

  // Status: amber
  amber: "#D97706",
  amberMuted: "rgba(217, 119, 6, 0.12)",
  amberLight: "rgba(217, 119, 6, 0.1)",
  amberBorder: "rgba(217, 119, 6, 0.25)",

  // Status: red
  red: "#DC2626",
  redMuted: "rgba(220, 38, 38, 0.18)",
  redLight: "rgba(220, 38, 38, 0.1)",
  redBorder: "rgba(220, 38, 38, 0.25)",

  // Status: blue
  blue: "#2563EB",
  blueMuted: "rgba(37, 99, 235, 0.12)",
  blueLight: "rgba(37, 99, 235, 0.08)",
  blueBorder: "rgba(37, 99, 235, 0.22)",

  // Extended: orange
  orange: "#EA580C",
  orangeLight: "rgba(234, 88, 12, 0.1)",
  orangeBorder: "rgba(234, 88, 12, 0.25)",

  // Extended: violet
  violet: "#7C3AED",
  violetLight: "rgba(124, 58, 237, 0.08)",
  violetBorder: "rgba(124, 58, 237, 0.25)",

  // Text
  textPrimary: "rgba(15, 23, 42, 0.95)",
  textSecondary: "rgba(15, 23, 42, 0.65)",
  textMuted: "rgba(15, 23, 42, 0.45)",

  // Overlay
  overlay: "rgba(15, 23, 42, 0.45)",
} as const;

export const PALETTE = { dark: _DARK, light: _LIGHT } as const;

export type ThemePalette = typeof _DARK;
