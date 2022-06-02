import { Col } from "react-bootstrap";
import DigitalThreatLogo from "../../assets/logos/DigitalThreatLogo.svg";
const MainMenu = () => {
	return (
		<Col
			id="menu"
			sm={1}
			className="h-100 d-flex align-items-center justify-content-center border-end border-success"
		>
			<button
				className="h-100 bg-dark border border-success p-2  d-flex align-items-end justify-content-center"
				style={{
					border: "none",
				}}
				type="button"
			>
				<img src={DigitalThreatLogo} alt="Digital Threat Logo" style={{ height: "80%" }} />
				<span className="text-success fw-bold">HOME</span>
			</button>
		</Col>
	);
};

export default MainMenu;
