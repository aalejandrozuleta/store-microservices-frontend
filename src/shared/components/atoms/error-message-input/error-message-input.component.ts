import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-error-message-input',
  imports: [CommonModule],
  templateUrl: './error-message-input.component.html',
  styleUrl: './error-message-input.component.scss'
})
export class ErrorMessageInputComponent {
  @Input() errorMessage: string = '';
}
