import { copyFile, readdir, rm } from "node:fs/promises";
import { join, relative, resolve, sep } from "node:path";

const exportRoot = resolve(process.cwd(), "out");
const aliases = [];
const payloadDirectories = new Set();

async function visit(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const absolutePath = join(directory, entry.name);

    if (entry.isDirectory()) {
      await visit(absolutePath);
      continue;
    }

    if (entry.name !== "__PAGE__.txt") continue;

    const parts = relative(exportRoot, absolutePath).split(sep);
    const payloadStart = parts.findIndex((part) => part.startsWith("__next."));
    if (payloadStart < 0) continue;

    payloadDirectories.add(join(exportRoot, ...parts.slice(0, payloadStart + 1)));

    const alias = join(
      exportRoot,
      ...parts.slice(0, payloadStart),
      parts.slice(payloadStart).join(".")
    );

    await copyFile(absolutePath, alias);
    aliases.push(relative(exportRoot, alias));
  }
}

await visit(exportRoot);
for (const directory of payloadDirectories) {
  await rm(directory, { recursive: true, force: true });
}
console.log(`Static navigation payload aliases ready: ${aliases.length}.`);
