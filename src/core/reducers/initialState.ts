import { ApplicationStatus } from '../ApplicationStatus';

export interface AppState {
    readonly status: ApplicationStatus;
    readonly lastUpdatedOn: Date;
    readonly errorReason?: string;
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
