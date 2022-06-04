import { CSSProperties } from "react";
import minimize from "./assets/minimize.svg";
import fullScreen from "./assets/fullScreen.svg";
import close from "./assets/close.svg";

const SizingButtons = () => {
	return (
		<section
			id="sizing"
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
			}}
		>
			<button style={buttonStyles}>
				<img src={minimize} alt="" style={buttonIcons} />
			</button>
			<button style={buttonStyles}>
				<img src={fullScreen} alt="" style={buttonIcons} />
			</button>
			<button style={buttonStyles}>
				<img src={close} alt="" style={buttonIcons} />
			</button>
		</section>
	);
};

export default SizingButtons;

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
