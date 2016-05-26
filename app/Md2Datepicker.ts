import { Component } from '@angular/core';
import { DatePickerComponent } from './datepicker.component';

@Component({
  selector: 'md2-datepicker',
  template: `<div class="md2-datepicker-container">
                <button class="md2-datepicker-btn" (click)="showDatepicker()" (blur)="hideDatepicker()"></button>
                <div class="md2-datepicker-input">
                  <input type="text" value="{{ getDate() | date:'fullDate'}}" />
                  <button class="md2-datepicker-triangle-btn" (click)="showDatepicker()" (blur)="hideDatepicker()"></button>
                </div>
                <div class="md2-datepicker" *ngIf="show">
                  <datepicker [(ngModel)]="dt" [minDate]="minDate" [showWeeks]="true"></datepicker>
                </div>
             </div>
             `,
  styleUrls: ['app/Md2Datepicker.css']
  directives: [DatePickerComponent]
})
export class Md2Datepicker {

public dt:Date = new Date();
  private minDate:Date = null;
  private events:Array<any>;
  private tomorrow:Date;
  private afterTomorrow:Date;
  private formats:Array<string> = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
  private format = this.formats[0];
  private dateOptions:any = {
    formatYear: 'YY',
    startingDay: 1
  };

  private show : boolean = false;
  showDatepicker() {
    this.show = true;
  }
  hideDatepicker() {
    setTimeout(()=>{
    this.show = false;},125)
  }

  public getDate():number {
    return this.dt && this.dt.getTime() || new Date().getTime();
  }

 }