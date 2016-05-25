import { Component } from '@angular/core';
import { DatePickerComponent } from './datepicker.component';

@Component({
  selector: 'md2-datepicker',
  template: `
        <input (click)="showDatepicker()" (blur)="hideDatepicker()" type="text" value="{{ getDate() | date:'fullDate'}}" style="display: block;" />
        <div *ngIf="show" style="display: inline-block; min-height:290px;">
            <datepicker [(ngModel)]="dt" [minDate]="minDate" [showWeeks]="true"></datepicker>
        </div>
  			`,
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