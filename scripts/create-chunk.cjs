const fs = require("node:fs");

let chunkName = process.argv[3];

fs.writeFileSync(
  `./src/chunks/${chunkName}.tsx`,
  `import "../css/about.css";

import * as React from "react";
import * as ReactDOM from "react-dom/client";

class App extends React.Component {
  constructor() {
    super(null);
  }

  render(): React.JSX.Element {
    return <p>${chunkName} works!</p>;
  }
}

const root = ReactDOM.createRoot(document.body);
root.render(<App />);
`
);

fs.writeFileSync(
  `./src/css/${chunkName}.css`,
  `body {
	background-color: #FFFFFF;
	color: #121318;
	font-family: sans-serif;
}`
);

fs.writeFileSync(
  `./src/html/${chunkName}.html`,
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${chunkName}</title>
  </head>
  <body></body>
</html>`
);

const data = fs.readFileSync("./templateconfig.json");
const json = JSON.parse(data);
const basenames = json.basenames;
if (basenames.indexOf(chunkName) === -1) {
  json.basenames.push(chunkName);
  fs.writeFileSync("./templateconfig.json", JSON.stringify(json));
}