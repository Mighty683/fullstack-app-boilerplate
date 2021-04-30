/* istanbul ignore file */

import thunk from 'redux-thunk';
import {Persistor, persistReducer, persistStore} from 'redux-persist';
import {applyMiddleware, createStore} from 'redux';
import storage from 'redux-persist/lib/storage';

import { RootReducer } from './reducers';
import { AppDispatch } from './types';

const persistedReducer = persistReducer({
  storage: storage,
  key: 'root',
  whitelist: ['auth'],
}, RootReducer);

export const store = createStore(persistedReducer, applyMiddleware<AppDispatch>(thunk));

export const persistor: Persistor = persistStore(store);
