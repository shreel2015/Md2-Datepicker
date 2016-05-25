import { Component } from '@angular/core';
import { Md2Datepicker } from './Md2Datepicker';

@Component({
  selector: 'my-app',
  template: `
  			     <md2-datepicker></md2-datepicker>
  			    `,
  directives: [Md2Datepicker]
})
export class AppComponent { }