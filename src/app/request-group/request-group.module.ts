import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestGroupComponent } from './request-group/request-group.component';

const routes: Routes = [
  {
    path: '',
    component: RequestComponent,
  },
];

@NgModule({
  declarations: [
    RequestGroupComponent
  ],
  imports: [CommonModule],
})
export class RequestGroupModule {}
