export type TGameMode = 'beginner' | 'intermediate' | 'pro' | 'expert';
export type TGameConfig = {
	mode: TGameMode;
	gridSize: number;
	winningCondition: number;
};

export enum TTileValueEnum {
	O = 'O',
	X = 'X',
	EMPTY = '.',
}

export enum TPlayerEnum {
	PLAYER_1 = 0,
	PLAYER_2 = 1,
}

export type TGame = Array<Array<TTileValueEnum>>;
