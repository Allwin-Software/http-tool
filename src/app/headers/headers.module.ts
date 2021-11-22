import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { HeadersComponent } from './headers/headers.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
  declarations: [HeadersComponent],
  exports: [HeadersComponent],
})
export class HeadersModule {}
