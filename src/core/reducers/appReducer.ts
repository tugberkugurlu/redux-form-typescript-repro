import * as types from '../actions/actionTypes';
import { AppStartedAction, AppStartFailedAction, AppStartKickedAction } from '../actions/app';
import initialState, { AppState } from './initialState';

type AppAction = AppStartedAction |
    AppStartFailedAction |
    AppStartKickedAction;

const appReducer = (state = initialState.app, action: AppAction): AppState => {
    switch(action.type) {
        case types.APP_START_KICKED:
            return { ...state, 
                status: 'Starting', 
                lastUpdatedOn: new Date() 
            };

        case types.APP_STARTED:
            return { ...state, 
                status: 'Started', 
                lastUpdatedOn: new Date() 
            };

        case types.APP_START_FAILED:
            return { ...state, 
                status: 'FailedToStart', 
                lastUpdatedOn: new Date(),
                errorReason: action.reason
            };
        
        default:
            return state;
    }
};

export default appReducer;
