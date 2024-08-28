import { combineReducers } from '@reduxjs/toolkit';
import memberReducer from './memberReducer';

const rootReducer = combineReducers({
  members: memberReducer,
});

export default rootReducer;
