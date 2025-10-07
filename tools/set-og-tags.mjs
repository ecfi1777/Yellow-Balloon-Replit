import { promises as fs } from "fs";
import path from "path";

const webPath = process.argv[2];
if (!webPath) {
  console.error("Usage: node tools/set-og-tags.mjs /og-card.jpg");
  process.exit(1);
}

const ROOT = process.cwd();
const INDEX = path.join(ROOT, "client", "index.html");
let html;
try {
  html = await fs.readFile(INDEX, "utf8");
} catch {
  console.error("client/index.html not found");
  process.exit(2);
}

const block = `
    <!-- START: social meta -->
    <meta property="og:title" content="The Yellow Balloon" />
    <meta property="og:description" content="Kid-friendly salon services, glamour parties, and safe lice treatment." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="${webPath}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="The Yellow Balloon" />
    <meta name="twitter:description" content="Kid-friendly salon services, glamour parties, and safe lice treatment." />
    <meta name="twitter:image" content="${webPath}" />
    <!-- END: social meta -->
`;

if (html.includes("<!-- START: social meta -->") && html.includes("<!-- END: social meta -->")) {
  html = html.replace(/<!-- START: social meta -->[\s\S]*?<!-- END: social meta -->/, block);
} else {
  html = html.replace("</head>", `${block}\n  </head>`);
}

await fs.writeFile(INDEX, html, "utf8");
console.log("Updated social meta tags in client/index.html");
