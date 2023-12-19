import "../css/index.css";

import * as React from "react";
import * as ReactDOM from "react-dom/client";

type AppState = {
	clicks: number;
};

class App extends React.Component<{}, AppState> {
	constructor(props: {} | Readonly<{}>) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			clicks: 0,
		};
	}

	handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
		this.setState((state: Readonly<AppState>) => ({
			clicks: state.clicks + 1,
		}));
	}

	render(): React.JSX.Element {
		return (
			<React.Fragment>
				{this.state.clicks} <button onClick={this.handleClick}>Click Me</button>
			</React.Fragment>
		);
	}
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
