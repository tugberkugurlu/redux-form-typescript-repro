import * as types from './actionTypes';

export type AppStartKickedAction = {
    type: types.APP_START_KICKED
};

export type AppStartedAction = {
    type: types.APP_STARTED
};

export type AppStartFailedAction = {
    type: types.APP_START_FAILED
    reason: string
};

export const startApp = (): AppStartKickedAction => ({
    type: types.APP_START_KICKED
});

export const setAppStarted = (): AppStartedAction => ({
    type: types.APP_STARTED
});

export const failAppStartup = (reason: string): AppStartFailedAction => ({
    type: types.APP_START_FAILED,
    reason: reason
});
