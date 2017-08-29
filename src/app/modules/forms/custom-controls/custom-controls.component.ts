import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const EPANDED_TEXTAREA_VALUE_ACCESSOR : any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomControlsComponent),
  multi: true,
};


@Component({
  selector: 'app-custom-control',
  templateUrl: './custom-controls.component.html',
  styles: [],
  providers: [EPANDED_TEXTAREA_VALUE_ACCESSOR]
})
export class CustomControlsComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  ngOnInit() {
  }
  
  public value = 0;
  public disabled = false;
  public editable = false;
  
  private propagateFn:Function = ()=>{};
  private touchedFn:Function = ()=>{};

  writeValue(obj: any): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {    
    this.propagateFn = fn;
  }
  registerOnTouched(fn: any): void {
    this.touchedFn = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onClick(evt){
    this.editable = true;
  }

  private onChnage(event) {
    this.value = event.target.value;
    this.propagateFn(this.value);
  }
  private onBlur(event) {
    this.editable = false;
  }

}
