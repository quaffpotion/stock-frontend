import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[clickOutside]"
})
export class TestDirective {
  constructor(private _elementRef: ElementRef) {}
  @HostListener("document:click", ["$event.target"])
  public onClick(targetElement) {
    console.log(this._elementRef.nativeElement.contains(targetElement));
  }
}
