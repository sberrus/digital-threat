import { createContext, useEffect, useState } from "react";
export const Web3AuthContext = createContext({});

type Props = {
	children: JSX.Element;
};

const Web3AuthProvider = ({ children }: Props) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		if (!window.ethereum) {
			// Metamask exists
			alert("Debes instalar Metamask para poder usar esta app [REDIRIGIR A PÁGINA INSTALACIÓN METAMASK]");
			// Redirect
		}
		return () => {};
	}, []);

	let contextValue = {
		user,
		login() {
			if (window.ethereum) {
				// Metamask exists
				alert("Funcionaaaaa");
			} else {
				alert("Debes tener instalado metamask");
			}
		},
	};

	return <Web3AuthContext.Provider value={contextValue}>{children}</Web3AuthContext.Provider>;
};

export default Web3AuthProvider;
