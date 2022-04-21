import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';

export const useEggDispatch = () => useDispatch<AppDispatch>();
export const useEggSelector: TypedUseSelectorHook<RootState> = useSelector;
