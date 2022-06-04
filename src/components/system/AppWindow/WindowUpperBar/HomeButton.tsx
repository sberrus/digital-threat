import { CSSProperties } from "react";

import home from "./assets/home.svg";

const HomeButton = () => {
	return (
		<section id="home">
			<button style={buttonStyles}>
				<img src={home} alt="" style={buttonIcons} />
			</button>
		</section>
	);
};

export default HomeButton;

const buttonStyles: CSSProperties = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	background: "#00000000",
	color: "green",
	border: "none",
	height: "100%",
	marginRight: ".2em",
};

const buttonIcons: CSSProperties = {
	height: "70%",
};
