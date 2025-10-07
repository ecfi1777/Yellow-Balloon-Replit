import { promises as fs } from "fs";
import path from "path";

const ROOT = process.cwd();
const PUB = path.join(ROOT, "client", "public");
const exts = new Set([".jpg", ".jpeg", ".png"]);

async function walk(dir) {
  const out = [];
  try {
    const ents = await fs.readdir(dir, { withFileTypes: true });
    for (const e of ents) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) out.push(...await walk(p));
      else out.push(p);
    }
  } catch {}
  return out;
}
function isCandidate(p) {
  const ext = path.extname(p).toLowerCase();
  if (!exts.has(ext)) return false;
  const name = path.basename(p).toLowerCase();
  if (name.includes("favicon") || name.includes("apple-touch") || name.includes("icon") || name.includes("logo")) return false;
  return true;
}

const files = (await walk(PUB)).filter(isCandidate);
if (files.length === 0) {
  console.error("No JPG/PNG candidates found under client/public.");
  process.exit(2);
}
const sizes = await Promise.all(files.map(async f => ({ f, s: await fs.stat(f).catch(() => null) })));
const withSize = sizes.filter(x => x.s).map(x => ({ f: x.f, size: x.s.size }));
withSize.sort((a, b) => b.size - a.size);
const chosen = withSize[0];

const ext = path.extname(chosen.f).toLowerCase();
const targetAbs = path.join(PUB, `og-card${ext}`);
if (chosen.f !== targetAbs) {
  await fs.copyFile(chosen.f, targetAbs);
}
const webPath = `/og-card${ext}`;
console.log(webPath);
