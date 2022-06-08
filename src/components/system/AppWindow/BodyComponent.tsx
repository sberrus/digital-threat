import useWindowController from "./contexts/UseWindowController";
import WindowUpperBar from "./WindowUpperBar/WindowUpperBar";

const BodyComponent = ({ appName }: { appName: string }) => {
	const windowController = useWindowController();
	return (
		<div
			id="AppWindow"
			style={{
				position: "absolute",
				width:
					windowController?.settings.windowLayoutState === "fullscreen"
						? "100%"
						: "25%",
				height:
					windowController?.settings.windowLayoutState === "minimized"
						? "0%"
						: windowController?.settings.windowLayoutState ===
						  "fullscreen"
						? "100%"
						: "75%",
				bottom: "0",
				right: "0",
				zIndex: "0",
				background: "#1d1d1d",
				border: "1px solid green",
				boxShadow: "inset 0px 0px 2px #00FF17",
				transition: "all .2s",
				overflow: "hidden",
			}}
		>
			{/* APP`S UPPERBAR */}
			<WindowUpperBar />
			{/* APP`S BODY */}
			<div id="appBodyComponent">
				<h5>{appName}</h5>
				<input className="border border-danger w-100" />
			</div>
			{/* APP`S FOOTER */}
		</div>
	);
};

export default BodyComponent;
