import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from '@layout/base/base.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@module/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'reports-app',
        children: [{
          path: '**',
          loadChildren: () => import('@core/spa-host/spa-host.module').then(m => m.SpaHostModule),
          data: { app: '@react-reports/reports-app' }
        }]
      },
      {
        path: 'form-app',
        children: [{
          path: '**',
          loadChildren: () => import('@core/spa-host/spa-host.module').then(m => m.SpaHostModule),
          data: { app: 'form-app' }
        }]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
