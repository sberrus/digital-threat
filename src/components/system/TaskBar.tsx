import { Col, Container, Row } from "react-bootstrap";
import Web3Connector from "./Web3Connector/Web3Connector";

const TaskBar = () => {
	return (
		<Container fluid className="border-top" style={{ height: "5%" }}>
			<Row className="h-100">
				<Col id="menu" sm={1} className="h-100 d-flex align-items-center justify-content-center border-end">
					<button className="h-100 w-100">Digital Threat</button>
				</Col>
				<Col id="appsBar" sm={9} className="h-100 d-flex align-items-center justify-content-start">
					<div className="d-flex justify-content-center h-100">
						<button>app1</button>
						<button>app2</button>
						<button>app3</button>
						<button>app4</button>
					</div>
				</Col>
				<Col
					id="walletAndData"
					sm={2}
					className="h-100 d-flex align-items-center justify-content-center border-start"
				>
					<Container fluid className="h-100">
						<Row className="h-100">
							<Col sm={6} className="h-100 d-flex align-items-center justify-content-center">
								<span>fecha | hora</span>
							</Col>
							<Col sm={6} className="h-100 d-flex align-items-center justify-content-center">
								{" "}
								<Web3Connector />
							</Col>
						</Row>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default TaskBar;
