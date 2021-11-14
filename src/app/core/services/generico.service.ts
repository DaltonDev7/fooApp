import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Alert } from '../enum/alert.enum';

@Injectable({
  providedIn: 'root'
})
export class GenericoService {

  constructor(private toast: ToastrService) { }



  public validatePassword(registroForm: FormGroup): boolean {
    let password = registroForm.get('PassWord')?.value
    let passWordConfirm = registroForm.get('PassWordConfirm')?.value

    if (password == passWordConfirm) {
      return true
    } else {
      this.toast.error(Alert.passwordNoCoinciden)
      return false
    }
  }

  public validateLoginForm(loginForm: FormGroup) : boolean {
    let usuario = loginForm.get('UserName')?.value
    let passWord = loginForm.get('PassWord')?.value

    if (usuario == '' || passWord == '') {
      this.toast.warning('Aun faltan campos por llenar')
      return false;
    }
    
    return true
  }

}
