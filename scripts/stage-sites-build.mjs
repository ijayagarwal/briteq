import { access, cp, mkdir, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const projectRoot = process.cwd();
const staticExport = resolve(projectRoot, "out");
const staticWorker = resolve(projectRoot, "worker", "static-site.js");
const dist = resolve(projectRoot, "dist");
const server = resolve(dist, "server");
const client = resolve(dist, "client");

if (dirname(dist) !== projectRoot) {
  throw new Error("Refusing to stage outside the project root.");
}

await rm(dist, { recursive: true, force: true });
await mkdir(server, { recursive: true });
await cp(staticExport, client, { recursive: true });
await cp(staticWorker, resolve(server, "index.js"));

for (const required of [
  resolve(server, "index.js"),
  resolve(client, "index.html"),
  resolve(client, "404.html"),
]) {
  await access(required);
}

console.log("Static Sites staging ready in dist/.");
