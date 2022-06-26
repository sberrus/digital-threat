import HomeSection from "./HomeButton";
import SizingSection from "./SizingSection";

const WindowUpperBar = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				position: "relative",
				height: "2.3em",
				borderBottom: "1px solid green",
				boxShadow: "0px 0px 2px #00FF17",
			}}
		>
			<HomeSection />
			<SizingSection />
		</div>
	);
};

export default WindowUpperBar;
