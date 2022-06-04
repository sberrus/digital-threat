import { Button } from "react-bootstrap";

type AppsButtonsProps = {
	children: JSX.Element | string;
};

const AppsButtons = ({ children }: AppsButtonsProps) => {
	return <button style={{ height: "60%", width: "10em", marginRight: "1em" }}>{children}</button>;
};

export default AppsButtons;
