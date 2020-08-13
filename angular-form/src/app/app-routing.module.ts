import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form-component/form.component';
import { EmptyRouteComponent } from './components/empty-route/empty-route.component';


const routes: Routes = [
  {
    path: 'form-app',
    children: [
      {
        path: '',
        component: FormComponent
      }
    ]
  },
  {
    path: '**',
    component: EmptyRouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
