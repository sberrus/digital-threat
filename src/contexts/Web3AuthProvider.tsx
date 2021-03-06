import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	WalletType,
	Web3ContextComponentProps,
	Web3ContextType,
} from "./types/types";

export const Web3AuthContext = createContext<Web3ContextType | null>(null);

const Web3AuthProvider = ({ children }: Web3ContextComponentProps) => {
	const navigate = useNavigate();
	const [wallet, setWallet] = useState<WalletType>({
		active: false,
		walletHash: null,
	});

	/**
	 * todo: Dependiendo el nft que tengas de thema, crear un state para controlar los estados de transferencia de archivos
	 * desc: Crear un proceso que verifique los nfts que tenga adquiridos el cliente actual.
	 * Dependiendo de los estilos que tenga habilitados/adquiridos, realizar el proceso de descarga y cacheado del archivo.
	 *
	 * Primero leer el nft que tenga adquirido el cliente. De tener varios permitir elegir entre los que tenga y
	 *
	 */

	useEffect(() => {
		// Comprobar si tiene metamask Instalado
		if (!window.ethereum) {
			// Metamask exists
			alert(
				"Debes instalar Metamask para poder usar esta app [REDIRIGIR A PÁGINA INSTALACIÓN METAMASK]"
			);
			// Redirect to [install metamask]
		}

		// check if user have already a wallet connected
		// if (localStorage.getItem("wallet")) {
		// 	const savedWallet = localStorage.getItem("wallet");
		// 	setWallet(JSON.parse(savedWallet));
		// 	navigate("/window");
		// }

		return () => {};
	}, []);

	let contextValue = {
		wallet,
		login() {
			if (window.ethereum) {
				// Exists metamask
				window.ethereum
					.request({ method: "eth_requestAccounts" })
					.then((res: any) => {
						const ethereumAccount = res[0];
						const payload = { active: true, walletHash: ethereumAccount };
						setWallet(payload);
						localStorage.setItem("wallet", JSON.stringify(payload));
					});
			} else {
				alert("Debes tener instalada y activada el pluggin de Metamask");
			}
		},
	};

	return (
		<Web3AuthContext.Provider value={contextValue}>
			{children}
		</Web3AuthContext.Provider>
	);
};

export default Web3AuthProvider;
