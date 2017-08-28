import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  template: `
    <div class="row">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
    <br/>
    <div class="row"><strong>Truncate directive applied</strong></div>
    <br/>
    <div class="row" appTruncate>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
    <br/>
    <br/>
    <div class="row">
      <div class="col-md-3">
        <div [appSpinner]="networkActivity" class="panel panel-default">
          <div class="panel-heading">Spinner demo</div>
          <div class="container-fluid">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class DirectivesComponent implements OnInit {

  public networkActivity = false;

  constructor() { }

  ngOnInit() {
    setInterval(()=>this.networkActivity =  !this.networkActivity, 3000);
  }

}
