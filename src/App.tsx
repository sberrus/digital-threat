import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Window from "./pages/Window";

const App = () => {
	return (
		<Routes>
			<Route path="/">
				<Route index element={<Login />} />
			</Route>
			<Route path="/window">
				<Route index element={<Window />} />
			</Route>
		</Routes>
	);
};

export default App;
