/**
 * Generates tokens.css (the color custom properties) from palette.ts.
 *
 * Usage: pnpm generate
 *
 * This OVERWRITES tokens.css completely — it is a build artifact, never edited
 * by hand. All non-color CSS (logo vars, shadow-panel, resets, scrollbar,
 * autofill, toast rules) lives in theme.css, which is hand-authored and
 * @imports this file at the top.
 */

import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PALETTE, INDIGO_SCALE } from '../src/palette.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TOKENS_CSS = join(__dirname, '..', 'tokens.css');

function toKebab(key: string): string {
  return key.replace(/([A-Z])/g, '-$1').toLowerCase();
}

function themeVars(theme: Record<string, string>): string {
  return Object.entries(theme)
    .map(([k, v]) => `  --color-${toKebab(k)}: ${v};`)
    .join('\n');
}

function indigoScaleVars(): string {
  return Object.entries(INDIGO_SCALE)
    .map(([stop, hex]) => `  --color-indigo-${stop}: ${hex};`)
    .join('\n');
}

const darkContent = [
  indigoScaleVars(),
  themeVars(PALETTE.dark as unknown as Record<string, string>),
].join('\n');
const lightContent = themeVars(PALETTE.light as unknown as Record<string, string>);

const css = `/* AUTO-GENERATED from src/palette.ts by \`pnpm generate\`. Do not edit by hand. */
:root,
[data-theme="dark"] {
${darkContent}
}

[data-theme="light"] {
${lightContent}
}
`;

writeFileSync(TOKENS_CSS, css);
console.log('tokens.css regenerated from palette.ts');
