export type Web3ContextComponentProps = {
	children: JSX.Element;
};

export type Web3ContextType = {
	wallet: string | null;
	login(): void;
};
