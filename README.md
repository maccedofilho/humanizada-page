# Humanizada

Landing page da Humanizada, com Astro, TypeScript em modo estrito e CSS nativo.
O escopo atual inclui a primeira tela (cabeçalho, abertura e imagem de ambiente), a segunda seção de cuidados faciais e corporais, a terceira seção de apresentação da clínica e a quarta seção de contato para agendar uma avaliação.

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
- `src/components/ClinicSection.astro`: terceira seção, com apresentação da clínica, imagem provisória e link para o Instagram.
- `src/components/ContactSection.astro`: quarta seção, com convite à avaliação e botão para conversar pelo WhatsApp.
- `src/data/care.ts`: categorias, títulos, descrições e link de agendamento.
- `src/styles/global.css`: estilos globais.
- `astro.config.mjs`: configuração da geração estática.

## Conteúdo e interações

- A paleta usa fundo claro, oliva e rosé; os tokens ficam no início do CSS.
- Os botões abrem o WhatsApp público do perfil da clínica: `5547988788752`. A seleção Facial/Corporal troca os três cuidados apresentados e atualiza a mensagem pré-preenchida nos dois botões de avaliação. A seta da faixa leva à segunda seção; o site não envia mensagens automaticamente.
- “A clínica” nos menus leva à terceira seção (`#a-clinica`). O link dentro dessa seção abre o Instagram em outra aba.
- “Contato” nos menus leva à quarta seção (`#contato`). Seu botão abre o WhatsApp com uma mensagem geral de agendamento, independente da seleção Facial/Corporal.
- A foto `src/assets/clinic-interior-placeholder.png` é provisória e foi gerada com IA: ambiente claro com cortina, madeira e ramo de oliveira. Não representa as instalações reais. Substitua o arquivo/importação pela fotografia aprovada da clínica. O componente `Image` do Astro gera as variantes WebP responsivas. A imagem é decorativa e não tem legenda na interface.
- Fontes hospedadas localmente em `public/fonts`, com licenças OFL: Manrope na abertura e Instrument Sans nas demais seções.
- Animações de entrada, movimento sutil da foto ao cursor e transições dos controles respeitam `prefers-reduced-motion`.
- A segunda seção não usa fotos, cartões ou acordeão. No desktop, os cuidados ocupam três colunas; no celular, ficam em sequência vertical. Os textos faciais seguem o desenho aprovado; os corporais são textos de trabalho sobre os temas apresentados no perfil e podem ser ajustados em `src/data/care.ts` com a clínica.
- A terceira seção segue o desenho aprovado: foto à esquerda e texto à direita no desktop; texto antes da foto no celular. Reutiliza a imagem provisória, sem legenda e com carregamento sob demanda. A entrada suave ao rolar respeita `prefers-reduced-motion`; o conteúdo continua visível sem JavaScript.
- A quarta seção mantém o desenho aprovado: faixa rosé clara, título à esquerda e texto com um único botão oliva à direita. No celular, o conteúdo fica em sequência e o botão ocupa a largura disponível. Reutiliza as interações do botão de avaliação e funciona sem JavaScript.

O [prompt da imagem provisória](src/assets/clinic-interior-placeholder.prompt.txt) registra o briefing utilizado na ferramenta nativa de geração de imagens.
