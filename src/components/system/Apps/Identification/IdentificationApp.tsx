import { FC } from "react";
import style from "./style.module.scss";

const IdentificationApp: FC = () => {
	return (
		<>
			<section className={style.header}>
				<div className={style.profilePictureContainer}>
					<img
						src="https://images.unsplash.com/photo-1525382455947-f319bc05fb35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
						alt="Llamar a NFT"
					/>
				</div>
				<div className={style.bannerContainer}>
					<img
						src="https://images.unsplash.com/photo-1576574054494-fa7935c4ae6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
						alt="Llamar a NFT"
					/>
				</div>
				<div className={style.configSection}>asldkjg</div>
			</section>
		</>
	);
};

export default IdentificationApp;
