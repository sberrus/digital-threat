import { Col, Container } from "react-bootstrap";
import Web3Connector from "./Web3Connector/Web3Connector";

const DateAndWidget = () => {
	return (
		<div
			id="walletAndData"
			style={{
				width: "25%",
				border: "1px solid red",
			}}
		>
			<Web3Connector />
		</div>
	);
};

export default DateAndWidget;
