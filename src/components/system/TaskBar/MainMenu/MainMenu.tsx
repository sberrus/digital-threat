import DigitalThreatLogo from "../../assets/logos/DigitalThreatLogo.svg";
const MainMenu = () => {
	return (
		<div
			id="menu"
			style={{
				display: "flex",
				padding: "0 0.5em",
				alignItems: "center",
				justifyContent: "center",
				// border: "1px solid yellow",
			}}
		>
			<button
				style={{
					height: "60%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					width: "8em",
				}}
			>
				<img
					src={DigitalThreatLogo}
					alt="Digital Threat Logo"
					style={{ height: "60%", marginRight: ".4em" }}
				/>
				<span className="text-success fw-bold">HOME</span>
			</button>
		</div>
	);
};

export default MainMenu;
