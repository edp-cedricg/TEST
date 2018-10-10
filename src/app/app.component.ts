
import { Component } from '@angular/core';
/*import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';

registerLocaleData(localePT, 'pt');*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'Internationalization';
  dateTime: string = new Date().toString();
  
  minutes: number = 0;
  gender: string = "f";
  
}