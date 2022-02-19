import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements ControlValueAccessor {

  @Input() public label!: string;
  @Input() public required = false;
  @Input() public minlength = 0;
  @Input() public disabled = false;
  @Input() public data!: string;

  constructor(@Self() @Optional() public control: NgControl) {
      this.control && (this.control.valueAccessor = this);
  }

  public onChangeFunction!: Function;

  public onTouchedFunction!: Function;

  public get invalid(): boolean | null {
      return this.control ? this.control.invalid : false;
  }

  public get showError(): boolean | null {
      if (!this.control) {
          return false;
      }
      const { dirty, touched } = this.control;
      return this.invalid ? (dirty || touched) : false;

      //Este código equivale al código superior sin la constante
      //return this.invalid ? (this.control.dirty || this.control.touched) : false;
  }

  public get error() :string | void{
      if(!this.control){
          return "";
      }

      if(this.control.errors!['required']){
        return "Debes rellenar este campo";
      }

      if(this.control.errors!['minlength']){
        return "Minimo 3 caracteres";
      }
  }

  public registerOnChange(onChangeFunction: any){
      this.onChangeFunction = onChangeFunction;
  }

  public registerOnTouched(onTouchedFunction: any){
      this.onTouchedFunction = onTouchedFunction;
  }

  public writeValue(newData: string){
      this.data = newData;
  }
}
