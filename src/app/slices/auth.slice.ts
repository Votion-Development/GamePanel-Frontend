import { SLICES } from '#lib/constants';
import { DummyUser } from '#lib/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EggState {
	user?: DummyUser;
	authenticated?: boolean;
}

const initialState: EggState = {
	authenticated: false,
} as EggState;

export const AuthSlice = createSlice({
	name: SLICES.AUTH,
	initialState,
	reducers: {
		setAuthenticated(state, action: PayloadAction<boolean>) {
			state.authenticated = action.payload;
		},
		setUser(state, action: PayloadAction<DummyUser>) {
			state.user = action.payload;
		},
	},
});

export const { setAuthenticated, setUser } = AuthSlice.actions;

export const selectAuthenticated = (state: EggState) => state.authenticated;
export const selectUser = (state: EggState) => state.user;

export default AuthSlice.reducer;
