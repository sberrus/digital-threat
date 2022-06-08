import { Container } from "react-bootstrap";
import WindowApp from "../WindowApp/WindowApp";
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
			<WindowApp appName={"Identifier"} windowLayoutState="fullscreen">
				<h1>APP</h1>
			</WindowApp>
		</Container>
	);
};

export default WindowsContainer;
