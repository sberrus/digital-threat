import { Col, Row } from "react-bootstrap";

const AppsBar = () => {
	return (
		<Col
			id="appsBar"
			sm={5}
			md={7}
			lg={8}
			xl={9}
			className="h-100 d-flex align-items-center justify-content-start"
		>
			<Row>
				<Col as="button" className="btn btn-outline-success ms-2 h-75">
					app1
				</Col>
				<Col as="button" className="btn btn-outline-success ms-2 h-75">
					app2
				</Col>
			</Row>
		</Col>
	);
};

export default AppsBar;
