import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { RequestGroupComponent } from './request-group/request-group.component';
import { RequestModule } from '../request/request.module';

const routes: Routes = [
  {
    path: '',
    component: RequestGroupComponent,
  },
];

@NgModule({
  declarations: [RequestGroupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatTabsModule,
    RequestModule,
    MatTooltipModule,
    MatIconModule,
  ],
})
export class RequestGroupModule {}
