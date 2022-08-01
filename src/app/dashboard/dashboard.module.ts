import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AddlistingComponent } from './addlisting/addlisting.component';
import { AppointmentsComponent } from './appointments/appointments.component';
// import { DrInformationComponent } from './dr-information/dr-information.component';
import { ScheduleTimingComponent } from './schedule-timing/schedule-timing.component';
import { MyPatientsComponent } from './my-patients/my-patients.component';
import { JuliaJhonesComponent } from './julia-jhones/julia-jhones.component';
import { MaryAstorComponent } from './mary-astor/mary-astor.component';
import { RexAllenComponent } from './rex-allen/rex-allen.component';
import { StellaAdlerComponent } from './stella-adler/stella-adler.component';
import { SharedModule } from '../shredmodul/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
// import { TabalDataComponent } from './tabal-data/tabal-data.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    DashboardComponent,
    MenubarComponent,
    ChangepasswordComponent,
    MyprofileComponent,
    ReviewsComponent,
    AddlistingComponent,
    AppointmentsComponent,
    // DrInformationComponent,
    ScheduleTimingComponent,
    MyPatientsComponent,
    JuliaJhonesComponent,
    MaryAstorComponent,
    RexAllenComponent,
    StellaAdlerComponent,
    // TabalDataComponent,



  
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule

   
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DashboardModule { }
