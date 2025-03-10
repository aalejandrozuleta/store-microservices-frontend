import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TranslateService as NgxTranslateService } from '@ngx-translate/core';
import { InputFieldsInterface } from '../models/InputFieldsInterface';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  constructor(private translate: NgxTranslateService) {
    this.translate.setDefaultLang('es');
  }

  loadTranslations(fields: InputFieldsInterface[]): Observable<InputFieldsInterface[]> {
    const translationRequests = fields.map(field =>
      forkJoin({
        label: this.translate.get(field.labelKey).pipe(map(label => label || field.labelKey)), // ✅ Si no hay traducción, usa labelKey
        placeholder: this.translate.get(field.placeholderKey).pipe(map(placeholder => placeholder || field.placeholderKey)), // ✅ Si no hay traducción, usa placeholderKey
        errorMessage: this.translate.get(field.errorMessageKey).pipe(map(errorMessage => errorMessage || field.errorMessageKey)) // ✅ Si no hay traducción, usa errorMessageKey
      }).pipe(
        map(translations => ({
          ...field,
          label: translations.label,
          placeholder: translations.placeholder,
          errorMessage: translations.errorMessage
        }))
      )
    );

    return forkJoin(translationRequests); // ✅ Devuelve un array con todas las traducciones
  }
}
