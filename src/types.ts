export type TGameMode = 'beginner' | 'intermediate' | 'pro' | 'expert';
export type TGameConfig = {
	mode: TGameMode;
	gridSize: number;
	winningCondition: number;
};
