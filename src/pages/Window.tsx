import { Container } from "react-bootstrap";
import AppsContainer from "../components/system/AppsContainer";
import TaskBar from "../components/system/TaskBar";

const Window = () => {
	return (
		<Container fluid id="windowBackground" className="vh-100 bg-dark p-0 text-light">
			<AppsContainer />
			<TaskBar />
		</Container>
	);
};

export default Window;
