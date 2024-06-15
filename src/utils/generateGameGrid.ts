import { GAMES_CONFIG } from '../constants';
import { TGame, TGameConfig, TGameMode, TTileValueEnum } from '../types';

const generateGameGrid = (mode: TGameMode): TGame => {
	const config = GAMES_CONFIG.find(conf => conf.mode === mode) as TGameConfig;

	const edgeSize = Math.sqrt(config.gridSize);
	const row: Array<TTileValueEnum> = Array(edgeSize).fill(
		TTileValueEnum.EMPTY,
	);
	return Array(edgeSize).fill(row);
};

export default generateGameGrid;
