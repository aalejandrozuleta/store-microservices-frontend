import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { InputFieldsInterface } from '../../../../core/models/InputFieldsInterface';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUser, faEnvelope, faKey, faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import { SignUpFormService } from '../../../../core/services/sign-up-form-service.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [FontAwesomeModule, CommonModule,ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  
})
export class InputComponent implements OnInit {
  @Input() fieldsKeys!: InputFieldsInterface;
  @Input() control!: FormControl;  // Aquí se tipa correctamente


  constructor(library: FaIconLibrary, public signUpFormService: SignUpFormService) {
    library.addIcons(faUser, faEnvelope, faKey, faBirthdayCake);
  }

  ngOnInit() {


  }

}
