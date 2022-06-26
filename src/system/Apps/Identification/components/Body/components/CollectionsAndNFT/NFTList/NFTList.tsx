import NFTAsset from "./components/NFTAsset";
import style from "./NFTList.module.scss";
const NFTList = () => {
	return (
		<div className={style.container}>
			<NFTAsset />
			<NFTAsset />
			<NFTAsset />
			<NFTAsset />
			<NFTAsset />
			<NFTAsset />
		</div>
	);
};

export default NFTList;
