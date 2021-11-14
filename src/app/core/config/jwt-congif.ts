import { tokenName } from './../constants/auth-token';


export function tokenGetter(){
    let token = localStorage.getItem(tokenName)
    return token;
}