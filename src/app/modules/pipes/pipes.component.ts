import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
    <strong>Actual</strong> : {{names[0]}} &#9829; {{names[1]}} <br/>
    <strong>Piped</strong> : {{names[0] | uppercase}} &#9829; {{names[1] | lowercase}} <br/> <br/>
    <strong>Date</strong> : {{some_date | date:'MM-dd-yyyy hh:mm:ss (z)'}} <br/> <br/>
    
    <strong>Actual</strong> : <em>{{long_txt}}</em> <br/>
    <strong>Piped</strong> : <em>{{long_txt | truncate:20:'true'}}</em> <br/>
  `,
  styles: []
})
export class PipesComponent implements OnInit {

  public names = ["ginger", "GITHUB"]
  public some_date = new Date();
  public long_txt = "Some very long text comes here, that should be truncated";

  constructor() { }

  ngOnInit() {
  }

}
