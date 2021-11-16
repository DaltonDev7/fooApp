import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor(public fb: FormBuilder) { }


  public getRegistroUserForm(): FormGroup {
    return this.fb.group({
      UserName: [null, [Validators.required, Validators.minLength(3)]],
      PassWord: [null, [Validators.required, Validators.minLength(5)]],
      PassWordConfirm: [null, [Validators.required, Validators.minLength(5)]],
    })
  }

  public getLoginForm(): FormGroup {
    return this.fb.group({
      UserName: [null, [Validators.required]],
      PassWord: [null]
    })
  }

  public getAlimentosForm(): FormGroup {
    return this.fb.group({
      Usuario: [null, [Validators.required]],
      ...this.getEditAlimentosForm().controls
    })
  }

  public getEditAlimentosForm(): FormGroup {
    return this.fb.group({
      Desayuno: [null],
      Comida: [null],
      Cena: [null],
      Merienda: [null],
      ComidaExtra: [null],
    })
  }

  public getEditUserForm() {
    return this.fb.group({
      Id: [null],
      UserName: [null, [Validators.required, Validators.minLength(3)]]
    })
  }

  public getPasswordForm() {
    return this.fb.group({
      PassWordActual:  [null, [Validators.required, Validators.minLength(5)]],
      PassWord: [null, [Validators.required, Validators.minLength(5)]],
      ConfirmPassWord: [null, [Validators.required, Validators.minLength(5)]]
    })
  }



}
