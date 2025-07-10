const fs = require("fs");
const path = require("path");

const folderName = process.argv[2];
if (!folderName) {
  console.error("❌ Please provide a folder name. Usage: node generateIndex.js [folderName]");
  process.exit(1);
}

const targetDir = path.join(__dirname, folderName);
if (!fs.existsSync(targetDir)) {
  console.error(`❌ Folder "${folderName}" does not exist.`);
  process.exit(1);
}

const files = fs.readdirSync(targetDir).filter(file => file.endsWith(".js") || file.endsWith(".jsx"));

const exportLines = files
  .filter(file => file !== "index.js")
  .map(file => {
    const name = path.basename(file, path.extname(file));
    return `export { default as ${name} } from "./${name}";`;
  })
  .join("\n");

fs.writeFileSync(path.join(targetDir, "index.js"), exportLines);

console.log(`✅ ${folderName}/index.js generated successfully!`);