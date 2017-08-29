import { Directive, OnInit, Input, Renderer2, ElementRef, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appSpinner]'
})
export class SpinnerDirective implements OnInit, OnDestroy, OnChanges {


  @Input("appSpinner")
  private _show = false;
  private _originalPos = null;
  private _blocker: HTMLDivElement = null;

  constructor(private _ele: ElementRef, private _renderer: Renderer2) { }

  ngOnInit(): void {
    let ele = (this._ele.nativeElement as HTMLDivElement);
    this._originalPos = ele.style.position;
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    if (changes["_show"] && changes["_show"].currentValue) {
      this.addBlocker();
    }else{
      this.removeBlocker();
    }

  }

  addBlocker(){
    
    let ele = (this._ele.nativeElement as HTMLDivElement);
    this._originalPos = ele.style.position;

    this._blocker = this._renderer.createElement("div") as HTMLDivElement;
    let spinner = this._renderer.createElement("div") as HTMLDivElement;

    this._blocker.appendChild(spinner);
    this._renderer.appendChild(ele, this._blocker);

    ele.style.position = "relative";
    this._blocker.style.position = "absolute";
    this._blocker.style.zIndex = "1";
    this._blocker.style.backgroundColor = "rgba(125,125,125,.4)";    
    this._blocker.style.width = "100%";
    this._blocker.style.height = "100%";
    this._blocker.style.top = "0";

    spinner.innerHTML = "<img src='./assets/ajax-loader.gif'/>";
    spinner.style.textAlign = "center";    
    spinner.style.paddingTop = "75%";

  }

  removeBlocker(){
    let ele = (this._ele.nativeElement as HTMLElement);
    this._renderer.setStyle(this._ele.nativeElement, "position", this._originalPos);
    try{
      if(this._renderer && this._blocker && ele)      
        this._renderer.removeChild(ele, this._blocker);
    }catch(e){
      //FIXME : to verriy, throwing node is not a child. Being removed earlier than this call?
    }
  }

  ngOnDestroy(): void {
    this.removeBlocker();
  }

}
