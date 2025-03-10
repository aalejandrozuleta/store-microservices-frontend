import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true, // ⬅️ Asegúrate de definirlo como standalone
  imports: [RouterOutlet, TranslateModule], // ⬅️ Importa TranslateModule
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    console.log('AppComponent cargado'); // ⬅️ Verifica si este log aparece
    this.translate.setDefaultLang('es'); // ⬅️ Establece idioma por defecto
    this.translate.use('es'); // ⬅️ Usa el idioma por defecto
  }
}
