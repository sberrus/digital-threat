import { Col, Container, Row } from "react-bootstrap";

const TaskBar = () => {
	return (
		<Container fluid className="border-top" style={{ height: "6%" }}>
			<Row className="h-100">
				<Col id="menu" sm={1} className="h-100 d-flex align-items-center justify-content-center">
					<button className="h-100 w-100">menu</button>
				</Col>
				<Col id="appsBar" sm={9} className="h-100 d-flex align-items-center justify-content-start">
					<div className="d-flex justify-content-center h-100">
						<button>app1</button>
						<button>app2</button>
						<button>app3</button>
						<button>app4</button>
					</div>
				</Col>
				<Col id="info" sm={2} className="h-100 d-flex align-items-center justify-content-center">
					hora | fecha | whatever
				</Col>
			</Row>
		</Container>
	);
};

export default TaskBar;
