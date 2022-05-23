import { FC } from "react";
import { Container } from "react-bootstrap";
import NeonFloor from "../../assets/gif/NeonFloor.gif";
import MetamaskLogo from "../../assets/gif/MetamaskLogo.gif";

const Login: FC = () => {
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
						src={NeonFloor}
						alt="background GIF retro"
						style={{
							width: "100%",
							height: "100%",
						}}
					/>
				</div>
				{/* MetamaskButton */}
				<a
					href="#"
					style={{
						background: "#fff",
						position: "absolute",
						display: "flex",
						alignContent: "center",
						justifyContent: "center",
						width: "20em",
						height: "20em",
						overflow: "hidden",
						zIndex: "0",
						bottom: "0",
						left: "0",
						margin: "1em",
						borderRadius: "50rem",
						boxShadow: "rgb(255 255 255 / 63%) 0px 0px 40px",
					}}
				>
					<img src={MetamaskLogo} alt="Metamask gif logo" />
				</a>
			</Container>
		</>
	);
};

export default Login;
