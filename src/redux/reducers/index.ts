import { combineReducers } from '@reduxjs/toolkit';
import { memberReducer } from './memberReducer';
import { authReducer } from './authReducer';
import { academicTitleReducer } from './academicTitleReducer';
import { educationTitleReducer } from './educationTitleReducer';
import { scientificFieldReducer } from './scientificFieldReducer';
import { departmentReducer } from './departmentReducer';
import { subjectReducer } from './subjectReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  members: memberReducer,
  academicTitles: academicTitleReducer,
  educationTitles: educationTitleReducer,
  scientificFields: scientificFieldReducer,
  departments: departmentReducer,
  subjects: subjectReducer
});

export default rootReducer;
