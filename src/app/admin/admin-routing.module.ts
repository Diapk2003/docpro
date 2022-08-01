import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'' , component: AdminComponent,
    children:[ 
      {
    path:'admin' , component: AdminComponent,
        
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
