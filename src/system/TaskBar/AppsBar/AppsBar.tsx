import { Col } from "react-bootstrap";
import AppsButtons from "./components/AppsButtons";

const AppsBar = () => {
	return (
		<div
			id="appsBar"
			style={{
				width: "100%",
				display: "flex",
				padding: "0 0.5em",
				alignItems: "center",
				justifyContent: "flex-start",
				// border: "1px solid blue",
			}}
		>
			<AppsButtons>WORLD</AppsButtons>
			<AppsButtons>FORUMS</AppsButtons>
			<AppsButtons>CHATS</AppsButtons>
		</div>
	);
};

export default AppsBar;
