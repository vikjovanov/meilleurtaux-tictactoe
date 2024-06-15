import { atom, useAtom } from 'jotai';
import { TGameMode } from '../types';

export type TPartyConfig = {
	mode: TGameMode;
};

const tempDefaultConfig: TPartyConfig = {
	mode: 'expert',
};

const partyConfigAtom = atom<TPartyConfig | null>(tempDefaultConfig);

const usePartyConfig = () => {
	return useAtom(partyConfigAtom);
};

export default usePartyConfig;
