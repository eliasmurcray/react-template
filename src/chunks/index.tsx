import "../css/index.css";

import * as React from "react";
import * as ReactDOM from "react-dom/client";

const App = (): React.JSX.Element => {
  return <h1>Hello World!</h1>;
};

const root = ReactDOM.createRoot(document.body);
root.render(<App />);
