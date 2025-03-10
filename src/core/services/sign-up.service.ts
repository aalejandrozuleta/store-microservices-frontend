import { Injectable } from '@angular/core';
import { InputFieldsInterface } from '../models/InputFieldsInterface';
import { TranslateService } from './translate.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private translate: TranslateService,) { }

  fieldKeys: InputFieldsInterface[] = [
    { id: 'name', labelKey: 'signUp.input.name', placeholderKey: 'signUp.placeholder.name', label: '', placeholder: '', icon: 'user', type: 'text', isRequired: true, isDisabled: false, maxLength: 50, minLength: 3, errorMessage: "", errorMessageKey:'signUp.errors' },
    { id: 'email', labelKey: 'signUp.input.email', placeholderKey: 'signUp.placeholder.email',label: '', placeholder: '', icon: 'envelope', type: 'email', isRequired: true, isDisabled: false, maxLength: 50, minLength: 3,errorMessage: "", errorMessageKey:'signUp.errors' },
    { id: 'birthdate', labelKey: 'signUp.input.birthdate', placeholderKey: 'signUp.placeholder.birthdate',label: '', placeholder: '', icon: 'birthday-cake', type: 'date', isRequired: true, isDisabled: false,errorMessage: "", errorMessageKey:'signUp.errors' },
    { id: 'password', labelKey: 'signUp.input.password', placeholderKey: 'signUp.placeholder.password',label: '', placeholder: '', icon: 'key', type: 'password', isRequired: true, isDisabled: false, maxLength: 50, minLength: 3,errorMessage: "", errorMessageKey:'signUp.errors' }
  ];


  getFieldKeys(): Observable<InputFieldsInterface[]> {
    return new Observable(observer => {
      this.translate.loadTranslations(this.fieldKeys).subscribe(translatedFields => {
        this.fieldKeys = translatedFields; // ✅ Se actualizan las traducciones
        observer.next(this.fieldKeys);
        observer.complete();
      });
    });
  }
}
