import BodyComponent from "./BodyComponent";
import useWindowController from "./contexts/UseWindowController";
import WindowControllerProvider from "./contexts/WindowController";
import WindowUpperBar from "./WindowUpperBar/WindowUpperBar";

const AppWindow = ({ appName }: { appName: string }) => {
	// GET THE CONFIG FOR THE APP
	// 1: Initial layout screen | modal
	// 1.1: if screen : ["fullscreen" "half-screen-start" "half-screen-end"] // las ventanas deben ser flexibles respecto a las dimensiones de la misma.
	//      if modal:   ["modal-start" "modal-end"] // los modales no tendrán barra superior y ocuparan todo el espacio de alto.

	return (
		<WindowControllerProvider>
			<BodyComponent appName={appName} />
		</WindowControllerProvider>
	);
};

export default AppWindow;
