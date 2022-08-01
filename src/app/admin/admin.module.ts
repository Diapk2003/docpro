import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
// import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { AppdownloadComponent } from './appdownload/appdownload.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shredmodul/shared/shared.module';
import { BlogGridComponent } from './blog-grid/blog-grid.component';
import { BlogStandardComponent } from './blog-standard/blog-standard.component';




@NgModule({
  declarations: [
    AdminComponent,
    // FooterComponent,
    RegisterComponent,
    AppdownloadComponent,
    BookappointmentComponent,
    BlogGridComponent,
    BlogStandardComponent,



  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule
    
    
  ]
})
export class AdminModule { }
