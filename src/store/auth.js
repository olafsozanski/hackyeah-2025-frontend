import {atom, useAtomValue, useSetAtom} from 'jotai';

export const tokenState = atom(null);
export const useToken = () => useAtomValue(tokenState);
export const useSetToken = () => useSetAtom(tokenState);

export const userState = atom(null);
export const useUser = () => useAtomValue(userState);
export const useSetUser = () => useSetAtom(userState);


export const isLoggedState = atom((get) => !!get(tokenState));
export const useIsLogged = () => useAtomValue(isLoggedState);

