export type Web3ContextComponentProps = {
	children: JSX.Element;
};
export type WalletType = {
	active: boolean;
	walletHash: string | null;
};

export type Web3ContextType = {
	wallet: WalletType | null;
	login(): void;
};
