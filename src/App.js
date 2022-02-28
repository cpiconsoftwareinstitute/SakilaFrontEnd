import React, { useState } from "react";
import { Frames, Frame, Frameset } from "./react-frames";

import Films from "./pages/Films";
import Menu from "./pages/Menu";
import Header from "./pages/Header";

export default function App() {
	// Some state for toggling the border, resize and scrolling properties
	let [frameBorder, setFrameBorder] = useState(true);
	let [noResize, setNoResize] = useState(false);
	let [scrolling, setScrolling] = useState(true);
  let headerProps = {
		frameBorder,
		setFrameBorder,
		noResize,
		setNoResize,
		scrolling,
		setScrolling
	};

	let frameProps = {
		frameBorder,
		noResize,
		scrolling,
		stylesheet: "styles.css" // Shared stylesheet for all frames
	};

	return (
		<Frames title="React Frames">
			<Frameset rows="120,*" key={frameBorder}>
				<Frame name="header" {...frameProps}>
        <Header {...headerProps} />
				</Frame>
				<Frameset cols="200,*">
					<Frame name="nav" {...frameProps}>
						<Menu />
					</Frame>
					<Frame name="main" {...frameProps}>
						<Films />
					</Frame>
				</Frameset>
			</Frameset>
		</Frames>
	);
}