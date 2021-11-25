import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'request',
    loadChildren: () => import('./request-group/request-group.module').then((m) => m.RequestGroupModule),
  },
  {
    path: '**',
    redirectTo: 'request',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
