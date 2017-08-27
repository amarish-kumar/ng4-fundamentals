import { Component, OnInit } from '@angular/core';
import { FilterBuilderService } from './filter-builder.service';

@Component({
  selector: 'app-filter-builder',
  templateUrl: './filter-builder.component.html',
  styles: []
})
export class FilterBuilderComponent implements OnInit {

  public filters:any[] = [];
  
  constructor(private _fbs:FilterBuilderService) { }

  ngOnInit() {
    this._fbs
      //.getFilters()
      .addNewFilterRecord()
      .take(1)
      .subscribe((data)=>{        
        this.filters = data;
      });
  }
  onNewRecord(){
    this._fbs
    .addNewFilterRecord()
    .take(1)
    .subscribe((data)=>{        
      this.filters = data;
    });
  }

  onRemoveRecord(record){
    this._fbs
    .removeFilterRecord(record)
    .take(1)
    .subscribe((data)=>{        
      this.filters = data;
    });
  }

  fieldUpdated(record, selectedValue, event){
    this._fbs
    .updateField(record, selectedValue)
    .take(1)
    .subscribe((data)=>{        
      this.filters = data;
    });
  }

}
