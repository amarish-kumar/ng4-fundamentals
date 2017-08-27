import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Observable} from "rxjs";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styles: []
})
export class FormsComponent implements OnInit,OnDestroy {
  
  public logF:FormGroup;
  public errors:any[];
  public destroyed = false;

  constructor() { }

  ngOnInit() {
    this.logF =  new FormGroup({
                        "email": new FormControl("", [Validators.required, Validators.email] ),
                        "password": new FormControl("", [Validators.required]),
                      });
    Observable.merge(this.logF.statusChanges)
    .takeWhile(v=>!this.destroyed)
    .subscribe((changes)=>{
      console.log(this.logF.pristine)
    }, (e)=>console.error(e), ()=>console.info("finished"));
    
  }

  ngOnDestroy(): void {
    this.destroyed = true;
  }

}
