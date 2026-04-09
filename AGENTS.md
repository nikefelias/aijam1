# AGENTS.md

## 1. Přehled projektu
Projekt "timeline" je jednoduchá single-page aplikace (SPA) vytvořená pro demonstraci integrace s Google Stitch MCP. Obsahuje webovou stránku "Sakura Tokyo" s informacemi o květech sakury v Tokiu. Tech stack: React 19.2.4, TypeScript ~6.0.2, Vite 8.0.4, Tailwind CSS 4.2.2, ESLint 9.39.4.

## 2. Příkazy
| Příkaz | Co dělá | Kdy použít |
|--------|---------|------------|
| `npm run dev` | Spustí Vite dev server na localhost | Pro vývoj a testování |
| `npm run build` | Type-check s TypeScript + build s Vite do `dist/` | Pro produkční build |
| `npm run lint` | Spustí ESLint na celém projektu | Pro kontrolu kódu |
| `npm run preview` | Spustí preview built aplikace | Po buildu pro kontrolu |

## 3. Struktura projektu
```
aijam1/
├── .github/copilot-instructions.md  # Instrukce pro AI agenty
├── .vscode/mcp.json                 # Konfigurace MCP serveru pro Stitch
├── docs/                            # Dokumentace v češtině
│   ├── guides/                      # Návody na nástroje
│   ├── projects/                    # Příklady promptů pro Stitch
│   ├── prompts/                     # Prompty pro AI
│   └── skills/                      # Custom skills pro agenty
├── public/                          # Statické soubory
├── src/                             # Zdrojový kód
│   ├── App.tsx                      # Hlavní komponenta (minimální)
│   ├── SakuraPage.tsx               # Hlavní stránka s obsahem
│   ├── index.css                    # CSS s Tailwind importem
│   ├── main.tsx                     # Entry point aplikace
│   └── assets/                      # Obrázky a další assety
├── tailwind.config.js               # Konfigurace Tailwind CSS
├── vite.config.ts                   # Konfigurace Vite
├── tsconfig*.json                   # TypeScript konfigurace
├── eslint.config.js                 # ESLint konfigurace
└── package.json                     # Závislosti a scripty
```

## 4. Architektura
Tok dat: `src/main.tsx` → `src/App.tsx` → `src/SakuraPage.tsx`. Aplikace je jednoduchá SPA bez routing nebo state managementu. Hlavní komponenta `SakuraPage.tsx` obsahuje všechny sekce stránky (nav, hero, locations, gallery, forecast, map, footer) jako jeden velký komponent. Rozhodnutí: Žádný routing, protože je to jednostránková prezentace; žádný state management, protože obsah je statický. Vzory: Funkční komponenty s hooks, Tailwind utility classes přímo v JSX.

## 5. Konvence
- **TypeScript**: Strict mode s `noUnusedLocals`, `noUnusedParameters`, target ES2023, JSX jako `react-jsx`.
- **CSS**: Tailwind CSS s custom paletou barev (Material Design 3), fonty Noto Serif pro headline, Inter pro body/label. Custom utility třídy v `src/index.css`.
- **ESLint**: Recommended rules pro JS/TS/React, ignoruje `dist/`.
- Ukázka stylu: `<button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-4 rounded-full text-lg font-semibold">Button</button>` (bez středníků v JSX, PascalCase komponenty).