const fs = require("node:fs");

let chunkName = process.argv[3];

fs.unlinkSync(`./src/chunks/${chunkName}.tsx`);

fs.unlinkSync(`./src/css/${chunkName}.css`);

fs.unlinkSync(`./src/html/${chunkName}.html`);

const data = fs.readFileSync("./templateconfig.json");
const json = JSON.parse(data);
const basenames = json.basenames;
if (basenames.indexOf(chunkName) !== -1) {
  json.basenames.splice(basenames.indexOf(chunkName), 1);
  fs.writeFileSync("./templateconfig.json", JSON.stringify(json));
}
