type ApplicationStatus = 'Initial' | 
    'Starting' | 
    'Started' | 
    'FailedToStart';

export interface AppState {
    readonly status: ApplicationStatus;
    readonly lastUpdatedOn: Date;
}

export interface State {
    readonly app: AppState;
}

const initialState: State = {
    app: {
        status: 'Initial',
        lastUpdatedOn: new Date()
    }
};

export default initialState;
