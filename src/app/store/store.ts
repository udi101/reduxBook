import { Action } from 'redux';
import { CounterActions } from './actions';
import { IAppState } from './IAppState'

export const INITIAL_STATE: IAppState = {
    count: 0,
    name: 'Udi Mazor'
}

// The reducer function
export function rootReducer(lastState: IAppState = INITIAL_STATE, action: Action): IAppState {
    switch (action.type) {
        case CounterActions.INCREMENT:
            return { count: lastState.count + 1, name: lastState.name };
        case CounterActions.DECREMENT:
            return { count: lastState.count - 1, name: lastState.name };
        case CounterActions.LOWERSTRING:
            return { count: lastState.count, name: lastState.count % 2 ? lastState.name.toLowerCase() : lastState.name.toUpperCase() };
        default:
            return lastState;
    }
}
