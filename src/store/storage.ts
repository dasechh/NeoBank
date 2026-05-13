import { storageKey } from '@/constants';

export const loadState = () => {
  try {
    const state = localStorage.getItem(storageKey);
    return state ? JSON.parse(state) : undefined;
  } catch {
    return undefined;
  }
};

export const saveState = (state: unknown) => {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch {}
};
