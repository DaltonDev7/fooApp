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


}