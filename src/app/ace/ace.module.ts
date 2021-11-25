import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AceDirective } from './ace.directive';

@NgModule({
  declarations: [AceDirective],
  imports: [CommonModule],
  exports: [AceDirective],
})
export class AceModule {}
