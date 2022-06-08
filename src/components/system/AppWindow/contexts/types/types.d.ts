export type WindowControllerComponentProps = {
	children: JSX.Element | JSX.Element[];
};

export type AppInfoType = {
	name?: string;
	description?: string;
};

export type SettingsType = {
	windowLayoutState: "fullscreen" | "window" | "minimized";
	appInfo?: AppInfoType;
};

type CustomWindowSizeType = {
	height: string;
	width: string;
};

export type WindowControllerContextType = {
	settings: SettingsType;
	minimizeWindow?: () => void;
	fullScreenWindow?: () => void;
	setCustomWindowSize?: (CustomWindowSizeType) => void;
};
