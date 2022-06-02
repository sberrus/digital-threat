import { Container } from "react-bootstrap";
import WindowsContainer from "../components/system/WindowsContainer";
import TaskBar from "../components/system/TaskBar/TaskBar";

const Window = () => {
	return (
		<Container fluid id="windowBackground" className="vh-100 bg-dark p-0 text-light">
			<WindowsContainer />
			<TaskBar />
		</Container>
	);
};

export default Window;
