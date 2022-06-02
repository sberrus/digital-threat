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
				className="h-100 w-100 bg-dark p-1"
				style={{
					border: "none",
				}}
				type="button"
			>
				<img src={DigitalThreatLogo} alt="Digital Threat Logo" width="35px" height={"33px"} />
			</button>
		</Col>
	);
};

export default MainMenu;
