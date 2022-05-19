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
			// Redirect to [install metamask]
		}
		return () => {};
	}, []);

	let contextValue = {
		user,
		login() {
			if (window.ethereum) {
				// Exists metamask
				window.ethereum.request({ method: "eth_requestAccounts" }).then((res: any) => {
					const ethereumAccount = res[0];
					console.log(ethereumAccount);
				});
			} else {
				alert("Debes tener instalada y activada el pluggin de Metamask");
			}
		},
	};

	return <Web3AuthContext.Provider value={contextValue}>{children}</Web3AuthContext.Provider>;
};

export default Web3AuthProvider;
