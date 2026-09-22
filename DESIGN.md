---
name: Padrinhos RH
description: Sistema editorial institucional premium para uma consultoria de gestão de pessoas próxima, experiente e precisa.
colors:
  institutional-blue: "#08283d"
  deep-blue: "#041b2a"
  restrained-gold: "#8f6827"
  luminous-gold: "#e4bf78"
  paper: "#ffffff"
  warm-wash: "#f3f1eb"
  cool-fog: "#e8ecec"
  muted-slate: "#5c6a72"
  structural-line: "#ced5d5"
typography:
  display:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(3.8rem, 6.4vw, 6rem)"
    fontWeight: 500
    lineHeight: 1.03
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(3rem, 5vw, 5.1rem)"
    fontWeight: 500
    lineHeight: 1.03
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 600
    lineHeight: 1.03
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  none: "0"
  circle: "50%"
spacing:
  control-x: "1.25rem"
  control-y: "1rem"
  section-mobile: "5.5rem"
  section-fluid: "clamp(6.5rem, 10vw, 10rem)"
  container-gutter: "4vw"
  container-gutter-mobile: "1.25rem"
components:
  button-primary:
    backgroundColor: "{colors.institutional-blue}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "{spacing.control-y} {spacing.control-x}"
    height: "56px"
  button-primary-hover:
    backgroundColor: "transparent"
    textColor: "{colors.institutional-blue}"
  button-gold:
    backgroundColor: "{colors.luminous-gold}"
    textColor: "{colors.deep-blue}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "{spacing.control-y} {spacing.control-x}"
    height: "56px"
---

# Design System: Padrinhos RH

## Overview

**Creative North Star: "Editorial Institucional Premium"**

O sistema traduz autoridade em gestão de pessoas com a disciplina de uma publicação executiva: tipografia serifada expressiva, composição assimétrica, capítulos numerados e muito espaço em branco. A elegância vem da escala, do ritmo e da precisão das linhas, sem depender de ornamentos ou efeitos de interface.

O azul institucional sustenta confiança e profundidade; o dourado aparece de forma contida para marcar ênfases, índices e momentos de ação. A alternância entre papel branco, wash quente e painéis azul-escuros organiza a narrativa em capítulos. A seção de fundadores funciona como assinatura humana de autoridade, combinando retrato, credenciais, citações e etiquetas editoriais.

**Key Characteristics:**

- Hierarquia editorial de alto contraste, com Bodoni Moda em títulos e Manrope em leitura e interface.
- Composição ampla e assimétrica, guiada por colunas, índices e divisórias finas.
- Azul profundo como base institucional e dourado raro como sinal de relevância.
- Superfícies planas, sem cartões elevados, com profundidade criada por blocos tonais.
- Fundadores apresentados como prova de autoridade e proximidade, não como perfis genéricos.

## Colors

A paleta equilibra sobriedade corporativa, calor humano e contraste editorial; os valores normativos estão no frontmatter.

### Primary

- **Azul Institucional:** cor principal de texto, botões, painéis de metodologia e elementos de autoridade.
- **Azul Profundo:** reservado para CTA final, rodapé e áreas que encerram a narrativa com maior densidade.

### Secondary

- **Dourado Contido:** marca palavras em itálico, índices, filetes, estados abertos e pequenos sinais de prestígio.
- **Dourado Luminoso:** versão de alto contraste para ações e destaques sobre fundos escuros.

### Neutral

- **Papel:** superfície principal e cor de texto sobre azul.
- **Wash Quente:** alternância suave para capítulos extensos, especialmente serviços e processo.
- **Névoa Fria:** base discreta para mídia e áreas de apoio.
- **Ardósia Suave:** texto secundário e descrições longas.
- **Linha Estrutural:** divisórias, bordas de listas e organização de colunas.

### Named Rules

**The Gold Restraint Rule.** O dourado sinaliza ênfase, sequência ou ação; nunca deve se tornar uma grande superfície dominante.

**The Institutional Contrast Rule.** Em fundos escuros, use branco para conteúdo principal, dourado luminoso para acentos e azuis acinzentados claros para texto secundário.

## Typography

**Display Font:** Bodoni Moda, com Georgia como fallback.

