import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { tokenName } from "src/app/core/constants/auth-token";


import { tap, map, catchError, switchMap, filter, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import * as authActions from './auth.actions'
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthenticationService } from '../../core/services/authentication.service';
import { UsuarioService } from '../../core/services/usuario.service';
import { Usuario } from '../../core/models/usuario.model';
import * as fromApp from '../../state/app.state'
import { UserState } from "./auth.reducer";
import { Alert } from "src/app/core/enum/alert.enum";


@Injectable()
export class AuthEffects {


    constructor(
        private action$: Actions,
        private toastr: ToastrService,
        private router: Router,
        private activedRouted: ActivatedRoute,
        private jwtHelper: JwtHelperService,
        private autenticacionService: AuthenticationService,
        private usuarioService: UsuarioService,
        private storeAuth: Store<fromApp.State>
    ) {
    }


    loginStart$ = createEffect(
        () => this.action$.pipe(
            ofType(authActions.LOGIN_START),
            switchMap((action: authActions.LoginStart) => {

                let user: Usuario = action.payload;

                return this.autenticacionService.SignIn(user).pipe(
                    map((data) => {


                        //removemos el token existente y ponemos el nuevo
                        localStorage.removeItem(tokenName);
                        localStorage.setItem(tokenName, data.token)
                        return this.storeAuth.dispatch(new authActions.LoginSuccess(data.Usuario, true, true))
                    }),
                    catchError((error) => {
                        return of(this.storeAuth.dispatch(new authActions.LoginError(error)))
                    })
                )
            }
            )
        ),
        { dispatch: false }

    );



    LoginError = createEffect(
        () => this.action$.pipe(
            ofType(authActions.LOGIN_ERROR),
            tap((data: authActions.LoginError) => {


                if (data.payload) {
                    this.toastr.error(data.payload.error.msg)
                } else {
                    this.toastr.error("Ha ocurrido un error. Intente nuevamente o contacte con soporte tecnico.")
                }

            })
        ),
        { dispatch: false }
    )


    loginSuccess = createEffect(
        () => this.action$.pipe(
            ofType(authActions.LOGIN_SUCCESS),
            tap((data: authActions.LoginSuccess) => {

                if (data.redirect) {
                    if (data.iniciarSesionFirstTime) {
                        this.router.navigate(['/']);
                    }
                }
                else {
                    this.toastr.error("Ha ocurrido un error. Por favor contacte con soporte t??cnico.");
                    localStorage.removeItem(tokenName);
                    this.router.navigate(['/login']);
                }
            })
        ),
        { dispatch: false }
    );


    autoLogin$ = createEffect(
        () => this.action$.pipe(
            ofType(authActions.AUTO_LOGIN),
            withLatestFrom(this.storeAuth.select('authentication')),
            switchMap(([payload, state]: [any, UserState]): any => {
                let token = localStorage.getItem(tokenName);
                let tokenExpired = this.jwtHelper.isTokenExpired(token);


                if (!token) {
                    this.router.navigate(['/login']);
                    return of(new authActions.AutoLoginError("No existe ning??n usuario autenticado"));
                }

                //si el token no ha expirado
                if (!tokenExpired) {
                    return this.usuarioService.getUsuario().pipe(
                        map((user) => {


                            return this.storeAuth.dispatch(new authActions.LoginSuccess(user.Usuario, true))
                        }),
                        catchError((error) => {
                            this.router.navigate(['/login']);
                            localStorage.removeItem(tokenName);
                            return of(new authActions.AutoLoginError("No se pudo obtener informaci??n del usuario"));
                        }))

                } else {
                    return of(new authActions.AutoLoginError("La sesi??n ha expirado, por favor inicie sesi??n"));
                }
            })
        ),
        { dispatch: false }
    )


    autoLoginError = createEffect(
        () => this.action$.pipe(
            ofType(authActions.AUTO_LOGIN_ERROR),
            tap((data: authActions.AutoLoginError) => {

                if (data.payload) {
                    this.toastr.error(data.payload)
                }

            })

        ),
        { dispatch: false }
    )


    logout = createEffect(
        () => this.action$.pipe(
            ofType(authActions.LOGOUT),
            tap(() => {
                this.autenticacionService.logout()
            })
        ),
        { dispatch: false }
    )


    updateUser = createEffect(
        () => this.action$.pipe(
            ofType(authActions.UPDATE_USER),
            tap((data: authActions.UpdateUser) => {

                return this.usuarioService.updateUsuario(data.payload).subscribe(() => {
                    this.toastr.success(Alert.updateUserSuccess)
                }, (error) => {
                    this.toastr.error(error.error.msg)
                })
            })

        ),
        { dispatch: false }
    )


}





















// }



/*
catchError((error) => {
                        console.log(error);

                        this.router.navigate(['/login']);
                        localStorage.removeItem(tokenName);
                        return of(new authActions.AutoLoginError("No se pudo obtener informaci??n del usuario"));
                    })
*/


