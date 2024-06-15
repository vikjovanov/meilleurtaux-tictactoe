import { TGameConfig } from './types';

export const GAMES_CONFIG: Array<TGameConfig> = [
	{
		mode: 'beginner',
		gridSize: 9,
		winningCondition: 3,
	},
	{
		mode: 'intermediate',
		gridSize: 36,
		winningCondition: 4,
	},
	{
		mode: 'pro',
		gridSize: 81,
		winningCondition: 5,
	},
	{
		mode: 'expert',
		gridSize: 121,
		winningCondition: 6,
	},
];
