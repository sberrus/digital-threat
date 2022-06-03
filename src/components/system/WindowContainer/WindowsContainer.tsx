import { Container } from "react-bootstrap";
import WindowBackgroundImageController from "./WindowBackgroundImageConfig/WindowBackgroundImageController WindowBackgroundImageController";

const WindowsContainer = () => {
	return (
		<Container
			fluid
			className="p-0"
			id="WindowsContainer"
			style={{ height: "93%", position: "relative" }}
		>
			<WindowBackgroundImageController />
		</Container>
	);
};

export default WindowsContainer;