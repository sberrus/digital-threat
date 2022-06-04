import MainMenu from "./MainMenu/MainMenu";
import AppsBar from "./AppsBar/AppsBar";
import DateAndWidget from "./DateAndWidget/DateAndWidget";

// import Barrita from "./Barrita/Barrita";

const TaskBar = () => {
	return (
		<div
			style={{
				height: "5%",
				display: "flex",
				justifyContent: "space-between",
			}}
		>
			<div
				style={{
					display: "flex",
				}}
			>
				<MainMenu />
				<AppsBar />
			</div>
			<DateAndWidget />
		</div>
	);
};

export default TaskBar;
