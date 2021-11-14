import { ActionReducerMap } from "@ngrx/store";

import * as authenticationReducer from '../authentication/store/auth.reducer'

export interface State {
    authentication : authenticationReducer.UserState
}

export const reducer : ActionReducerMap<State> = {
    authentication : authenticationReducer.AuthenticationReducer,
}