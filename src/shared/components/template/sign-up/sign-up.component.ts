import { Component, OnInit } from '@angular/core';
import { InputFieldsInterface } from '../../../../core/models/InputFieldsInterface';
import { FullInputComponent } from '../../molecules/full-input/full-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { SignUpService } from '../../../../core/services/sign-up.service';
import { SignUpFormService } from '../../../../core/services/sign-up-form-service.service';

@Component({
  selector: 'app-sign-up',
  imports: [FullInputComponent, FontAwesomeModule, ReactiveFormsModule, CommonModule, TranslateModule,],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {
  imgSignUp: string = '../../assets/static/login/sign-up.svg';

  constructor(private signUpService: SignUpService, public signUpFormService: SignUpFormService, private fb: FormBuilder) { }

  fieldKeys!: InputFieldsInterface[];
  signUpForm!: FormGroup;

  ngOnInit() {
    this.getFieldKeys();
    this.initForm();
    console.log(this.fieldKeys);
  }

  async getFieldKeys() {
    this.signUpService.getFieldKeys().subscribe(fields => {
      this.fieldKeys = fields;
      this.signUpFormService.createForm(fields);
      this.initForm();
    });
  }

  getFormControl(id: string): FormControl {
    return this.signUpForm.get(id) as FormControl; // ✅ Conversión en TypeScript
  }

  initForm() {
    if (!this.fieldKeys) return;

    const formControls: { [key: string]: any } = {};
    this.fieldKeys.forEach(field => {
      formControls[field.id] = [
        '', // Valor inicial
        field.isRequired ? Validators.required : [] // Agregar validación si es requerido
      ];
    });

    this.signUpForm = this.fb.group(formControls);
  }

  onSubmit() {
    if (this.signUpFormService.form.invalid) {
      this.signUpFormService.form.markAllAsTouched();
      return;
    }

    console.log('Formulario válido, enviando...');
  }

}
