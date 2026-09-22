# Padrinhos RH Editorial Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesenhar a landing page da Padrinhos RH como uma experiência editorial premium, responsiva e orientada à conversão.

**Architecture:** Manter a página estática existente e sua copy, reorganizando a marcação semântica de cada seção e substituindo o sistema visual por uma camada editorial própria. O vídeo mobile, os fundadores, o FAQ e os links de WhatsApp permanecem funcionais.

**Tech Stack:** HTML5, CSS responsivo, JavaScript mínimo, MP4/H.264 e Sites.

## Global Constraints

- Nenhuma seção principal deve repetir a mesma estrutura visual da anterior.
- Não usar grade dominante de cards, gradientes genéricos, excesso de bordas, sombras ou ícones.
- Desktop e mobile devem ter composições intencionais.
- Preservar toda afirmação factual, os fundadores, o vídeo mobile e o CTA de WhatsApp.
- Manter acessibilidade, preferência de redução de movimento e ausência de rolagem horizontal.

---

### Task 1: Sistema editorial e hero

**Files:**
- Modify: `dist/index.html`
- Modify: `dist/style.css`

**Interfaces:**
- Consumes: identidade azul-marinho, dourado, branco e off-white; `hero-mobile.mp4`; `hero-mobile-poster.jpeg`.
- Produces: tokens tipográficos, espaçamento global e hero responsivo usado como referência pelas demais seções.

- [ ] **Step 1: Aplicar a classe visual editorial ao documento**

```html
<body class="editorial-v2">
```

- [ ] **Step 2: Reestruturar o hero desktop como composição assimétrica**

```html
<section id="inicio" class="hero hero-editorial">
  <div class="hero-video" aria-hidden="true">...</div>
  <div class="hero-scrim" aria-hidden="true"></div>
  <div class="wrap hero-editorial-grid">
    <div class="hero-copy">...</div>
    <aside class="hero-signature" aria-label="Posicionamento da Padrinhos RH">...</aside>
  </div>
</section>
```

- [ ] **Step 3: Definir tipografia e escala editorial**

```css
.editorial-v2 h1{font-family:Georgia,serif;font-size:clamp(4rem,7.3vw,7.8rem)}
.editorial-v2 .hero-copy{max-width:58rem}
.editorial-v2 .hero-signature{align-self:end}
```

- [ ] **Step 4: Verificar hero em desktop e mobile**

Run: abrir `http://127.0.0.1:4173/` em 1440×900 e 390×844.

Expected: headline dominante, CTA visível, vídeo cobrindo o mobile, nenhuma rolagem horizontal.

### Task 2: Serviços como capítulos editoriais

**Files:**
- Modify: `dist/index.html`
- Modify: `dist/style.css`

**Interfaces:**
- Consumes: quatro serviços e descrições atuais.
- Produces: sequência `.service-chapter` alternada, sem cards repetitivos.

- [ ] **Step 1: Substituir a grade por capítulos numerados**

```html
<div class="service-chapters">
  <article class="service-chapter">...</article>
  <article class="service-chapter is-offset">...</article>
</div>
```

- [ ] **Step 2: Criar alternância de escala, alinhamento e densidade**

```css
.service-chapter{display:grid;grid-template-columns:9rem minmax(16rem,.8fr) 1fr}
.service-chapter.is-offset{grid-template-columns:1fr minmax(16rem,.8fr) 9rem}
```

- [ ] **Step 3: Preservar CTA após os serviços**

Run: verificar todos os links `.contact`.

Expected: cada `href` aponta para `https://wa.me/5511983324851?...`.

### Task 3: Ritmo visual nas seções intermediárias

**Files:**
- Modify: `dist/index.html`
- Modify: `dist/style.css`

**Interfaces:**
- Consumes: dores, metodologias, diferenciais, fundadores e processo atuais.
- Produces: cinco silhuetas de seção diferentes e coerentes.

- [ ] **Step 1: Transformar dores em diagnóstico editorial vertical**

```css
.pain-list article:nth-child(even){margin-left:clamp(0rem,6vw,5rem)}
```

- [ ] **Step 2: Preservar metodologias como índice escuro expansível**

```css
.method-list details{border-bottom:1px solid rgba(255,255,255,.18)}
```

- [ ] **Step 3: Transformar diferenciais em manifesto**

```html
<div class="manifesto-grid">
  <blockquote class="manifesto-statement">...</blockquote>
  <div class="manifesto-points">...</div>
</div>
```

- [ ] **Step 4: Manter fundadores como assinatura de autoridade**

Run: conferir presença de `Anne Higa`, `Diego Silva`, `PDM` e `LAI` no HTML.

Expected: os quatro termos aparecem como texto rastreável.

- [ ] **Step 5: Converter o processo em percurso contínuo**

```css
.steps-grid{counter-reset:step;display:grid;grid-template-columns:repeat(3,1fr)}
.steps-grid:before{content:"";position:absolute;left:0;right:0;top:2rem;height:1px}
```

### Task 4: FAQ, CTA e refinamento mobile

**Files:**
- Modify: `dist/index.html`
- Modify: `dist/style.css`
- Modify: `dist/app.js`

**Interfaces:**
- Consumes: FAQ e CTA existentes.
- Produces: fechamento editorial acessível e responsivo.

- [ ] **Step 1: Simplificar o FAQ e reforçar a hierarquia**

```css
.faq-list summary{font-size:clamp(1rem,1.5vw,1.25rem);padding:1.6rem 0}
```

- [ ] **Step 2: Redesenhar o CTA final sem efeitos decorativos genéricos**

```css
.final-cta{background:#061f30;border-top:0;text-align:left}
```

- [ ] **Step 3: Preservar comportamento de movimento reduzido**

```js
if (heroVideo && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  heroVideo.pause();
}
```

- [ ] **Step 4: Validar comportamento e responsividade**

Run: `node --check dist/app.js`

Expected: exit code 0.

Run: verificar 320×740, 390×844, 768×1024 e 1440×900.

Expected: sem clipping, sobreposição ou rolagem horizontal; vídeo e imagens carregados.

### Task 5: Publicação

**Files:**
- Modify: `.openai/hosting.json` apenas se exigido pelo fluxo de Sites.

**Interfaces:**
- Consumes: página validada e checkout do Site existente.
- Produces: nova versão privada no mesmo endereço publicado.

- [ ] **Step 1: Verificar alterações**

Run: `git diff --check`

Expected: nenhum erro de whitespace.

- [ ] **Step 2: Empacotar e publicar o Site existente**

Run: fluxo de publicação de Sites com o `project_id` existente.

Expected: deployment com status `succeeded` e URL `https://padrinhos-rh-consultoria.genius-digital155.chatgpt.site`.
