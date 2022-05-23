// React
import { FC, useState } from "react";
// React-bootstrap
import { Button, Container } from "react-bootstrap";
// web3context
import UseWeb3Auth from "../../contexts/UseWeb3Auth";
// assets
import NeonFloor from "../../assets/gif/NeonFloor.gif";
import MetamaskLogo from "../../assets/gif/MetamaskLogo.gif";
import BeachInsideCar from "../../assets/gif/BeachInsideCar.gif";
import context from "react-bootstrap/esm/AccordionContext";

const Login: FC = () => {
	const [isLogingIn, setIsLogingIn] = useState<boolean>(false);

	const useWeb3Context = UseWeb3Auth();

	const connectWallet = () => {
		useWeb3Context?.login();
	};

	const handleLoginInFlag = () => {
		setIsLogingIn((prev) => !prev);
	};

	return (
		<>
			{/* Page Container */}
			<Container
				fluid
				className="p-0"
				style={{
					width: "100wh",
					height: "100vh",
					overflow: "hidden",
					position: "relative",
				}}
			>
				{/* Background Layer */}
				<div
					id="backgroundLayer"
					style={{
						width: "100%",
						height: "100%",
						zIndex: "-1",
					}}
				>
					<img
						src={isLogingIn ? BeachInsideCar : NeonFloor}
						alt="background GIF retro"
						style={{
							width: "100%",
							height: "100%",
							transition: "all 1s",
						}}
					/>
				</div>
				{/* MetamaskButton */}
				<div
					style={{
						background: "#fff",
						position: "absolute",
						display: "flex",
						flexDirection: "column",
						alignContent: "center",
						justifyContent: isLogingIn ? "start" : "center",
						width: isLogingIn ? "25em" : "15em",
						height: isLogingIn ? "25em" : "15em",
						overflow: "hidden",
						zIndex: "0",
						bottom: "0",
						left: "0",
						margin: isLogingIn ? "0" : "3em",
						borderRadius: isLogingIn ? "0" : "50rem",
						borderTopRightRadius: isLogingIn ? "30%" : "50rem",
						boxShadow: "rgb(255 255 255 / 63%) 0px 0px 40px",
						transition: "all .5s",
					}}
				>
					{useWeb3Context?.wallet ? (
						<Container
							id="loginContainer"
							style={{
								position: "relative",
								display: "flex",
								flexDirection: "column",
								height: "100%",
							}}
						>
							<header>
								<div
									id="imgContainer"
									style={{
										position: "relative",
										top: "0",
										left: "-40px",
										width: "10em",
									}}
								>
									<button
										onClick={handleLoginInFlag}
										style={{
											height: "100%",
											width: "100%",
											background: "inherit",
											margin: "auto",
											border: "none",
										}}
									>
										<img
											src={MetamaskLogo}
											alt="Metamask gif logo"
											style={{ width: "100%" }}
										/>
									</button>
								</div>
							</header>
							<main
								style={{
									height: "100%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Button variant="dark" onClick={connectWallet}>
									Conectar Wallet
								</Button>
							</main>
						</Container>
					) : (
						<button
							onClick={handleLoginInFlag}
							style={{
								height: "100%",
								width: "100%",
								background: "inherit",
								margin: "auto",
								border: "none",
							}}
						>
							<img
								src={MetamaskLogo}
								alt="Metamask gif logo"
								style={{ width: "100%" }}
							/>
						</button>
					)}
				</div>
			</Container>
		</>
	);
};

export default Login;
