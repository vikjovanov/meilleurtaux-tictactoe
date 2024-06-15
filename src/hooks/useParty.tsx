import { atom, useAtom } from 'jotai';

export type TPartyConfig = {
	difficulty: string;
};

const partyAtom = atom<TPartyConfig | null>(null);

const useParty = () => {
	return useAtom(partyAtom);
};

export default useParty;
