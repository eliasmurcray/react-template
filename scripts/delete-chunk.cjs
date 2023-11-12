const fs = require("node:fs");

const chunkName = process.argv[3];

const deleteFile = (path) => {
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
  }
};

deleteFile(`./src/chunks/${chunkName}.tsx`);
deleteFile(`./src/css/${chunkName}.css`);
deleteFile(`./src/html/${chunkName}.html`);

if (fs.existsSync("./templateconfig.json")) {
  const data = fs.readFileSync("./templateconfig.json");
  const json = JSON.parse(data);
  const basenames = json.basenames;
  if (basenames.indexOf(chunkName) !== -1) {
    json.basenames.splice(basenames.indexOf(chunkName), 1);
    fs.writeFileSync("./templateconfig.json", JSON.stringify(json));
  }
}
