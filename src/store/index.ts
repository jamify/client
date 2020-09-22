import { combineReducers, createStore } from 'redux';
import { profileReducer } from './profile/reducers';
import { systemReducer } from './system/reducers';

const rootReducer = combineReducers({
  system: systemReducer,
  profile: profileReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
