import { combineReducers } from '@reduxjs/toolkit';
import { memberReducer } from './memberReducer';
import { authReducer } from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  members: memberReducer
});

export default rootReducer;
