import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';

import { RequestComponent } from './request.component';
import { BasicAuthenticationModule } from '../basic-authentication/basic-authentication.module';
import { HeadersModule } from '../headers/headers.module';

const routes: Routes = [
  {
    path: '',
    component: RequestComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatExpansionModule,
    MatTabsModule,
    BasicAuthenticationModule,
    HeadersModule,
  ],
  declarations: [RequestComponent],
})
export class RequestModule {}
