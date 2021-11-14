import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilderService } from '../core/services/form-builder.service';
import { AuthenticationService } from '../core/services/authentication.service';
import { GenericoService } from '../core/services/generico.service';
import { ToastrService } from 'ngx-toastr';
import { Alert } from '../core/enum/alert.enum';
import { Store } from '@ngrx/store';
import * as fromApp from '../state/app.state';
import * as AuthActions from 'src/app/authentication/store/auth.actions'


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  //atributos
  showViewRegistrar: boolean = false
  loginForm: FormGroup
  registerForm: FormGroup

  constructor(
    private toast: ToastrService,
    public genericoService: GenericoService,
    public formBuilderService: FormBuilderService,
    public autenticacionService: AuthenticationService,
    private store: Store<fromApp.State>
  ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilderService.getLoginForm()
    this.registerForm = this.formBuilderService.getRegistroUserForm()


  }

  changeView() {
    this.showViewRegistrar = !this.showViewRegistrar
  }


  registrarUsuario() {

    let validatePass = this.genericoService.validatePassword(this.registerForm)

    if (validatePass) {
      this.autenticacionService.registrarUsuario(this.registerForm.value).subscribe((data: any) => {
        this.toast.success(data.msg)
        this.registerForm.reset()
        this.changeView()
      }, (error) => {
        this.toast.error(error.error.msg)
      })
    }

  }


  login() {
    let valiData: boolean = this.genericoService.validateLoginForm(this.loginForm)

    if (valiData) {
      this.store.dispatch(new AuthActions.LoginStart(this.loginForm.value))
    }

  }


}

