const fs = require("node:fs");

const chunkName = process.argv[3];

if (chunkName === undefined) {
	console.error("Must provide a chunk name");
	process.exit(1);
}
const createFile = (path, contents) => {
	if (fs.existsSync(path)) return console.log(path + " already exists.");
	fs.writeFileSync(path, contents);
};

const createIfNotExists = (dir) => {
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
	}
};

createIfNotExists("./src/chunks/");
createIfNotExists("./src/css/");
createIfNotExists("./src/html/");

createFile(
	`./src/chunks/${chunkName}.tsx`,
	`import "../css/about.css";

import * as React from "react";
import * as ReactDOM from "react-dom/client";

class App extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
  }

  render(): React.JSX.Element {
    return <p>${chunkName} works!</p>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("app-root"));
root.render(<App />);
`,
);

createFile(
	`./src/css/${chunkName}.css`,
	`body {
	background-color: #FFFFFF;
	color: #121318;
	font-family: sans-serif;
}`,
);

createFile(
	`./src/html/${chunkName}.html`,
	`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${chunkName}</title>
  </head>
  <body><div id="app-root"></div></body>
</html>`,
);

if (fs.existsSync("./templateconfig.json")) {
	const data = fs.readFileSync("./templateconfig.json");
	const json = JSON.parse(data);
	const basenames = json.basenames;
	if (basenames.indexOf(chunkName) === -1) {
		json.basenames.push(chunkName);
		fs.writeFileSync("./templateconfig.json", JSON.stringify(json));
	}
}
