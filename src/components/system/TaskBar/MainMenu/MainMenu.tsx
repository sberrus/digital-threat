import { Button, Col } from "react-bootstrap";
import DigitalThreatLogo from "../../assets/logos/DigitalThreatLogo.svg";
const MainMenu = () => {
	return (
		<Col
			id="menu"
			sm={1}
			className="h-100 d-flex align-items-center justify-content-center border-end border-success"
		>
			<Button
				variant="dark"
				className="h-100 w-100 p-2 d-flex align-items-center justify-content-center"
				type="button"
			>
				<div className="d-flex align-items-center justify-content-center">
					<img
						src={DigitalThreatLogo}
						alt="Digital Threat Logo"
						style={{ maxHeight: "1.3em", marginRight: ".4em" }}
					/>
					<span className="text-success fw-bold">HOME</span>
				</div>
			</Button>
		</Col>
	);
};

export default MainMenu;
