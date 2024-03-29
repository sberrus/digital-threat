import UseWeb3Auth from "../../../../contexts/UseWeb3Auth";
import MetamaskLogo from "./assets/MetamaskLogo.svg";

const Web3Connector = () => {
	const web3Auth: any = UseWeb3Auth();

	const alert = () => {
		web3Auth.login();
	};

	return (
		<>
			<button
				onClick={() => {
					alert();
				}}
				className="h-100 bg-dark"
				style={{ border: "none" }}
			>
				<img src={MetamaskLogo} alt="Metamask Logo" />
			</button>
		</>
	);
};

export default Web3Connector;
