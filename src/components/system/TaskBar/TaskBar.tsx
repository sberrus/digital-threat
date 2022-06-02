import { Container, Row } from "react-bootstrap";
import MainMenu from "./MainMenu/MainMenu";
import AppsBar from "./AppsBar/AppsBar";
import DateAndWidget from "./DateAndWidget/DateAndWidget";

const TaskBar = () => {
	return (
		<Container fluid className="border-top border-success" style={{ height: "5%" }}>
			<Row className="h-100">
				<MainMenu />
				<AppsBar />
				<DateAndWidget />
			</Row>
		</Container>
	);
};

export default TaskBar;
