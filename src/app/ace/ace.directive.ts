declare const ace: any;
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAce]',
})
export class AceDirective {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    const editor = ace.edit(this.el.nativeElement);
    editor.session.setMode('ace/mode/json');
  }
}
