import DigitalThreatLogo from "../assets/logos/DigitalThreatLogo.svg";
const MainMenu = () => {
	return (
		<button
			className="h-100 w-100 bg-dark p-1"
			style={{
				border: "none",
			}}
			type="button"
		>
			<img src={DigitalThreatLogo} alt="Digital Threat Logo" width="35px" height={"33px"} />
		</button>
	);
};

export default MainMenu;
