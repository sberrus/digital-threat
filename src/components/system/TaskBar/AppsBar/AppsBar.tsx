import { Col, Container } from "react-bootstrap";
import AppsButtons from "./components/AppsButtons";
import SampleLogo from "../../assets/sample/100x100.svg";

const AppsBar = () => {
	return (
		<Col id="appsBar" sm={9} className="h-100 d-flex align-items-center justify-content-start">
			<Container fluid className="h-100">
				<AppsButtons logoRoute={SampleLogo} />
				<AppsButtons logoRoute={SampleLogo} />
				<AppsButtons logoRoute={SampleLogo} />
				<AppsButtons logoRoute={SampleLogo} />
			</Container>
		</Col>
	);
};

export default AppsBar;
