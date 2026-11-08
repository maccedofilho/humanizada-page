# Humanizada

Landing page da Humanizada, com Astro, TypeScript em modo estrito e CSS nativo.
O escopo atual inclui a primeira tela (cabeçalho, abertura e imagem de ambiente) e a segunda seção de cuidados faciais e corporais.

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
- `src/components/CareSection.astro`: segunda seção, com três cuidados e um botão de avaliação.
- `src/data/care.ts`: categorias, títulos, descrições e link de agendamento.
- `src/styles/global.css`: estilos globais.
- `astro.config.mjs`: configuração da geração estática.

## Conteúdo e interações

- A paleta usa fundo claro, oliva e rosé; os tokens ficam no início do CSS.
- Os botões abrem o WhatsApp público do perfil da clínica: `5547988788752`. A seleção Facial/Corporal troca os três cuidados apresentados e atualiza a mensagem pré-preenchida nos dois botões de avaliação. A seta da faixa leva à segunda seção; o site não envia mensagens automaticamente.
- “A clínica” abre o Instagram enquanto não há uma seção própria.
- A foto `src/assets/clinic-interior-placeholder.png` é provisória e foi gerada com IA: ambiente claro com cortina, madeira e ramo de oliveira. Não representa as instalações reais. Substitua o arquivo/importação pela fotografia aprovada da clínica. O componente `Image` do Astro gera as variantes WebP responsivas. A imagem é decorativa e não tem legenda na interface.
- Fontes hospedadas localmente em `public/fonts`, com licenças OFL: Manrope na abertura e Instrument Sans na segunda seção.
- Animações de entrada, movimento sutil da foto ao cursor e transições dos controles respeitam `prefers-reduced-motion`.
- A segunda seção não usa fotos, cartões ou acordeão. No desktop, os cuidados ocupam três colunas; no celular, ficam em sequência vertical. Os textos faciais seguem o desenho aprovado; os corporais são textos de trabalho sobre os temas apresentados no perfil e podem ser ajustados em `src/data/care.ts` com a clínica.

O [prompt da imagem provisória](src/assets/clinic-interior-placeholder.prompt.txt) registra o briefing utilizado na ferramenta nativa de geração de imagens.
