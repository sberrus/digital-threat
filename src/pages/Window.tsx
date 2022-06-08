import { Container } from "react-bootstrap";
import WindowsContainer from "../components/system/WindowContainer/WindowsContainer";
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
		<Container
			fluid
			id="windowBackground"
			className="vh-100 p-0 text-light bg-dark"
		>
			<WindowsContainer />
			<TaskBar />
		</Container>
	);
};

export default Window;
