declare const ace: any;
import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[appAce]',
})
export class AceDirective implements OnInit, OnChanges {
  @Input() editorData = '';
  editor: any = null;
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.editor = ace.edit(this.el.nativeElement);
    this.editor.session.setMode('ace/mode/json');
    this.editor.setTheme('ace/theme/chrome');
  }
  ngOnChanges() {
    const stringData = JSON.stringify(this.editorData, null, '\t');
    this.editor?.setValue(stringData);
  }
}
