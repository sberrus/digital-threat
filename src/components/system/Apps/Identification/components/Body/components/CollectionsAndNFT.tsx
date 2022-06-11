import { useState } from "react";
import BadgesList from "./BadgesList";
import style from "./CollectionsAndNFT.module.scss";
import NFTList from "./NFTList";

const CollectionsAndNFT = () => {
	const [selectedTab, setSelectedTab] = useState("NFT");

	const handleChangeTab = (toTab: "NFT" | "BADGES") => {
		setSelectedTab(toTab);
	};
	return (
		<div className={style.container}>
			{/* pestañas */}
			<div className={style.tabs}>
				<button
					className={`${style.tab} ${
						selectedTab === "BADGES" && style.tabSelected
					}`}
					onClick={() => {
						handleChangeTab("BADGES");
					}}
				>
					BADGES
				</button>
				<button
					className={`${style.tab} ${
						selectedTab === "NFT" && style.tabSelected
					}`}
					onClick={() => {
						handleChangeTab("NFT");
					}}
				>
					NFT'S
				</button>
			</div>
			{/* assets */}
			{selectedTab === "NFT" && <NFTList />}
			{selectedTab === "BADGES" && <BadgesList />}
		</div>
	);
};

export default CollectionsAndNFT;
