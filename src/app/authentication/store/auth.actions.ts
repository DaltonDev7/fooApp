import { Action } from "@ngrx/store";
import { Usuario } from '../../core/models/usuario.model';


export const LOGIN_START = '[Login] LOGIN_START';
export const LOGIN_SUCCESS = '[Login] LOGIN_SUCCESS';
export const LOGIN_ERROR = '[Login] LOGIN_ERROR';
export const AUTO_LOGIN = '[Login] AUTO_LOGIN';
export const LOGOUT = '[Login] LOGOUT';
export const AUTO_LOGIN_ERROR = '[Login] AUTO_LOGIN_ERROR';


export class LoginStart implements Action {
    readonly type = LOGIN_START;
    constructor(public payload: Usuario) { }
}

export class LoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS;
    constructor(public payload: Usuario, public redirect: boolean) { }
}


export class LoginError implements Action {
    readonly type = LOGIN_ERROR;
    constructor(public payload: any) { }
}


export class AutoLogin implements Action {
    readonly type = AUTO_LOGIN;
}


export class Logout implements Action {
    readonly type = LOGOUT;
}

export class AutoLoginError implements Action {
    readonly type = AUTO_LOGIN_ERROR
    constructor(public payload?: string) { }
}

export type Actions =
    LoginStart |
    LoginSuccess |
    LoginError |
    AutoLogin |
    Logout |
    AutoLoginError;

