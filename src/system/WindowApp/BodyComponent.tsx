import { ReactFragment } from "react";
import useWindowController from "./contexts/UseWindowController";
import WindowUpperBar from "./WindowUpperBar/WindowUpperBar";

type BodyComponentProps = {
	appName: string;
	children: JSX.Element | ReactFragment;
};

const BodyComponent = ({ appName, children }: BodyComponentProps) => {
	const windowController = useWindowController();
	return (
		<div
			id="AppWindow"
			style={{
				position: "relative",
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
				opacity:
					windowController?.settings.windowLayoutState === "minimized"
						? "0"
						: "1",
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
			<div
				id={appName}
				style={{ height: "96%", overflow: "none", position: "relative" }}
			>
				{children}
			</div>
			{/* APP`S FOOTER */}
		</div>
	);
};

export default BodyComponent;
