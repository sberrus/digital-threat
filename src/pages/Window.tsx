import { Container } from "react-bootstrap";
import WindowsContainer from "../components/system/WindowsContainer";
import TaskBar from "../components/system/TaskBar/TaskBar";
import UseWeb3Auth from "../contexts/UseWeb3Auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Window = () => {
	const web3Auth = UseWeb3Auth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!web3Auth?.wallet?.active) {
			navigate("/");
		}
		return () => {};
	}, []);

	return (
		<Container fluid id="windowBackground" className="vh-100 bg-dark p-0 text-light">
			<WindowsContainer />
			<TaskBar />
		</Container>
	);
};

export default Window;
