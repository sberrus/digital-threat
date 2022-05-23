// React
import { FC, useEffect, useState } from "react";
// React-bootstrap
import { Button, Container } from "react-bootstrap";
// web3context
import UseWeb3Auth from "../../contexts/UseWeb3Auth";
// assets
import NeonFloor from "../../assets/gif/NeonFloor.gif";
import MetamaskLogo from "../../assets/gif/MetamaskLogo.gif";
import BeachInsideCar from "../../assets/gif/BeachInsideCar.gif";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
	const web3Context = UseWeb3Auth();

	const navigate = useNavigate();

	const connectWallet = () => {
		web3Context?.login();
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
						src={BeachInsideCar}
						alt="background GIF retro"
						style={{
							width: "100%",
							height: "100%",
							transition: "all 1s",
						}}
					/>
				</div>
				{/* Metamask Login Container */}
				<div
					style={{
						background: "#fff",
						position: "absolute",
						display: "flex",
						flexDirection: "column",
						alignContent: "center",
						justifyContent: "start",
						width: "25em",
						height: "25em",
						overflow: "hidden",
						zIndex: "0",
						bottom: "0",
						left: "0",
						margin: "0",
						borderRadius: "0",
						borderTopRightRadius: "30%",
						boxShadow: "rgb(255 255 255 / 63%) 0px 0px 40px",
						transition: "all .5s",
					}}
				>
					<Container
						style={{
							position: "relative",
							display: "flex",
							flexDirection: "column",
							height: "100%",
						}}
					>
						<header style={{ height: "30%" }}>
							{/* Logo holder */}
							<div
								style={{
									background: "inherit",
									border: "none",
									height: "100%",
									display: "flex",
								}}
							>
								<img
									src={MetamaskLogo}
									alt="Metamask gif logo"
									style={{ height: "100%", margin: "auto" }}
								/>
							</div>
						</header>
						{/* Body Content */}
						<main
							style={{
								height: "100%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "column",
							}}
						>
							{web3Context?.wallet?.active ? (
								<>
									<h3>Walet Conectada </h3>
									<small className="m-2">
										<b>{web3Context.wallet.walletHash}</b>
									</small>
									<Button
										variant="dark"
										onClick={() => {
											navigate("/window");
										}}
									>
										Ir a Virtual Machine
									</Button>{" "}
								</>
							) : (
								<Button
									variant="dark"
									onClick={() => {
										connectWallet();
									}}
								>
									Conectar Wallet
								</Button>
							)}
						</main>
					</Container>
				</div>
			</Container>
		</>
	);
};

export default Login;
