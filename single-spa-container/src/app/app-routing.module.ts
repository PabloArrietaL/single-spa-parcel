import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'form-app',
    children: [{
      path: '**',
      loadChildren: () => import('@core/spa-host/spa-host.module').then(m => m.SpaHostModule),
      data: { app: 'form-app' }
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
