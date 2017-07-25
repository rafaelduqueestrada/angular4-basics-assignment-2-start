import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName = '';

  constructor() {
    console.log('NOME DO USUARIO: ' + this.userName);
    console.log('TAMANHO DO USUARIO: ' + this.userName.length);
  }

  isUserNameEmpty() {
    return this.userName.length === 0;
  }

  resetUsername() {
    this.userName = '';
  }
}
