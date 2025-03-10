import { Component, Input  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputComponent } from '../../atoms/input/input.component';
import { InputFieldsInterface } from '../../../../core/models/InputFieldsInterface';
import { SignUpFormService } from '../../../../core/services/sign-up-form-service.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-full-input',
  standalone: true,
  templateUrl: './full-input.component.html',
  styleUrl: './full-input.component.scss',
  imports: [CommonModule, FontAwesomeModule, InputComponent],
})
export class FullInputComponent {
  @Input() fieldsKey!: InputFieldsInterface;
  @Input() control!: FormControl;


  constructor(public signUpFormService: SignUpFormService) {}


}
