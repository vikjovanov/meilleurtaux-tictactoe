import { atom, useAtom } from 'jotai';
import { TPlayerEnum, TTileValueEnum } from '../types';

export type THistoryElement = {
	player: TPlayerEnum;
	x: number;
	y: number;
};

export type THistory = Array<THistoryElement>;

const historyAtom = atom<THistory>([]);

const useHistory = () => {
	const [history, setHistory] = useAtom(historyAtom);

	const addToHistory = (player: TPlayerEnum, x: number, y: number) => {
		setHistory(prev => [...prev, { player, x, y }]);
	};

	const resetHistory = () => setHistory([]);

	const getValue = (x: number, y: number) => {
		const historyElement = history.find(
			elem => elem.x === x && elem.y === y,
		);

		if (!historyElement) {
			return TTileValueEnum.EMPTY;
		}

		return historyElement.player === TPlayerEnum.PLAYER_1
			? TTileValueEnum.X
			: TTileValueEnum.O;
	};

	return { history, resetHistory, addToHistory, getValue };
};

export default useHistory;
