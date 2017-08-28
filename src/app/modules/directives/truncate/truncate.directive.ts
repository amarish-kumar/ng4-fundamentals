import { Directive, ElementRef, Renderer2, OnInit, OnDestroy, HostListener } from '@angular/core';

@Directive({
  selector: '[appTruncate]'  
})
export class TruncateDirective implements OnInit, OnDestroy{
  
  private _text = "";
  private _enter;
  private _leave;
  private _tip:HTMLDivElement = null;

  constructor(private _eleRef: ElementRef, private _renderer:Renderer2) {}

  ngOnInit(): void {
    
    let ele = this._eleRef.nativeElement;
    this._text = (this._eleRef.nativeElement as HTMLDivElement).innerText;
    (this._eleRef.nativeElement as HTMLDivElement).innerHTML = this._text.substr(0, 100) + "<a href='#'>...</a>";    
    let a = ele.querySelector("a");
    this._renderer.setStyle(a, "position", "relative");

    this._enter = this._renderer.listen(a, 'mouseenter', (evt) => {
    
      this._tip = this._renderer.createElement("div");
      this._tip.innerText = this._text;
      this._tip.style.backgroundColor = "red";      
      this._tip.style.border = "1px solid black";    
      this._tip.style.position = "absolute";
      this._tip.style.top = "15px";
      this._tip.style.left = "0px"
      this._tip.style.width = "150px";
      this._tip.style.zIndex = "1";
      
      this._renderer.appendChild(a, this._tip);

    });

    this._leave = this._renderer.listen(a, 'mouseleave', (evt) => {
      if(this._tip){
        this._renderer.removeChild(a, this._tip);
        this._tip = null;
      }
    });

  }  

  ngOnDestroy(){
    this._enter();
    this._leave();
    this._text = null;
  }

}
