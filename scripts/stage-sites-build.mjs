import { access, cp, mkdir, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const projectRoot = process.cwd();
const openNext = resolve(projectRoot, ".open-next");
const dist = resolve(projectRoot, "dist");
const server = resolve(dist, "server");
const client = resolve(dist, "client");

if (dirname(dist) !== projectRoot) {
  throw new Error("Refusing to stage outside the project root.");
}

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(openNext, server, { recursive: true });
await cp(resolve(openNext, "worker.js"), resolve(server, "index.js"));
await cp(resolve(openNext, "assets"), client, { recursive: true });

for (const required of [
  resolve(server, "index.js"),
  resolve(server, "cloudflare", "images.js"),
  resolve(server, "middleware", "handler.mjs"),
]) {
  await access(required);
}

console.log("Sites staging ready in dist/.");
