import { useContext } from "react";
import { Web3AuthContext } from "./Web3AuthProvider";

export default function UseWeb3Auth() {
	return useContext(Web3AuthContext);
}
