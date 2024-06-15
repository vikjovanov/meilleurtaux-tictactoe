import { atom, useAtom } from 'jotai';
import { TGameMode } from '../types';

const gameModeAtom = atom<TGameMode | null>(null);

const useGameMode = () => {
	return useAtom(gameModeAtom);
};

export default useGameMode;
