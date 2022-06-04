import { Container } from "react-bootstrap";
import AppWindow from "../AppWindow/AppWindow";
import WindowBackgroundImageController from "./WindowBackgroundImageConfig/WindowBackgroundImageController WindowBackgroundImageController";

const WindowsContainer = () => {
	return (
		<Container
			fluid
			className="p-0"
			id="WindowsContainer"
			style={{ height: "95%", position: "relative" }}
		>
			<WindowBackgroundImageController />
			<AppWindow />
		</Container>
	);
};

export default WindowsContainer;
