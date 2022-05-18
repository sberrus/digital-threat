import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Web3AuthProvider from "./contexts/Web3AuthProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Web3AuthProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Web3AuthProvider>
	</React.StrictMode>
);
