import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientChangepasswordComponent } from '../patient-changepassword/patient-changepassword.component';

import { PatientDashboardComponent } from '../patient-dashboard/patient-dashboard.component';
import { PatientFavouriteComponent } from '../patient-favourite/patient-favourite.component';
import { PatientMyprofileComponent } from '../patient-myprofile/patient-myprofile.component';
import { PatientScheduleComponent } from '../patient-schedule/patient-schedule.component';

import { ParientsComponent } from './parients.component';


  const routes: Routes = [
    { path:'' , component:ParientsComponent,
    
      children:[
        // {path:'parients' , component:ParientsComponent},
        {path:'dashboard' , component:PatientDashboardComponent},
        {path:'favourtite' , component:PatientFavouriteComponent},
        {path:'schedule' , component:PatientScheduleComponent},
        {path:'myprofile' , component:PatientMyprofileComponent},
        {path:'changepassword' , component:PatientChangepasswordComponent},

      ]   
    },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParientsRoutingModule { }
