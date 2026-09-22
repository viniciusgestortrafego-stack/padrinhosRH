import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../dist/index.html", import.meta.url), "utf8");
const js = readFileSync(new URL("../dist/app.js", import.meta.url), "utf8");

for (const field of ["name", "email", "phone", "company"]) {
  assert.match(html, new RegExp(`name=["']${field}["'][^>]*required`), `${field} must be required`);
}

assert.match(html, /id=["']lead-form["']/, "lead form must exist");
assert.match(html, /id=["']lead-form-section["']/, "lead form anchor must exist");

const ctas = [...html.matchAll(/<a[^>]*class=["'][^"']*\bcontact\b[^"']*["'][^>]*href=["']([^"']+)/g)];
assert.ok(ctas.length >= 4, "expected all marketing CTAs");
assert.ok(ctas.every(([, href]) => href.startsWith("#")), "marketing CTAs must use local anchors");

assert.match(js, /fetch\s*\(/, "client must submit to backend");
assert.match(js, /PADRINHOS_LEAD_ENDPOINT/, "client must use configured endpoint");
assert.match(js, /wa\.me\/5511983324851/, "client must build WhatsApp URL");
for (const field of ["name", "email", "phone", "company"]) {
  assert.match(js, new RegExp(`lead\.${field}`), `WhatsApp message must include ${field}`);
}

console.log("Lead form smoke checks passed.");
