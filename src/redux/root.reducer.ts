import { combineReducers } from 'redux';

import menuReducer from './menu/menu.reducer';
import { educationReducer } from './education/education.reducer';

export const rootReducer = combineReducers({
  menu: menuReducer,
  education: educationReducer,
});

// Export for useSelector redux hook
export type RootState = ReturnType<typeof rootReducer>;