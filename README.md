# Humanizada

Base de uma landing page estática com Astro, TypeScript em modo estrito e CSS nativo.
A página inicial contém apenas um placeholder; o design e as animações serão desenvolvidos depois.

## Desenvolvimento

Use Node.js 22.23.4 ou superior.

```sh
npm install
npm run dev
```

## Validação e publicação

```sh
npm run check
npm run build
```

O build estático é gerado em `dist/`. Use `npm run preview` para conferir o resultado localmente.

## Arquivos principais

- `src/pages/index.astro`: página inicial.
- `src/styles/global.css`: estilos globais.
- `astro.config.mjs`: configuração da geração estática.
