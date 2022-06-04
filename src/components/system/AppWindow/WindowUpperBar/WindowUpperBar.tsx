import SizingButtons from "./SizingButtons";

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
			<section id="home">home</section>
			<SizingButtons />
		</div>
	);
};

export default WindowUpperBar;