**Body Font:** Manrope, com Arial como fallback.

**Character:** Bodoni Moda confere presença editorial e repertório clássico aos grandes títulos. Manrope mantém a comunicação contemporânea, legível e objetiva em textos, navegação, rótulos e controles.

### Hierarchy

- **Display** (peso 500, escala fluida até 6rem, entrelinha 1.03): títulos de abertura, limitados a cerca de 10–11 caracteres por linha para formar uma silhueta vertical forte.
- **Headline** (peso 500, escala fluida até 5.1rem, entrelinha 1.03): títulos de seção, geralmente limitados a aproximadamente 13 caracteres por linha.
- **Service Title** (Bodoni Moda, peso 500, escala fluida até 4.4rem, entrelinha 0.98): nomeia cada capítulo de serviço com máxima compactação vertical.
- **Title** (Manrope, peso 600, cerca de 1.3–1.7rem): subtítulos operacionais, benefícios e etapas.
- **Body** (Manrope, peso 400, 1rem, entrelinha 1.7): leitura corrente; textos de listas e descrições densas recuam para cerca de 0.9–0.92rem.
- **Lead** (Manrope, peso 600, escala fluida de 1.15–1.4rem): introduções que precisam manter autoridade sem competir com os títulos.
- **Label** (Manrope, peso 700, 0.65–0.72rem, tracking de 0.09–0.14em, caixa alta): eyebrows, índices, funções, etiquetas e metadados.
- **Editorial Accent** (Bodoni Moda, peso 400, itálico): palavras-chave dentro de títulos; sempre recebe o dourado correspondente ao fundo.

### Named Rules

**The Two-Voice Rule.** Bodoni Moda expressa ideia, capítulo e assinatura; Manrope explica, orienta e aciona.

**The Editorial Italic Rule.** Use itálico serifado apenas para uma expressão curta dentro de um título, nunca para parágrafos inteiros.

## Layout

O conteúdo ocupa um contêiner central de até 1280px, com margem lateral fluida de 4vw. As seções têm respiro vertical amplo e responsivo, entre 6.5rem e 10rem; em telas pequenas, o ritmo se estabiliza em 5.5rem e o gutter lateral em 1.25rem.

As composições principais usam duas colunas assimétricas: uma coluna de tese ou título e outra de conteúdo sequencial. Em desktop, títulos laterais podem permanecer fixos a 130px do topo enquanto listas e capítulos avançam. Serviços acrescentam uma coluna estreita de índice e alternam a posição de título e conteúdo entre linhas para criar cadência editorial.

Em larguras de até 980px, grids complexos viram uma ou duas colunas, elementos sticky retornam ao fluxo e a navegação textual desaparece. Até 680px, a página se torna estritamente linear: botões ocupam toda a largura disponível, serviços abandonam o grid, fundadores empilham e o hero usa vídeo ou poster em tela cheia com scrim escuro.

**The Chapter Rhythm Rule.** Cada bloco deve ter começo reconhecível por mudança tonal, título de grande escala, eyebrow ou índice e uma divisória estrutural.

**The Desktop Asymmetry Rule.** Prefira proporções 0.65/1.35, 0.75/1.25 ou 0.85/1.15 a colunas simétricas quando houver tese e desenvolvimento.

## Elevation & Depth

O sistema é plano por padrão e não usa sombras em cartões ou seções. A profundidade nasce da alternância tonal, de bordas de 1px, de recortes fotográficos e da sobreposição pontual da legenda sobre a imagem. O cabeçalho flutua apenas pela combinação de transparência branca, blur e borda inferior; no hero móvel, uma sombra de texto muito difusa reforça a leitura sobre vídeo.

**The Flat Authority Rule.** Não use sombras para tornar módulos importantes; use escala tipográfica, contraste, espaço e linhas estruturais.

## Shapes

A linguagem formal é retilínea: botões, legendas, painéis, listas e blocos não têm arredondamento. Linhas horizontais finas organizam conteúdo e substituem caixas. O círculo aparece como gesto gráfico isolado no hero e como exceção deliberada à geometria ortogonal.

