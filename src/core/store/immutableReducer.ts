import { Action } from 'redux';
import update, { Spec, CustomCommands } from 'immutability-helper';

type Reducer<State> = (state: State | undefined, action: Action<any>) => State;
type ActionHandler<State> = (state: State, payload?: any) => Spec<State, CustomCommands<object>>;

interface ActionHandlerMap<State> {
    [actionType: string]: ActionHandler<State>;
}

export function handleActions<State>(
    initialState: State,
    reducerMap: ActionHandlerMap<State>
): Reducer<State> {
    return (state: State = initialState, action: any) => {
        const handler = reducerMap[action.type];
        return handler ? update(state, handler(state, action.payload)) : state
    }
};