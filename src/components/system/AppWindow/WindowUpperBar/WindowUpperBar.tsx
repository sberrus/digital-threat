import SizingButtons from "./SizingButtons";

const WindowUpperBar = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				position: "relative",
				border: "1px solid green",
				height: "2.3em",
			}}
		>
			{/* Home Button */}
			<section id="home">home</section>
			{/* WindowUpperBar Sizing Buttons */}
			<SizingButtons />
		</div>
	);
};

export default WindowUpperBar;
