// Gera a versão PHP do site a partir de dist/ (fonte única: dist/index.html).
// Uso: node tools/build-php.mjs  ->  build-php/ e padrinhosrh-php.zip
import { cpSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = new URL("../", import.meta.url);
const dist = fileURLToPath(new URL("dist/", root));
const out = fileURLToPath(new URL("build-php/", root));
const zip = fileURLToPath(new URL("padrinhosrh-php.zip", root));

const html = readFileSync(`${dist}index.html`, "utf8");
if (html.includes("<?")) throw new Error("dist/index.html contém '<?', que o PHP interpretaria como código.");

const yearSpan = '<span id="year">2026</span>';
if (!html.includes(yearSpan)) throw new Error("Marcador do ano não encontrado em dist/index.html.");

const phpHeader = `<?php
declare(strict_types=1);

header('Content-Type: text/html; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: SAMEORIGIN');
header('Referrer-Policy: strict-origin-when-cross-origin');
header('Permissions-Policy: camera=(), microphone=(), geolocation=()');
?>
`;

const htaccess = `DirectoryIndex index.php
Options -Indexes

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript image/svg+xml
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 day"
  ExpiresByType application/javascript "access plus 1 day"
  ExpiresByType image/jpeg "access plus 30 days"
  ExpiresByType video/mp4 "access plus 30 days"
</IfModule>
`;

rmSync(out, { recursive: true, force: true });
rmSync(zip, { force: true });
mkdirSync(out, { recursive: true });

for (const name of readdirSync(dist)) {
  if (name !== "index.html") cpSync(`${dist}${name}`, `${out}${name}`, { recursive: true });
}

writeFileSync(`${out}index.php`, phpHeader + html.replace(yearSpan, `<span id="year"><?= date('Y') ?></span>`));
writeFileSync(`${out}.htaccess`, htaccess);

execFileSync("zip", ["-qr", zip, "."], { cwd: out });
console.log(`PHP gerado em build-php/ e ${zip}`);
