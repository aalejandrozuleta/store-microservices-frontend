import { Routes } from '@angular/router';
import { LoginSingUpComponent } from '../features/login-sing-up/login-sing-up.component';

export const routes: Routes = [
  { path: 'home', component: LoginSingUpComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' } // ⬅️ Asegúrate de que redirige correctamente
];
