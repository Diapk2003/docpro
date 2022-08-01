import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddlistingComponent } from './addlisting/addlisting.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { DashboardComponent } from './dashboard.component';
import { DrInformationComponent } from './dr-information/dr-information.component';
import { MyPatientsComponent } from './my-patients/my-patients.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RexAllenComponent } from './rex-allen/rex-allen.component';
import { ScheduleTimingComponent } from './schedule-timing/schedule-timing.component';



const routes: Routes = [
  { path:'' , component:DashboardComponent,
    children:[
      {path:'dashbord', component:DashboardComponent},
      {path:'changepassword', component:ChangepasswordComponent},
      {path:'myprofile', component:MyprofileComponent},
      {path:'reviews', component:ReviewsComponent},
      {path:'addlisting', component:AddlistingComponent},
      {path:'appointments', component:AppointmentsComponent},
      {path:'dr-information', component:DrInformationComponent},
      {path:'schedule', component:ScheduleTimingComponent},
      {path:'mypatients', component:MyPatientsComponent},


    ]    
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
