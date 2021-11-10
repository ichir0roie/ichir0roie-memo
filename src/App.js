import "./App.css";

import React from "react";
import ReactMarkdown from "react-markdown";
// import ReactDom from "react-dom";
import { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "# なんか書け！",
			fileName: ".md",
		};

		this.handleChange = this.handleChange.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: value,
		});
	};

	render(h) {
		// const text = "# なんか書け！";
		const { text, fileName } = this.state;

		return (
			<div className="App">
				<div id="mainBox">
					<input
						name="fileName"
						id="inputFileName"
						value={fileName}
						onChange={this.handleChange}
					></input>
					<textarea
						name="text"
						id="inputMarkDown"
						value={text}
						onChange={this.handleChange}
					></textarea>
					<button>submit</button>
				</div>
				<div id="sideBox">
					<div id="outPutMarkDown">
						<ReactMarkdown>{text}</ReactMarkdown>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
