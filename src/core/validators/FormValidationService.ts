import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {
  getErrorMessage(errors: any, fieldId: string): string {
    if (!errors) return '';

    if (errors.required) return 'Este campo es obligatorio';
    if (errors.minlength) return `Debe tener al menos ${errors.minlength.requiredLength} caracteres`;
    if (errors.maxlength) return `No puede superar los ${errors.maxlength.requiredLength} caracteres`;

    switch (fieldId) {
      case 'name':
        if (errors.invalidName) return 'Solo se permiten letras y espacios';
        break;
      case 'email':
        if (errors.invalidEmail) return 'El formato del correo no es válido';
        break;
      case 'birthdate':
        if (errors.underage) return 'Debes tener al menos 18 años';
        break;
      case 'password':
        if (errors.weakPassword) return 'La contraseña debe tener al menos 6 caracteres y contener números y letras';
        break;
    }

    return 'Campo inválido';
  }
}
