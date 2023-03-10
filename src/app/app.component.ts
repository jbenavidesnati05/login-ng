import { Component } from '@angular/core';
import { AutenticacionService } from './shared/services/autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-app';

  constructor( private loginPrd:AutenticacionService){

  }

  public visualizarMenu():boolean{
    return this.loginPrd.habilitarlogeo();
  }
}
