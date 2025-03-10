import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InputFieldsInterface } from '../models/InputFieldsInterface';
import { SignUpService } from './sign-up.service';

@Injectable({
  providedIn: 'root'
})
export class SignUpFormService {
  form: FormGroup;

  constructor(private fb: FormBuilder, private signUpService: SignUpService) {
    this.form = this.fb.group({});
  }

  createForm(fields: InputFieldsInterface[]) {
    const group: { [key: string]: FormControl } = {};

    fields.forEach(field => {
      group[field.id] = new FormControl('', this.getValidators(field));
    });

    this.form = this.fb.group(group);
  }

  getValidators(field: InputFieldsInterface) {
    const validators = [];
  
    if (field.isRequired) validators.push(Validators.required);
    if (field.maxLength) validators.push(Validators.maxLength(field.maxLength));
    if (field.minLength) validators.push(Validators.minLength(field.minLength));
  
    if (field.type === 'email') {
      validators.push(Validators.email);
      validators.push(Validators.pattern(/^[a-zA-Z0-9._%+-]+@(gmail|hotmail)\.com$/));
    }
  
    if (field.type === 'password') {
      validators.push(Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).+$/));
    }
  
    return validators;
  }

}
