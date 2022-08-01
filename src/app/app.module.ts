import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ParientsComponent } from './parients/parients.component';
import { PatientMenuComponent } from './patient-menu/patient-menu.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { PatientFavouriteComponent } from './patient-favourite/patient-favourite.component';
import { PatientScheduleComponent } from './patient-schedule/patient-schedule.component';
import { PatientMyprofileComponent } from './patient-myprofile/patient-myprofile.component';
import { PatientChangepasswordComponent } from './patient-changepassword/patient-changepassword.component';
import { ParientsSubmitreviewComponent } from './parients-submitreview/parients-submitreview.component';
import { ParientsBookappointmentComponent } from './parients-bookappointment/parients-bookappointment.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { LoginDoctorComponent } from './login-doctor/login-doctor.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ParientsComponent,
    PatientMenuComponent,
    PatientDashboardComponent,
    PatientFavouriteComponent,
    PatientScheduleComponent,
    PatientMyprofileComponent,
    PatientChangepasswordComponent,
    ParientsSubmitreviewComponent,
    ParientsBookappointmentComponent,
    CareerComponent,
    ContactComponent,
    LoginDoctorComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxUiLoaderHttpModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NgxStarRatingModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
