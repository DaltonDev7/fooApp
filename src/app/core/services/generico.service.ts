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

}
