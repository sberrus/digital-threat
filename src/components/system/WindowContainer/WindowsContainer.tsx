import { Container } from "react-bootstrap";
import AppWindow from "../AppWindow/AppWindow";
import WindowControllerProvider from "../AppWindow/contexts/WindowController";
import WindowBackgroundImageController from "./WindowBackgroundImageConfig/WindowBackgroundImageController WindowBackgroundImageController";

const WindowsContainer = () => {
	return (
		<Container
			fluid
			className="p-0"
			id="WindowsContainer"
			style={{ height: "95%", position: "relative" }}
		>
			{/* CONTEXTProvider */}
			<WindowControllerProvider>
				<WindowBackgroundImageController />
				<AppWindow appName={"App1"} />
			</WindowControllerProvider>
		</Container>
	);
};

export default WindowsContainer;
