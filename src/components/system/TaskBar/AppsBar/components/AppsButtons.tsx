import { Button } from "react-bootstrap";

type AppsButtonProps = {
	logoRoute: string;
};

const AppsButtons = ({ logoRoute }: AppsButtonProps) => {
	return (
		<Button variant="outline-success" className="h-100 ms-2">
			<img src={logoRoute} alt="sample Image" style={{ height: "100%" }} />
		</Button>
	);
};

export default AppsButtons;
