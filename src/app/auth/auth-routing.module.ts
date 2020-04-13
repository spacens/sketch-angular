import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent, NbLogoutComponent } from '@nebular/auth';

import { NgxLoginComponent } from './login/login.component';
import { NgxRegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NgxLoginComponent,
      },
      {
        path: 'login',
        component: NgxLoginComponent,
      },
      {
        path: 'register',
        component: NgxRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
    ],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}
