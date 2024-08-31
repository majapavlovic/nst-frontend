import { combineReducers } from '@reduxjs/toolkit';
import { memberReducer } from './memberReducer';
import { authReducer } from './authReducer';
import { academicTitleReducer } from './academicTitleReducer';
import { educationTitleReducer } from './educationTitleReducer';
import { scientificFieldReducer } from './scientificFieldReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  members: memberReducer,
  academicTitles: academicTitleReducer,
  educationTitles: educationTitleReducer,
  scientificFields: scientificFieldReducer
});

export default rootReducer;
