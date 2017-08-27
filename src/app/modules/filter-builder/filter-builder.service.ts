import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FilterBuilderService {

  constructor() { }

  private _operators = {
    "id":[{label:"equal", value:"EQUAL"}, {label:"not equal", value:"NOT_EQUAL"}],
    "string":[{label:"equal", value:"EQUAL"}, {label:"not equal", value:"NOT_EQUAL"},{label:"contains", value:"CONTAINS"}, {label:"starts with", value:"STARTS_WITH"}],
    "number":[{label:"equal", value:"EQUAL"}, {label:"not equal", value:"NOT_EQUAL"},{label:"Greater", value:"GREATER"}, {label:"Lesser", value:"LESS"}, {label:"Greater Or Equal", value:"GREATER_EQUL"}, {label:"Lesser Or Equal", value:"LESS_EQUAL"}],
    "date":[{label:"equal", value:"EQUAL"}, {label:"not equal", value:"NOT_EQUAL"},{label:"Greater", value:"GREATER"}, {label:"Lesser", value:"LESS"}, {label:"Greater Or Equal", value:"GREATER_EQUL"}, {label:"Lesser Or Equal", value:"LESS_EQUAL"}],
    "boolean":[{label:"equal", value:"EQUAL"}, {label:"not equal", value:"NOT_EQUAL"}],
  }

  private _fields:any[] = [
    {label:"Id", value:"id", data_type:"id"},
    {label:"Name", value:"name", data_type:"string"},
    {label:"Active", value:"active", data_type:"boolean"},
    {label:"Age", value:"age", data_type:"number"},
    {label:"DOB", value:"dob", data_type:"date"}
  ]

  private _filters:any[] = [];

  getFields():Observable<any[]>{
    return Observable.of([...this._fields]);
  }

  getOperators():Observable<{[key:string]:{label:string; value:string}[]}>{
    return Observable.of({...this._operators});
  }

  getFilters():Observable<any>{
    return Observable.of([...this._filters]);
  }

  addNewFilterRecord():Observable<any>{
    
    let _new =  {      
                  "fields":[...this._fields],
                  "operators": {...this._operators},
                  
                  "selectedField":"id",
                  "selectedOperator":"",
                  "selectedFieldType":"id",
                  "value":"SOME VALUE"
                };
    this._filters = [...this._filters, _new];
    return Observable.of(this._filters);
  }

  removeFilterRecord(record):Observable<any>{
    let idx = this._filters.indexOf(record);
    this._filters.splice(idx,1);
    this._filters = [...this._filters];
    return Observable.of(this._filters);
  }

  updateField(record, selectedValue){
    let field =  this._fields.filter(x=>x.value === selectedValue)[0] || null;
    record = this._filters.filter(x=>x == record)[0] ||  null; // FIXME
    record.selectedField = selectedValue;
    record.selectedFieldType = field.data_type;
    this._filters = [...this._filters];
    return Observable.of(this._filters);
  }

}
