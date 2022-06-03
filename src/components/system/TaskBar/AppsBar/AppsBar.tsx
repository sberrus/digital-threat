import { Col } from "react-bootstrap";
import AppsButtons from "./components/AppsButtons";
import Logo1 from "../../../../assets/gif/NeonFloor.gif";
import Logo2 from "../../../../assets/gif/vino.gif";
import Logo3 from "../../../../assets/gif/BeachInsideCar.gif";
import Logo4 from "../../../../assets/gif/VirtualWave.gif";
const AppsBar = () => {
	return (
		<Col id="appsBar" sm={9} className="h-100 d-flex align-items-center justify-content-start">
			<AppsButtons logoRoute={Logo1} />
			<AppsButtons logoRoute={Logo2} />
			<AppsButtons logoRoute={Logo3} />
			<AppsButtons logoRoute={Logo4} />
		</Col>
	);
};

export default AppsBar;
