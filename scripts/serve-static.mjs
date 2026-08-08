import { createReadStream } from "node:fs";
import { access, stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";

const root = resolve(process.cwd(), "out");
const port = Number(process.env.PORT || 3000);
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json",
  ".woff2": "font/woff2",
};

async function firstFile(candidates) {
  for (const candidate of candidates) {
    if (!candidate.startsWith(`${root}${sep}`) && candidate !== root) continue;
    try {
      await access(candidate);
      if ((await stat(candidate)).isFile()) return candidate;
    } catch {
      // Try the next static-file candidate.
    }
  }
  return null;
}

const server = createServer(async (request, response) => {
  const pathname = decodeURIComponent(new URL(request.url || "/", "http://localhost").pathname);
  const requested = resolve(root, `.${pathname}`);
  const file = await firstFile([
    requested,
    resolve(requested, "index.html"),
    `${requested}.html`,
  ]);
  const selected = file || resolve(root, "404.html");
  response.statusCode = file ? 200 : 404;
  response.setHeader("Content-Type", mimeTypes[extname(selected)] || "application/octet-stream");
  response.setHeader("X-Content-Type-Options", "nosniff");
  createReadStream(selected).pipe(response);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`BRITEQ static preview: http://127.0.0.1:${port}`);
});
