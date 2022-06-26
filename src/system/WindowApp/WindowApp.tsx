import { ReactFragment } from "react";
import BodyComponent from "./BodyComponent";
import { WindowLayoutType } from "./contexts/types/types";
import WindowControllerProvider from "./contexts/WindowController";

type WindowAppContainerProps = {
	appName: string;
	children: JSX.Element | ReactFragment;
	windowLayoutState: WindowLayoutType;
};

/**
 * Windows app is a component what is used for instantiate a window in the machine.
 * Inside the window will be the our own app and the creators app.
 * It holds all the funtionality of every instance of the WindowApp.
 * @param appName WindowApp identifier
 * @returns WindowAppWindow instance
 */
const WindowAppContainer = ({
	appName,
	children,
	windowLayoutState,
}: WindowAppContainerProps) => {
	// GET THE CONFIG FOR THE APP
	// 1: Initial layout screen | modal
	// 1.1: if screen : ["fullscreen" "half-screen-start" "half-screen-end"] // las ventanas deben ser flexibles respecto a las dimensiones de la misma.
	//      if modal:   ["modal-start" "modal-end"] // los modales no tendrán barra superior y ocuparan todo el espacio de alto.

	return (
		<WindowControllerProvider windowLayoutState={windowLayoutState}>
			<BodyComponent appName={appName}>{children}</BodyComponent>
		</WindowControllerProvider>
	);
};

export default WindowAppContainer;
