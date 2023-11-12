const fs = require("node:fs");

const componentName = process.argv[3];

if (!fs.existsSync("./src/components/")) {
  fs.mkdirSync("./src/components/");
}

const createFile = (path, contents) => {
  if (fs.existsSync(path)) return console.log(path + " already exists.");
  fs.writeFileSync(path, contents);
};

const componentClassName = componentName
  .split("-")
  .map(
    (v) =>
      v.charAt(0).toUpperCase() +
      v
        .slice(1)
        .split("")
        .map((v2) => v2.toLowerCase())
        .join("")
  )
  .join("");

createFile(
  `./src/components/${componentName}.tsx`,
  `import "../css/${componentName}.css";

import * as React from "react";

class ${componentClassName} extends React.Component {
	constructor(props: {} | Readonly<{}>) {
		super(props);
	}

	render(): React.JSX.Element {
		return <p>${componentClassName} works!</p>;
	}
}

export default ${componentClassName};`
);

createFile(`./src/css/${componentName}.css`, ``);
