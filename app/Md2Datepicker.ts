import { Component, ViewEncapsulation } from '@angular/core';
import { DatePickerComponent } from './datepicker.component';

@Component({
  selector: 'md2-datepicker',
  template: `<div class="md2-datepicker-container">
                <button class="md2-datepicker-btn" (click)="showDatepicker()" ></button>
                <div class="md2-datepicker-input">
                  <input type="text" value="{{ getDate() | date:'fullDate'}}" />
                  <button class="md2-datepicker-triangle-btn" (click)="showDatepicker()" ></button>
                </div>
                <div class="md2-datepicker" *ngIf="show">
                  <datepicker [(ngModel)]="dt" [minDate]="minDate" [showWeeks]="true"></datepicker>
                </div>
             </div>
             `,
  styles:   [`
              .md2-datepicker-container {
                position: relative;
              }
              .md2-datepicker-btn {
                background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAACACAYAAAA4RVZRAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAA0BJREFUeJzt3L9rE3EcxvH3XRRKBbVYRIyIggWHDlKtKDo4CA6CPyZXBwdxdNbVxb/A/6Ag2LrqqBWhqKiV+qMgCEIHsVVaLJpSh0tMkJztmct9L0+fF3wgNEnvE94khGsTyNdbYDXDLOR8/NAWyfb4p/M8eJznL7OwHFOIYwpxTCGOKcQxhTimEMcU4phCHFOIYwrZlPH2g8AuoC/l+rSfp6kARzLep8yyPjn6SH/8NeAb8AlY6WSphkHgGvAA+EG2k8iefGYZeARcr/fIrB+4AXwvwYPxNGcJuFXvsy5DwEwJFvekzztgOC1gwzHgawmW9aw9C8Dx1nhRy+W9wBSwE+sV88BRYBaa774qwDgO2WsGgDGSfn9iXgZGAi1knTkMXIXkZXYz8BGohtzIOvIZ2BcDp3DIXlcFzsTAhdCbWC7OxsBo6C0sF6MxsDv0FpaL/RHwi+wn3K18fkYkZxOs963475lCHFOIYwpxTCGOKcQxhTimEMcU4phCHFOIYwpxTCGOKcQxhTimEMcU4phC/uffRRZJPrhi3XUQ2JL1Tlk/sPI4p2Xt356SrUvNL7NCHFOIYwpxTCGOKcQxhTimEMcU4phCHFOIYwop6nOZh0i+MCqUKeBZwOMXoqiYp4HbBR2rnZtsgJh+mRXimEIcU4hjCnFMIY4pxDGFOKYQxxTimEIcU4hjCnFMIY4pxDGFOKYQxxTimEIcU4hjCnFMIY4pxDGFOKYQxxTimEIcU4hjCnFMIY4ppKiP9L0E7hR0rHaeBzx2YYqK+bA+1kV+mRXimEIcU4hjCnFMIY4pxDGFOKYQxxTimEIcU4hjCnFMIY4pxDGFOKYQxxTimEIcU4hjCnFMIY4pxDGFOKaQCKgBlQz3WQJmu7OOtRgC+jPcfjkCvgA7urOPFWguBj6E3sJy8T4GJkNvYbl4EgP3Q29huZiI6hdeA8MhN7GOvABGGu9i54BLAZexzlzhr/c+94BVT8/NGG0MADMlWM6z/pkGtraLCbAHB+2VeQNU22ds2g6Ml2BZT/rcBbalBWznIsm73NCLe5rzCjiXFixKu6Ll+pPAeeAEcIDkmVvUF1tsZDVgnuQ8+CQwwRoneH4D6vQQ4bZhiMMAAAAASUVORK5CYII=');
                background-repeat: no-repeat; 
                background-size: 26px 28px;
                background-position: center;
                width: 50px;
                  height: 50px;
                  background-color: #fff;
                  border: 0;
                  vertical-align: middle;
              }
              .md2-datepicker-btn:focus, .md2-datepicker-input .md2-datepicker-triangle-btn:focus, .md2-datepicker-input input:focus, .md2-datepicker .well .md2-dp-body td button:focus, .md2-datepicker .well .md2-dp-header th button:focus {
                outline: 0;
              }
              .md2-datepicker-input {
                display: inline-block;
                padding-bottom: 5px;
                  border-bottom: 1px solid #E0E0E0;
              }
              .md2-datepicker-input input {
                border: 0;
                padding-right: 10px;
              }
              .md2-datepicker-input .md2-datepicker-triangle-btn {
                background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAh0lEQVQ4T93TMQrCUAzG8V9x8QziiYSuXdzFC7h4AcELOPQAdXYovZCHEATlgQV5GFTe1ozJlz/kS1IpjKqw3wQBVyy++JI0y1GTe7DCBbMAckeNIQKk/BanALBB+16LtnDELoMcsM/BESDlz2heDR3WePwKSLo5eoxz3z6NNcFD+vu3ij14Aqz/DxGbKB7CAAAAAElFTkSuQmCC');
                background-repeat: no-repeat;
                background-position: bottom;
                width: 20px;
                height: 20px;
                background-color: #fff;
                border: 0;
              }
              .md2-datepicker {
                position: absolute;
                left: 54px;
                top: 10px;
              }
              .md2-datepicker .well {
                background-color: #fff;
                  border-color: #E0E0E0;
                  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);
                  border-radius: 0;
                  margin-bottom: 0;
                  padding: 0;
              }
              .md2-datepicker .well .md2-dp-weekdays {
                background: rgb(224,224,224);
                  color: rgba(0,0,0,0.87);
              }
              .md2-datepicker .well .md2-dp-weekdays th {
                padding: 15px 0;
              }
              .md2-datepicker .well .md2-dp-weekdays th:last-child {
                padding-right: 15px;
              }
              .md2-datepicker .well .md2-dp-body td {
                padding: 5px;
                font-size: 14px;
              }
              .md2-datepicker .well .md2-dp-body tr:first-child > td {
                padding-top: 20px;
              }
              .md2-datepicker .well .md2-dp-body tr:last-child > td {
                padding-bottom: 20px;
              }
              .md2-datepicker .well .md2-dp-body tr > td:first-child {
                padding-left: 20px;
              }
              .md2-datepicker .well .md2-dp-body tr > td:last-child {
                padding-right: 15px;
              }
              .md2-datepicker .well .md2-dp-body td.h6 {
                font-weight: bold;
              }
              .md2-datepicker .well .md2-dp-body td button {
                border-radius: 0;
                  border: 0;
                  box-shadow: none;
                  font-size: 14px;
                  padding: 0;
                  background: none;
              }
              .md2-datepicker .well .md2-dp-body td button span {
                padding: 10px 12px 8px;
                border-radius: 50%;
                display: inline-block;
                border: 1px solid transparent;
              }
              .md2-datepicker .well .md2-dp-body td button:hover span {
                background-color: #E6E6E6;
              }
              .md2-datepicker .well .md2-dp-body td button span.text-info {
                border-color: #106CC8;
                color: #333;
              }
              .md2-datepicker .well .md2-dp-body td button span.text-muted {
                color: rgba(0,0,0,0.36);
              }
              .md2-datepicker .well .md2-dp-body td button.active span {
                background-color: #106CC8;
                border-color: #106CC8;
                color: #fff;
              }
              .md2-datepicker .well .md2-dp-header th {
                padding: 8px;
              }
              .md2-datepicker .well .md2-dp-header th button {
                border: 0;
                  border-radius: 50%;
                  padding: 10px;
                  box-shadow: none;
              }
              .md2-datepicker .well .md2-dp-header th:nth-child(2) button {
                border-radius: 0;
                  background: none;
                  font-size: 14px;
                  text-transform: uppercase;
                  letter-spacing: 1px;
              }
              .md2-datepicker .well .md2-dp-body.mnth-yr {
                border-top: 1px solid #E0E0E0;
              }
              .md2-datepicker .well .md2-dp-body.mnth-yr td button span {
                border-radius: 3px;
              }

              `],
  directives: [DatePickerComponent],
  encapsulation: ViewEncapsulation.None
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