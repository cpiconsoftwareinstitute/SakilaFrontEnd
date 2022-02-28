import React from "react";
import ReactDOM from "react-dom";
import FrameContext from "./FrameContext";

class Frame extends React.Component {
	constructor(props) {
		super(props);

		// The <frame> element
		this.frameRef = React.createRef();
		// The div inside the frame's document to render components to
		this.rootRef = React.createRef();
	}

	componentDidMount() {
		let doc = this.renderDoc();
		let root = doc.getElementById("root");
		this.rootRef.current = root;

		this.renderContent();
	}

	componentDidUpdate(prevProps, prevState) {
		this.renderContent();
	}
	render() {
		return <frame ref={this.frameRef} />;
	}

	renderContent() {
		let ContextElement =
			this.context &&
			this.context.frames &&
			this.context.frames[this.props.name];

		ReactDOM.render(
			// Need to wrap in a new Context provider, otherwise the component's context is undefined
			<FrameContext.Provider value={this.context}>
				{ContextElement ? <ContextElement /> : this.props.children}
			</FrameContext.Provider>,
			this.rootRef.current
		);
	}

	// @FIXME can we do without doc.write?
	renderDoc() {
		let doc = this.frameRef.current.contentDocument;
		doc.open("text/html", "replace");
		doc.write(
			'<!DOCTYPE html><html><head></head><body style="margin:0"><div id="root"></div></body></html>'
		);
		doc.close();
		return doc;
	}
}
Frame.contextType = FrameContext;

export default Frame;
