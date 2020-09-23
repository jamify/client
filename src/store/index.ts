import { combineReducers, createStore } from 'redux';
import { profileReducer } from './profile/reducers';
import { systemReducer } from './system/reducers';
import { devicesReducer } from './devices/reducers';

const rootReducer = combineReducers({
  system: systemReducer,
  profile: profileReducer,
  devices: devicesReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
