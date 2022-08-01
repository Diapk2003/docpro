import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogGridComponent } from './admin/blog-grid/blog-grid.component';
import { BlogStandardComponent } from './admin/blog-standard/blog-standard.component';
import { RegisterComponent } from './admin/register/register.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { JuliaJhonesComponent } from './dashboard/julia-jhones/julia-jhones.component';
import { MaryAstorComponent } from './dashboard/mary-astor/mary-astor.component';
import { RexAllenComponent } from './dashboard/rex-allen/rex-allen.component';
import { StellaAdlerComponent } from './dashboard/stella-adler/stella-adler.component';
import { LoginDoctorComponent } from './login-doctor/login-doctor.component';
import { LoginComponent } from './login/login.component';
import { ParientsBookappointmentComponent } from './parients-bookappointment/parients-bookappointment.component';
import { ParientsSubmitreviewComponent } from './parients-submitreview/parients-submitreview.component';

const routes: Routes = [
  {
    path:'login', component:LoginComponent
  },
  {
    path:'logindoctor', component:LoginDoctorComponent
  },
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'blogjrid', component:BlogGridComponent
  },
  {
    path:'standard', component:BlogStandardComponent
  },
  {
    path:'career', component:CareerComponent
  },
  {
    path:'contact', component:ContactComponent
  },
  {path:'JuliaJhones', component:JuliaJhonesComponent },
  {path:'MaryAstor', component:MaryAstorComponent},
  {path:'RexAllen', component:RexAllenComponent},
  {path:'StellaAdler', component:StellaAdlerComponent},
  {
    path:'bookappointment', component:ParientsBookappointmentComponent
  },
  {
    path:'submitreview', component:ParientsSubmitreviewComponent
  },

  
  {
    path:'admin', loadChildren: () => import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path:'dashbord', loadChildren: () => import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path:'Parients', loadChildren: () => import('./parients/parients.module').then(m=>m.ParientsModule)
  },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
