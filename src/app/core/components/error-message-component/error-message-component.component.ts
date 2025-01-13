import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-message-component',
  standalone: true,
  imports: [],
  templateUrl: './error-message-component.component.html',
  styleUrl: './error-message-component.component.scss'
})
export class ErrorMessageComponentComponent {
@Input() errorMessage! : string;

}
