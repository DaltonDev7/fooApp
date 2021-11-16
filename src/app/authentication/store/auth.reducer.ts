

import * as AuthActions from './auth.actions';
import { Usuario } from '../../core/models/usuario.model';

export interface UserState {
    UserActual: Usuario,
    loading: boolean,
    redirect: boolean
}

const initialState: UserState = {
    UserActual: null,
    loading: false,
    redirect: false,
}

export function AuthenticationReducer(state = initialState, action: AuthActions.Actions): UserState {
    switch (action.type) {

        case AuthActions.LOGIN_START:
            return { ...state, loading: true }
            break;
        case AuthActions.LOGIN_SUCCESS:

            return {
                ...state,
                UserActual: action.payload,
                loading: false,
                redirect: action.redirect
            };
            break;
        case AuthActions.LOGIN_ERROR:
            return {
                ...state,
                loading: false,

            }
            break;
        case AuthActions.AUTO_LOGIN:
            return {
                ...state
            }
            break;
        case AuthActions.AUTO_LOGIN_ERROR:

            return {
                ...state,
                loading: false,
            }
            break;
        case AuthActions.LOGOUT:
            return {
                ...state,
                UserActual: null,
                loading: false,
                redirect:false
            }
            break;

        case AuthActions.UPDATE_USER:
            return {
                ...state,
                UserActual : action.payload
            }
        break;
        default:
            return state;
    }
}

