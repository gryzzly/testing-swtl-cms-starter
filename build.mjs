import fs from "fs";
import path from "path";

const outputDir = path.resolve("./output");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}
const config = JSON.parse(
  fs.readFileSync(
    path.resolve('.', process.env.SWTL_CMS_CONFIG_FILE), 'utf8'
  )
);

function renderHtml(settings, content) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>${settings.title}</title>
    <meta name="viewport" content="width=device-width, user-scalable=no, viewport-fit=cover" />
  </head>
  <body>
  ${content}
  </body>
  </html>
  `;
}
fs.writeFileSync(
  path.resolve("./output", "index.html"),
  renderHtml(config, "Hello world!"),
);
