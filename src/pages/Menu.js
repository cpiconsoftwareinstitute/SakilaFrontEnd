import React from "react";
import Link from "../react-frames/Link";
import Films from "./Films";
import Actor from "./Actor";
import Language from "./Language";
import { useStyle } from "../react-frames";

function Menu() {
	useStyle("menu.css");

	return (
		<ul>
			<li>
				<Link target="main" component={Films}>
					Films
				</Link>
			</li>
			<li>
				<Link target="main" component={Actor}>
					Actor
				</Link>
			</li>
			<li>
				<Link target="main" component={Language}>
					Languages
				</Link>
			</li>
		</ul>
	);
}

export default Menu;
