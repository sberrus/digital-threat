import { useContext } from "react";
import { WindowControllerContext } from "./WindowController";

export default function useWindowController() {
	return useContext(WindowControllerContext);
}
