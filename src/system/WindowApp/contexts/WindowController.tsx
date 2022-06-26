import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	SettingsType,
	WindowControllerComponentProps,
	WindowControllerContextType,
} from "./types/types";

export const WindowControllerContext =
	createContext<WindowControllerContextType | null>(null);

const WindowControllerProvider = ({
	children,
	windowLayoutState,
}: WindowControllerComponentProps) => {
	const navigate = useNavigate();
	const [settings, setSettings] = useState<SettingsType>({
		windowLayoutState,
	});

	const minimizeWindow = () => {
		setSettings({ windowLayoutState: "minimized" });
	};
	const fullScreenWindow = () => {
		setSettings({ windowLayoutState: "fullscreen" });
	};
	const setCustomWindowSize = () => {
		setSettings({ windowLayoutState: "window" });
	};
	let WindowController = {
		settings,
		minimizeWindow,
		fullScreenWindow,
		setCustomWindowSize,
	};

	return (
		<WindowControllerContext.Provider value={WindowController}>
			{children}
		</WindowControllerContext.Provider>
	);
};

export default WindowControllerProvider;
