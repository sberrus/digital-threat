import WindowUpperBar from "./WindowUpperBar/WindowUpperBar";

const AppWindow = () => {
	// GET THE CONFIG FOR THE APP
	// 1: Initial layout screen | modal
	// 1.1: if screen : ["fullscreen" "half-screen-start" "half-screen-end"] // las ventanas deben ser flexibles respecto a las dimensiones de la misma.
	//      if modal:   ["modal-start" "modal-end"] // los modales no tendrán barra superior y ocuparan todo el espacio de alto.

	return (
		<div
			id="AppWindow"
			style={{
				position: "absolute",
				width: "25%",
				height: "75%",
				bottom: "0",
				right: "0",
				zIndex: "1",
				background: "#1d1d1d",
				border: "1px solid green",
				boxShadow: "inset 0px 0px 2px #00FF17",
			}}
		>
			{/* APP`S UPPERBAR */}
			<WindowUpperBar />
			{/* APP`S BODY */}
			{/* APP`S FOOTER */}
		</div>
	);
};

export default AppWindow;
