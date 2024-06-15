import { TGameConfig } from './types';

export const GAMES_CONFIG: Array<TGameConfig> = [
	{
		difficulty: 'beginner',
		gridSize: 9,
		winningCondition: 3,
	},
	{
		difficulty: 'intermediate',
		gridSize: 36,
		winningCondition: 4,
	},
	{
		difficulty: 'beginner',
		gridSize: 81,
		winningCondition: 5,
	},
	{
		difficulty: 'beginner',
		gridSize: 121,
		winningCondition: 6,
	},
];
