import { applyMiddleware, compose, createStore, StoreEnhancerStoreCreator } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { State } from '../reducers/initialState';

const middlewares: (next: StoreEnhancerStoreCreator<State>) => StoreEnhancerStoreCreator<State> = 
    applyMiddleware(thunk);

const configureStore = (initialState: State) => createStore<State>(
    rootReducer,
    initialState,
    compose(middlewares)
);

export default configureStore;
