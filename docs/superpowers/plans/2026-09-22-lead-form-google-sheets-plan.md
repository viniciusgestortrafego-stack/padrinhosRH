# Lead Form and Google Sheets Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a required lead form to the steps section, save validated submissions to the supplied Google Sheet, and open WhatsApp only after the row is recorded.

**Architecture:** The static page owns presentation, client validation, anchor navigation, and the WhatsApp redirect. A bound Google Apps Script exposes a small POST endpoint that validates and sanitizes the four accepted fields before appending a timestamped row to the sheet. The endpoint URL is stored as a public runtime constant in the static JavaScript; no Google credentials are exposed.

**Tech Stack:** HTML5, CSS, browser JavaScript, Google Apps Script, Google Sheets, Sites static hosting.

## Global Constraints

- Required fields: `name`, `email`, `phone`, and `company`.
- Open WhatsApp only after the backend confirms that the row was written.
- Preserve entered values after backend or network errors.
- Use progressive in-page anchors for every marketing CTA before the submit button.
- Keep the current editorial visual system and responsive behavior.
- Store submission timestamp, name, email, phone, company, and source.

---

### Task 1: Form markup and progressive anchors

**Files:**
- Modify: `dist/index.html`

**Interfaces:**
- Produces: `#lead-form-section`, `#lead-form`, four named inputs, `.form-status`, and progressive CTA anchor destinations.
- Consumes: Existing section IDs `#servicos`, `#metodologias`, `#sobre`, and the steps section.

- [ ] **Step 1: Add a stable anchor to the steps section**

Set the section ID to `processo` and add `id="lead-form-section"` to the form wrapper.

- [ ] **Step 2: Add accessible required fields**

Add explicit labels and inputs using `autocomplete="name"`, `autocomplete="email"`, `autocomplete="tel"`, and `autocomplete="organization"`. Give every input `required`, length limits, and an `aria-describedby` relationship when an error is shown.

- [ ] **Step 3: Add submission states**

Add a submit button labelled `ENVIAR E CONTINUAR NO WHATSAPP`, an `aria-live="polite"` status element, and an off-screen honeypot field excluded from keyboard navigation.

- [ ] **Step 4: Convert marketing CTAs to anchors**

Map the header and hero CTAs to `#servicos`, the services CTA to `#metodologias`, the methods CTA to `#sobre`, and later CTAs to `#lead-form-section`. Remove `target`, `rel`, and direct WhatsApp URLs from those links.

- [ ] **Step 5: Check document structure**

Run `rg -n "wa.me|lead-form|href=\"#" dist/index.html`. Expect one WhatsApp base URL only in JavaScript after Task 3 and all marketing buttons in HTML to use local anchors.

### Task 2: Editorial form styling

**Files:**
- Modify: `dist/style.css`

**Interfaces:**
- Consumes: `.steps`, `.steps-grid`, `.lead-form-shell`, `.lead-form`, `.form-field`, `.form-status`.
- Produces: Responsive two-column desktop composition and a one-column mobile sequence.

- [ ] **Step 1: Extend the steps grid**

Place the form below the three steps in the second column, separated by a restrained gold rule and generous vertical space.

- [ ] **Step 2: Style fields and states**

Use visible labels, cream or white field surfaces, dark navy text, gold focus indicators, minimum 48px controls, and distinct error/success colors. Avoid cards, shadows, gradients, and generic rounded UI.

- [ ] **Step 3: Add mobile behavior**

At `max-width: 680px`, stack the fields, make the submit button full width, and ensure the form follows the three steps without horizontal overflow.

- [ ] **Step 4: Verify geometry**

Use browser evaluation to confirm all inputs are at least 48px tall, the button fills the form width on mobile, and `document.documentElement.scrollWidth === window.innerWidth`.

### Task 3: Client validation, submission, and WhatsApp handoff

**Files:**
- Modify: `dist/app.js`
- Create: `tests/lead-form-smoke.mjs`

