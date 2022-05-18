import { Route, Routes } from "react-router-dom";
import Window from "./pages/Window";

const App = () => {
	return (
		<Routes>
			<Route path="/">
				<Route index element={<Window />} />
			</Route>
		</Routes>
	);
};

export default App;