Imagens usam recortes editoriais amplos, com proporção 2:1 em desktop e 4:3 no mobile. A legenda da foto é um retângulo azul sobreposto no desktop e volta ao fluxo no mobile.

**The Square Interface Rule.** Controles e contêineres permanecem com cantos retos; a marcação circular é decorativa e não define a forma dos componentes.

## Components

### Buttons

- **Shape:** retangular, sem raio, com borda de 1px e altura mínima de 56px.
- **Primary:** fundo azul institucional, texto branco, rótulo em caixa alta e distribuição horizontal entre texto e seta.
- **Gold:** fundo dourado luminoso e texto azul profundo; usado como CTA principal em superfícies escuras e no hero móvel.
- **Light:** fundo branco e texto azul institucional; usado sobre painéis escuros quando a ação pede menor ênfase que o dourado.
- **Hover:** o botão principal perde o preenchimento e sobe 2px; variantes claras e douradas transitam para branco. A animação dura 250ms.
- **Focus:** contorno dourado de 2px com afastamento de 5px.
- **Compact:** altura mínima de 46px e menor espaçamento interno para o cabeçalho.

### Navigation

- Cabeçalho sticky de 88px em desktop e 78px no mobile, com branco quase opaco, blur leve e borda inferior fina.
- Links usam Manrope sem caixa alta e recebem um sublinhado dourado que cresce da esquerda no hover.
- Até 980px, os links de navegação são removidos e permanece o CTA compacto.

### Editorial Lists

- Itens de dores, diferenciais e etapas combinam uma coluna numérica estreita com conteúdo textual.
- Divisórias de 1px mantêm o ritmo; não há caixas individuais nem preenchimentos decorativos.
- Números usam Bodoni Moda ou rótulo compacto em dourado para funcionar como índice, não como ícone.

### Service Chapters

- Cada serviço ocupa uma faixa completa, separada por linhas horizontais.
- O índice aparece em Manrope caixa alta; o título usa Bodoni Moda em escala de display; o conteúdo ocupa uma coluna própria.
- Capítulos pares alternam título e conteúdo no desktop. A alternância desaparece no mobile para preservar a ordem de leitura.

### Disclosure Rows

- Metodologias e perguntas frequentes usam linhas expansíveis, sem cartões ou fundos individuais.
- O resumo distribui título e sinal de expansão nas extremidades; o sinal “+” gira 45° quando aberto.
- Em metodologias, o estado aberto e os índices usam dourado luminoso sobre azul institucional.
- O foco segue o mesmo contorno dourado dos links e botões.

### Founder Profiles

- A fotografia conjunta precede dois perfis lado a lado, separados por uma linha vertical.
- Nome em Bodoni Moda de grande escala, função em label dourada, credencial em Manrope forte e citação serifada dourada.
- Competências aparecem como etiquetas tipográficas sem cápsula, marcadas apenas por um filete dourado inferior.

## Do's and Don'ts

### Do:

- **Do** preservar a dupla Bodoni Moda + Manrope e a divisão clara entre voz editorial e voz funcional.
- **Do** construir hierarquia com escala, contraste tonal, espaço amplo e divisórias finas.
- **Do** usar o dourado em palavras curtas, índices, filetes, foco e CTAs selecionados.
- **Do** manter capítulos longos escaneáveis por meio de numeração, alternância de fundo e títulos de grande escala.
- **Do** adaptar a composição no mobile para uma narrativa linear e botões de largura total.
- **Do** tratar a apresentação dos fundadores como assinatura de autoridade, combinando evidência humana e credenciais.

### Don't:

- **Don't** transformar o dourado em fundo predominante, gradiente ou ornamento recorrente.
- **Don't** introduzir cartões arredondados, sombras de elevação ou componentes em formato de cápsula.
- **Don't** usar Bodoni Moda em textos funcionais longos ou Manrope para substituir os títulos editoriais principais.
- **Don't** comprimir o espaçamento vertical a ponto de apagar a sensação de capítulos.
- **Don't** manter layouts alternados ou colunas complexas no mobile quando isso comprometer a ordem de leitura.
- **Don't** acrescentar ilustrações ou ícones genéricos onde índices tipográficos, linhas e fotografia já cumprem a função.
