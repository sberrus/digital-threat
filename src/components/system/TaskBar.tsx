import { Col, Container, Row } from "react-bootstrap";
import MainMenu from "./MainMenu/MainMenu";
import Web3Connector from "./Web3Connector/Web3Connector";

const TaskBar = () => {
	return (
		<Container fluid className="border-top" style={{ height: "5%" }}>
			<Row className="h-100">
				<Col id="menu" sm={1} className="h-100 d-flex align-items-center justify-content-center border-end">
					<MainMenu />
				</Col>
				<Col
					id="appsBar"
					sm={5}
					md={7}
					lg={8}
					xl={9}
					className="h-100 d-flex align-items-center justify-content-start"
				>
					<div className="d-flex justify-content-center h-100">
						<button>app1</button>
						<button>app2</button>
						<button>app3</button>
						<button>app4</button>
					</div>
				</Col>
				<Col
					id="walletAndData"
					sm={6}
					md={4}
					lg={3}
					xl={2}
					className="h-100 d-flex align-items-center justify-content-center border-start"
				>
					<Container fluid className="h-100">
						<Row className="h-100">
							<Col sm={9} className="h-100 d-flex align-items-center justify-content-center">
								<span>fecha</span>
							</Col>
							<Col sm={3} className="h-100 d-flex align-items-center justify-content-center">
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
