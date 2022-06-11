import { FC } from "react";
import style from "./header.module.scss";
import bannerPlaceholder from "./assets/ascii.svg";
import samdevProfile from "./assets/samdev.gif";

const Header: FC = () => {
	return (
		<>
			<section className={style.header}>
				{/* NFT profile */}
				<div className={style.profilePictureContainer}>
					<div className={style.profilePictureImgContainer}>
						<img src={samdevProfile} alt="Llamar a NFT" />
					</div>
				</div>
				{/* Central Banner */}
				<div className={style.bannerContainer}>
					<img src={bannerPlaceholder} alt="Llamar a NFT" />
				</div>
				{/* Config buttons */}
				<div className={style.configSection}>
					<div className={style.configSection_buttonHolder}>
						<button className={style.buttonHolder_button}>
							<div> Config</div> <div>[Logo]</div>
						</button>
						<button className={style.buttonHolder_button}>
							<div>Edit Profile</div> <div>[Logo]</div>
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Header;
