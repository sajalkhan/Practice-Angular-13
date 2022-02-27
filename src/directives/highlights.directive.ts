import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appHighlights]',
})
export class HighlightsDirective implements OnInit {
  // constructor(private el: ElementRef) {
  //   this.el.nativeElement.style.backgroundColor = 'yellow';
  // }

  //👇 this is good way
  // constructor(private el: ElementRef) {}

  // ngOnInit() {
  //   this.el.nativeElement.style.backgroundColor = 'yellow';
  // }

  //👆 ei way k aro sort a likha jabe nicher moto kore

  @HostBinding('style.backgroundColor') bgColor: any;
  @HostListener('mouseenter') onMouseEnter() {
    this.bgColor = 'blue';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = 'blueviolet';
  }

  ngOnInit() {
    this.bgColor = 'blueviolet';
  }
}
