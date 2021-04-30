import { ThunkAction } from 'redux-thunk';
import { CombinedReducers } from './reducers';
import { ThunkDispatch } from 'redux-thunk';

export type CombinedActions = Parameters<typeof CombinedReducers>[1]
export type Actions = CombinedActions
export type RootState = ReturnType<typeof CombinedReducers>
export type AppDispatch = ThunkDispatch<RootState, unknown, Actions>

/**
 * Explanation:
 * https://redux.js.org/recipes/usage-with-typescript#usage-with-redux-thunk
 */
export type AppThunk<R = void> = ThunkAction<
    R,
    RootState,
    unknown,
    Actions
    >
