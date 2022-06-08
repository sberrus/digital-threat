import { CSSProperties, useContext } from "react";
import minimize from "./assets/minimize.svg";
import fullScreen from "./assets/fullScreen.svg";
import close from "./assets/close.svg";
import arrow from "./assets/arrow.svg";
import { WindowControllerContext } from "../contexts/WindowController";
import useWindowController from "../contexts/UseWindowController";

const SizingSection = () => {
	const windowController = useWindowController();

	const handleMinimizeWindow = () => {
		if (windowController?.minimizeWindow !== undefined) {
			windowController?.minimizeWindow();
		}
	};
	const handleFullScreenWindow = () => {
		if (windowController?.fullScreenWindow !== undefined) {
			windowController?.fullScreenWindow();
		}
	};

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
				<img src={arrow} alt="" style={buttonIcons} />
			</button>
			<button
				style={buttonStyles}
				onClick={() => {
					handleMinimizeWindow();
				}}
			>
				<img src={minimize} alt="" style={buttonIcons} />
			</button>
			<button
				style={buttonStyles}
				onClick={() => {
					handleFullScreenWindow();
				}}
			>
				<img src={fullScreen} alt="" style={buttonIcons} />
			</button>
			<button style={buttonStyles}>
				<img src={close} alt="" style={buttonIcons} />
			</button>
		</section>
	);
};

export default SizingSection;

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
