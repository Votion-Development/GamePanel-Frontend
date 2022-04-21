import { combineReducers } from '@reduxjs/toolkit';
import AuthReducer from './slices/auth.slice';

export default combineReducers({
	auth: AuthReducer,
});
