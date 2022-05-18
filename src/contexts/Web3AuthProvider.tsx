import { createContext, useState } from "react";
type Props = {
	children: JSX.Element;
};

type ContextValue = {
	login(): void;
};

export const Web3AuthContext = createContext({});

const Web3AuthProvider = ({ children }: Props) => {
	const [user, setUser] = useState(null);

	let contextValue = {
		user,
		login() {
			alert("hola");
		},
	};

	return <Web3AuthContext.Provider value={contextValue}>{children}</Web3AuthContext.Provider>;
};

export default Web3AuthProvider;
