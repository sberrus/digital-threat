import { FC } from "react";
import style from "./style.module.scss";
import bannerPlaceholder from "./assets/ascii.svg";
import samdevProfile from "./assets/samdev.gif";

const IdentificationApp: FC = () => {
	return (
		<>
			<section className={style.header}>
				<div className={style.profilePictureContainer}>
					<div className={style.profilePictureImgContainer}>
						<img src={samdevProfile} alt="Llamar a NFT" />
					</div>
				</div>
				<div className={style.bannerContainer}>
					<img src={bannerPlaceholder} alt="Llamar a NFT" />
				</div>
				<div className={style.configSection}>
					<div className={style.configSection_buttonHolder}>
						<button className={style.buttonHolder_button}>boton 1</button>
						<button className={style.buttonHolder_button}>boton 2</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default IdentificationApp;
