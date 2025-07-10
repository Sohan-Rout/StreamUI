import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = path.join(__dirname, "avatars");

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith(".js") || file.endsWith(".jsx")) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, "utf8");

    const updatedContent = content
      .replace(/fill=['"]#000['"]/g, 'fill="currentColor"')
      .replace(/fill=['"]black['"]/g, 'fill="currentColor"');

    if (content !== updatedContent) {
      fs.writeFileSync(filePath, updatedContent, "utf8");
      console.log(`✅ Updated: ${file}`);
    }
  }
});

console.log("✅ All avatar SVGs now use fill=\"currentColor\".");