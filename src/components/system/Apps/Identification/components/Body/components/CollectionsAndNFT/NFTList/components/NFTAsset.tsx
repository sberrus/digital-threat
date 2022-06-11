import style from "./NFTAsset.module.scss";
import placeholder from "./assets/placeholder.svg";

const NFTAsset = () => {
	return (
		<div className={style.NFTContainer}>
			<div className={style.assetHolder}>
				<img src={placeholder} alt="placeholder" />
			</div>
		</div>
	);
};

export default NFTAsset;
