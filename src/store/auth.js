import {atom, useAtomValue, useSetAtom} from 'jotai';
import {atomWithStorage} from 'jotai/utils';

export const tokenState = atomWithStorage('token', null);
export const useToken = () => useAtomValue(tokenState);
export const useSetToken = () => useSetAtom(tokenState);

export const userState = atomWithStorage('user', null);
export const useUser = () => useAtomValue(userState);
export const useSetUser = () => useSetAtom(userState);


export const isLoggedState = atom((get) => !!get(tokenState));
export const useIsLogged = () => useAtomValue(isLoggedState);

