export type WindowLayoutType = "fullscreen" | "window" | "minimized";

export type WindowControllerComponentProps = {
	windowLayoutState: WindowLayoutType;
	children: JSX.Element | JSX.Element[];
};

export type AppInfoType = {
	name?: string;
	description?: string;
};

export type SettingsType = {
	windowLayoutState: WindowLayoutType;
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
