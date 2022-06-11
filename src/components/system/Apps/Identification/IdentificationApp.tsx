import { FC } from "react";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import style from "./window.module.scss";

const IdentificationApp: FC = () => {
	return (
		<div className={style.window}>
			<Header />
			<Body />
		</div>
	);
};

export default IdentificationApp;
