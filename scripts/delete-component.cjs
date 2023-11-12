const fs = require("node:fs");

const componentName = process.argv[3];

const deleteFile = (path) => {
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
  }
};

deleteFile(`./src/components/${componentName}.tsx`);
deleteFile(`./src/css/${componentName}.css`);
