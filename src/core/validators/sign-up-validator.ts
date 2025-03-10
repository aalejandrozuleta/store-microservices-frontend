import { AbstractControl, ValidationErrors } from '@angular/forms';

export class SignUpValidators {
  static nameFormat(control: AbstractControl): ValidationErrors | null {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(control.value) ? null : { invalidName: true };
  }

  static emailFormat(control: AbstractControl): ValidationErrors | null {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(control.value) ? null : { invalidEmail: true };
  }

  static birthdateFormat(control: AbstractControl): ValidationErrors | null {
    const birthdate = new Date(control.value);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();
    return age >= 18 ? null : { underage: true };
  }

  static passwordStrength(control: AbstractControl): ValidationErrors | null {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return passwordRegex.test(control.value) ? null : { weakPassword: true };
  }
}
