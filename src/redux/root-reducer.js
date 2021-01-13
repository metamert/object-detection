import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';


const persistConfig = {
 
 
};

const rootReducer = combineReducers({
  tasks: userReducer,

});

export default rootReducer
