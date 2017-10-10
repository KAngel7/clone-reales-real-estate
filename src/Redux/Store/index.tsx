import { compose, applyMiddleware, createStore, Store, StoreEnhancer, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { persistStore, autoRehydrate } from 'redux-persist';
import user, { UserState } from '../Modules/User';
import status, { StatusState } from '../Modules/Status';
import storage, { StorageState } from '../Modules/Storage';
import logger from 'redux-logger';

interface RootState {
  status: StatusState;
  user?: UserState;
  storage?: StorageState;
}
const initState: RootState = {
  status: {
    isPersist: false,
    isLogin: false
  }
}; 

const rootReducer = combineReducers<RootState>({
  user,
  status,
  storage
});

const hydrate: StoreEnhancer<RootState> = autoRehydrate() as StoreEnhancer<RootState>;
const middleware: StoreEnhancer<RootState> = applyMiddleware(promise(), thunk, logger);
const store: Store<RootState> = createStore<RootState>(rootReducer, initState, compose(middleware, hydrate));

persistStore(store, { whitelist: ['storage'] } );

export default store;