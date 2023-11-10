import "../css/about.css";

import * as React from "react";
import * as ReactDOM from "react-dom/client";

class App extends React.Component {
  constructor() {
    super(null);
  }

  render(): React.JSX.Element {
    return <p>hello world works!</p>;
  }
}

const root = ReactDOM.createRoot(document.body);
root.render(<App />);
