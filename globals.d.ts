// Ambient declarations for non-code imports.
// Lets TypeScript accept side-effect CSS imports (e.g. `import "./globals.css"`)
// even before Next.js generates next-env.d.ts (which is gitignored).
declare module "*.css";
