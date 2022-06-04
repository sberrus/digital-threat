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
			<section id="home">home</section>
			<SizingButtons />
		</div>
	);
};

export default WindowUpperBar;
