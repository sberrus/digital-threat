import { Col, Container } from "react-bootstrap";
import Web3Connector from "./Web3Connector/Web3Connector";

const DateAndWidget = () => {
	return (
		<Col
			id="walletAndData"
			sm={6}
			md={4}
			lg={3}
			xl={2}
			className="h-100 d-flex align-items-center justify-content-center border-start border-success"
		>
			<Web3Connector />
		</Col>
	);
};

export default DateAndWidget;