**Interfaces:**
- Produces: `normalizeLead(formData)`, `validateLead(lead)`, `buildWhatsAppUrl(lead)`, and the submit handler.
- Consumes: `window.PADRINHOS_LEAD_ENDPOINT`, `#lead-form`, and `.form-status`.

- [ ] **Step 1: Add smoke-test assertions**

The test will load `dist/index.html` and `dist/app.js` as text and assert that all required input names exist, every marketing CTA is a hash anchor, a fetch call targets the configured endpoint, and the WhatsApp URL contains encoded lead fields.

- [ ] **Step 2: Run the test and observe failure**

Run `node tests/lead-form-smoke.mjs`. Expected result: failure because the form and submission code are not yet present.

- [ ] **Step 3: Implement normalization and validation**

Trim all values, validate a basic e-mail pattern, require a phone with at least 10 digits, limit `name` and `company` to 120 characters, and reject a filled honeypot.

- [ ] **Step 4: Implement submission**

Send a JSON POST with `name`, `email`, `phone`, `company`, and `source: "site-padrinhos-rh"`. Disable the button while pending. On `{ ok: true }`, construct and open the WhatsApp URL. On failure, re-enable the form and display an error without clearing values.

- [ ] **Step 5: Run the smoke test**

Run `node tests/lead-form-smoke.mjs` and `node --check dist/app.js`. Both must pass.

### Task 4: Google Apps Script backend

**Files:**
- Create: `google-apps-script/Code.gs`
- Create: `google-apps-script/appsscript.json`

**Interfaces:**
- Consumes: JSON POST with `name`, `email`, `phone`, `company`, and `source`.
- Produces: JSON `{ ok: true }` after appending a row, or `{ ok: false, error: string }` with no partial write.

- [ ] **Step 1: Implement field validation and formula escaping**

Accept only the five documented keys, trim values, reject missing required values, reject invalid e-mail, limit field lengths, and prefix values beginning with `=`, `+`, `-`, or `@` with an apostrophe.

- [ ] **Step 2: Append the row**

Open spreadsheet ID `1ApbTuU_6q36prUFFWPx3Ri0zqm5Q4CbXYkDiYToFI_c`, select or create a worksheet named `Leads do site`, create the header row when empty, and append `[timestamp, name, email, phone, company, source]` using the `America/Sao_Paulo` timezone.

- [ ] **Step 3: Add JSON and CORS responses**

Return JSON through `ContentService`. The web app must execute as the owner and allow access to anyone with the URL.

- [ ] **Step 4: Deploy the bound web app**

Use the spreadsheet’s Extensions → Apps Script flow, paste the reviewed files, deploy a web app, and copy the `/exec` URL into `window.PADRINHOS_LEAD_ENDPOINT` in `dist/index.html`.

### Task 5: End-to-end verification and publication

**Files:**
- Modify: `dist/index.html` only if the deployed endpoint must be inserted.

**Interfaces:**
- Consumes: Deployed Apps Script endpoint and the completed static site.
- Produces: A published, tested Sites version.

- [ ] **Step 1: Test required-field validation**

Attempt an empty submission and invalid e-mail. Confirm no network request is sent and the first invalid field receives focus.

- [ ] **Step 2: Submit a clearly marked test lead**

Use name `TESTE SITE — REMOVER`, e-mail `teste-site@example.com`, phone `(11) 99999-9999`, and company `Padrinhos RH QA`. Confirm one row appears in `Leads do site` and WhatsApp opens with the four values.

- [ ] **Step 3: Remove the test row**

Delete the row labelled `TESTE SITE — REMOVER` so the production sheet contains no QA lead.

- [ ] **Step 4: Verify responsive layout and anchors**

Check desktop and mobile viewports. Confirm every marketing button scrolls downward to its mapped section and the form remains usable without horizontal overflow.

- [ ] **Step 5: Run final checks**

Run `node tests/lead-form-smoke.mjs`, `node --check dist/app.js`, and `git diff --check`. All must succeed.

- [ ] **Step 6: Commit and publish**

Commit the implementation, push the exact commit to Sites, save an archive containing `.openai` and `dist`, deploy that version, and verify the production URL.
