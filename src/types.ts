export type TGameMode = 'beginner' | 'intermediate' | 'pro' | 'expert';
export type TGameConfig = {
	difficulty: TGameMode;
	gridSize: number;
	winningCondition: number;
};
