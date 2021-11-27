declare const ace: any;
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAce]',
})
export class AceDirective {
  @Input() editorData = '';
  editor: any = null;
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.editor = ace.edit(this.el.nativeElement);
    this.editor.session.setMode('ace/mode/json');
    this.editor.setTheme('ace/theme/chrome');
  }
  ngOnChanges() {
    this.editor?.setValue(this.editorData);
  }
}
