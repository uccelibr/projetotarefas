import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEstyled]'
})
export class EstyledDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {

    this.renderer.setStyle(this.el.nativeElement, 'background-color', '') 
    this.renderer.setStyle(this.el.nativeElement, 'color', '') 
    this.renderer.setStyle(this.el.nativeElement, 'width', '') 
  }

}
