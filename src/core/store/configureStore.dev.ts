import { applyMiddleware, compose, createStore, StoreEnhancerStoreCreator } from 'redux';
import * as reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import * as createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { State } from '../reducers/initialState';

const logger = createLogger();
const devExtension = (window as any).devToolsExtension;
const middlewares: (next: StoreEnhancerStoreCreator<State>) => StoreEnhancerStoreCreator<State> = 
    applyMiddleware(thunk, reduxImmutableStateInvariant(), logger);

const configureStore = (initialState: State) => createStore<State>(
    rootReducer,
    initialState,
    compose(
        middlewares,
        devExtension ? devExtension() : f => f
    )
);

export default configureStore;
