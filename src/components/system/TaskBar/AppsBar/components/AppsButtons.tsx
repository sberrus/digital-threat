import { Button } from "react-bootstrap";

type AppsButtonProps = {
	logoRoute: string;
};

const AppsButtons = ({ logoRoute }: AppsButtonProps) => {
	return (
		<Button
			variant="dark"
			className="ms-2"
			style={{
				padding: "14px",
				width: "2.8em",
				height: "2.8em",
				position: "relative",
				overflow: "hidden",
			}}
		>
			<img
				src={logoRoute}
				alt="sample Image"
				style={{ height: "95%", position: "absolute", top: "0", left: "0" }}
			/>
		</Button>
	);
};

export default AppsButtons;
