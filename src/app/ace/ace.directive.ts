declare const ace: any;
import { Directive, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appAce]',
})
export class AceDirective implements OnInit, OnChanges {
  @Input() editorData = '';
  @Output() editorDataChanged = new EventEmitter();
  editor: any = null;
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.editor = ace.edit(this.el.nativeElement);
    this.editor.session.setMode('ace/mode/json');
    this.editor.setTheme('ace/theme/chrome');
    this.editor.on('change', () => {
      const editorData = this.editor.getValue();
      this.editorDataChanged.emit(editorData);
    });
  }
  ngOnChanges() {
    const stringData = JSON.stringify(this.editorData, null, '\t');
    this.editor?.setValue(stringData);
  }
}
