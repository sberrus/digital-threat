import style from "./body.module.scss";
import CollectionsAndNFT from "./components/CollectionsAndNFT";

const Body = () => {
	return (
		<div className={style.body}>
			{/* COLLECTIONS AND BADGES */}
			<CollectionsAndNFT />
			{/* NOTIFICATIONS SECTIONS */}
		</div>
	);
};

export default Body;
