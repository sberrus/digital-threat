import { Container } from "react-bootstrap";
import IdentificationApp from "../Apps/Identification/IdentificationApp";
import WindowAppContainer from "../WindowApp/WindowApp";
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
			<WindowAppContainer
				appName={"Identifier"}
				windowLayoutState="fullscreen"
			>
				<IdentificationApp />
			</WindowAppContainer>
		</Container>
	);
};

export default WindowsContainer;
